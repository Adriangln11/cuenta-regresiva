const date = new Date('January 01, 2024 00:00:00').getTime()
const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

let days, hours, minutes, seconds
let diff


const countdown = () => {
setInterval( () => {
    
    let now = new Date().getTime()
    diff = date - now
    days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    hours = Math.ceil(diff / (1000 * 60 * 60) % 24)
    minutes = Math.ceil(diff / (1000 * 60 ) % 60)
    seconds = Math.ceil(diff / (1000 ) % 60)
    daysElement.innerText = days
    hoursElement.innerText = hours
    minutesElement.innerText = minutes
    secondsElement.innerText = seconds
    if (diff == 0) {
        clearInterval(countdown)
    }
}, 1000)
}

countdown()