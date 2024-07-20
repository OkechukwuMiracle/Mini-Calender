const monthNameEl = document.getElementById('month-name')
const dayNameEl = document.getElementById('day-name')
const dayNumberEl = document.getElementById('day-number')
const year = document.getElementById('year')

const date = new Date();
const month = date.getMonth()
monthNameEl.innerHTML = date.toLocaleString('en', {
    month: 'long'
})

dayNameEl.innerHTML = date.toLocaleString('en', {
    weekday: 'long'
})

dayNumberEl.innerHTML = date.getDate()

year.innerHTML = date.getFullYear()