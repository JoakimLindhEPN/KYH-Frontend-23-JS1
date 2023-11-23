const API_KEY = '4e901a92cea3d21de075cc4ddd8bad46'
const CNT = 5

const displayResults = (data) => {

  document.querySelector('.city-name').textContent = data.city.name
  document.querySelector('.temp').innerHTML = `${Math.round(data.list[0].main.temp)}<span>&deg;</span>`
  document.querySelector('.icon').style.background = `url(https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png)`
  document.querySelector('.description').textContent = data.list[0].weather[0].description

  // Detta get bara H/L på dom senaste 3 timmarna. Kanske vill göra en till hämtning mot API:et?
  document.querySelector('.hi-low').innerHTML = `
    <p>H: <span>${Math.round(data.list[0].main.temp_max)}&deg;</span></p>
    <p>L: <span>${Math.round(data.list[0].main.temp_min)}&deg;</span></p> 
  `

  let now = new Date()
  document.querySelector('.date').textContent = buildDateString(now)

  const hourly = document.querySelector('.hourly')
  hourly.innerHTML = ''

  for(let i = 1; i < data.list.length; i++) {

    let time = (data.list[i].dt - data.city.timezone) * 1000
    console.log(time)

    const hour = new Date(time).getHours()

    hourly.insertAdjacentHTML('beforeend', `
      <div class="houly_hour">
        <p class="time">${hour}:00</p>
        <div class="icon-container">
          <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weather icon">
        </div>
        <p class="hourly_temp"><span>1&deg;</span></p>
      </div>
    `)
  }
}




const buildDateString = (date) => {

  const months = ['January', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December']
  const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']

  const day = days[date.getDay()]
  const _date = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${day} ${_date} ${month} ${year}`
}









window.addEventListener('load',() => {
  
  if(navigator && navigator.geolocation) {
    let lang = navigator.language || "en"

    navigator.geolocation.getCurrentPosition(async (pos) => {
      console.log(pos)
      
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      try {
        
        console.log({lat, lon})
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&cnt=${CNT}&units=metric`)
        console.log(res)
    
        if(res.status !== 200) {
          throw new Error('Something went wrong, status: ' + res.status + '-' + res.statusText)
        }
    
        const data = await res.json()
        console.log(data)
        displayResults(data)
      } 
      catch (error) {
        console.log(error.message)
      }
    })
  }

  // TODO: hämta standard information om navigator.geolocation inte finns
})