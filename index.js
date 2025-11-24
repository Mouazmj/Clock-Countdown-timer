const form = document.querySelector('.eventForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()

const eventName = document.querySelector('.event-name')
const eventDate = document.querySelector('.date')
const eventTime = document.querySelector('.time')

console.log(eventName.value)
console.log(eventDate.value)
console.log(eventTime.value)
})