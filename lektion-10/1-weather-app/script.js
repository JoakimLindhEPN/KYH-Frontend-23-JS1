const API_KEY = 'Din api nyckel'
const CNT = 5

const displayHourlyResults = (data) => {

  if(!data) {
    console.log('city not found')
    return
  }

  const hourly = document.querySelector('.hourly')
  hourly.innerHTML = ''

  for(let i = 0; i < data.list.length; i++) {

    let time = (data.list[i].dt - data.city.timezone) * 1000

    const hour = new Date(time).getHours()

    hourly.insertAdjacentHTML('beforeend', `
      <div class="houly_hour">
        <p class="time">${hour}:00</p>
        <div class="icon-container">
          <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weather icon">
        </div>
        <p class="hourly_temp"><span>${Math.round(data.list[i].main.temp)}&deg;</span></p>
      </div>
    `)
  }
}

const displayCurrentResult = (data) => {

  if(!data) {
    console.log('city not found')
    return
  }

  document.querySelector('.city-name').textContent = data.name
  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}<span>&deg;</span>`
  document.querySelector('.icon').style.background = `url(https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
  document.querySelector('.description').textContent = data.weather[0].description

  // Detta get bara H/L på dom senaste 3 timmarna. Kanske vill göra en till hämtning mot API:et?
  document.querySelector('.hi-low').innerHTML = `
    <p>H: <span>${Math.round(data.main.temp_max)}&deg;</span></p>
    <p>L: <span>${Math.round(data.main.temp_min)}&deg;</span></p> 
  `

  let now = new Date()
  document.querySelector('.date').textContent = buildDateString(now)
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
  console.log(navigator)
  navigator.permissions.query({ name: 'geolocation' })
    .then(result => {
      if(result.state === 'granted') {
        let lang = navigator.language || "sv"
    
        navigator.geolocation.getCurrentPosition(async (pos) => {
          console.log(pos)
          
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          
          getMultipleByCord(lat, lon, lang)
          getCurrentByCord(lat, lon, lang)
        })
      } else {
    
        getHourlyWeatherData('stockholm')
          .then(data => {
            displayHourlyResults(data)
          })
        getCurrentWeatherData('stockholm')
          .then(data => {
            displayCurrentResult(data)
          })
      }
      
    })

})



const form = document.querySelector('#city-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(1)

  getHourlyWeatherData(form['city'].value)
    .then(data => {
      displayHourlyResults(data)
    })
  getCurrentWeatherData(form['city'].value)
    .then(data => {
      displayCurrentResult(data)
    })
  
  form['city'].value = ''
})



async function getHourlyWeatherData(value) {
  try {
    const lang = (navigator && navigator.language) || 'sv'
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${API_KEY}&lang=${lang}&cnt=${CNT}&units=metric`)
    console.log(res)

    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status + '-' + res.statusText)
    }

    return await res.json()
    
  } catch (error) {
    
  }
} 
async function getCurrentWeatherData(value) {
  try {
    const lang = (navigator && navigator.language) || 'sv'
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&lang=${lang}&cnt=${CNT}&units=metric`)
    console.log(res)

    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status + '-' + res.statusText)
    }

    return await res.json()
    
  } catch (error) {
    
  }
} 



async function getCurrentByCord(lat, lon, lang) {
  try {
        
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&cnt=${CNT}&units=metric`)
    console.log(res)

    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status + '-' + res.statusText)
    }

    const data = await res.json()
    console.log(data)
    displayCurrentResult(data)
  } 
  catch (error) {
    console.log(error.message)
  }
}
async function getMultipleByCord(lat, lon, lang) {
  try {
        
    console.log({lat, lon})
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}&cnt=${CNT}&units=metric`)
    console.log(res)

    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status + '-' + res.statusText)
    }

    const data = await res.json()
    // console.log(data)
    displayHourlyResults(data)
  } 
  catch (error) {
    console.log(error.message)
  }
}

