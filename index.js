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
}
})