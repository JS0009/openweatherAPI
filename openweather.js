const weatherArray = ['https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=1ccf606771220f99ee80e304554cf375', 'https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.12574&appid=1ccf606771220f99ee80e304554cf375']

const url = weatherArray.map(async url => {
    try {
        const respons = await fetch(url)
        const data = await respons.json()
        console.log(data)

        let div = document.createElement('div')
        let options = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }
        const time = new Date(data.dt * 1000).toLocaleString('us-US', options)

        const celsius = Math.trunc(data.main.temp - 273)
        const feels_like = Math.trunc(data.main.feels_like - 273)
        const descrip = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)


        div.innerHTML =
            `
            <span>
                ${time}
            </span>
            <h2>
                ${data.name} ${data.sys.country}
            </h2>
            <div>
                <div>
                    <img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'>
                    </img>
                    <span class ="celsius">
                    ${celsius}\xB0C 
                    </span>
                </div>
                <div>Feels like ${feels_like}\xB0C. ${descrip}
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        `
        document.body.append(div)

    } catch (err) {
        alert(err)
    }
})


