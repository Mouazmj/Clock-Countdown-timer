const form = document.querySelector('.eventForm')
const warning = document.getElementById('warning')
const theResults = document.querySelector('.container')
const secondContainer = document.querySelector('.secondContainer')

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
    const tenYears = 10 * 365 * 24 * 60 * 60 * 1000;
    let sec = Math.floor(diff / 1000) % 60
    let min = Math.floor(diff / (1000 * 60)) % 60
    let hours = Math.floor(diff / (1000 * 60 * 60)) % 60
    let days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30
    let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))

    if (diff <= 0) {
        clearInterval(timer)
        theResults.innerHTML = `<p>D : O : N : E</p>`
        return;
    }


    if ( diff > tenYears) {
        warning.textContent = "You can't enter more then 10 years"
        clearInterval(timer)
        return;
    }

    console.log("Tid kvar (ms):", diff);
    theResults.innerHTML = `<p>${month} : ${days} : ${hours} : ${min} : ${sec} :</p>`
    secondContainer.innerHTML = `<p>Month Days Hours Minutes Seconds</p>`
}

const timer = setInterval(fn, 1000)
})