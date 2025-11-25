const form = document.querySelector('.eventForm')
const warning = document.getElementById('warning')

form.addEventListener('submit', (e) => {
    e.preventDefault()

const eventName = document.querySelector('.event-name')
const eventDate = document.querySelector('.date')
const eventTime = document.querySelector('.time')

if (eventName.value === '' || eventDate.value === '' || eventTime.value === '') {
    warning.textContent = 'Please fill all the inputs';
    return; 
} else {
    warning.textContent = ''
}


const targetString = `${eventDate.value}T${eventTime.value}`
const targetDate = new Date(targetString)
console.log(targetDate.getTime())



function fn () {
    const diff = targetDate.getTime() - Date.now()
    let sec = Math.floor(diff / 1000) % 60
    let min = Math.floor(diff / (1000 * 60)) % 60
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 60
    let days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30
    let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))

    if (diff <= 0) {
        clearInterval(timer)
        console.log("Eventet är nått!")
        return;
    }

    console.log("Tid kvar (ms):", diff);
}

const timer = setInterval(fn, 1000)
})