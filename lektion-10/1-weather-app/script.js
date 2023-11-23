const API_KEY = '4e901a92cea3d21de075cc4ddd8bad46'


const displayResults = (data) => {
  
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
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${lang}`)
        console.log(res)
    
        if(res.status !== 200) {
          throw new Error('Something went wrong, status: ' + res.status + '-' + res.statusText)
        }
    
        const data = await res.json()
        console.log(data)
      } 
      catch (error) {
        console.log(error.message)
      }
    })
  }

  // TODO: hämta standard information om navigator.geolocation inte finns
})