const weatherArray = ['https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=1ccf606771220f99ee80e304554cf375', 'https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.12574&appid=1ccf606771220f99ee80e304554cf375', 'https://api.openweathermap.org/data/2.5/weather?lat=43.9336&lon=42.5107&appid=1ccf606771220f99ee80e304554cf375']

let style = document.createElement('style')
document.head.append(style)

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

        const celsius = Math.trunc(data.main.temp_min - 273)
        const feels_like = Math.trunc(data.main.feels_like - 273)
        const descrip = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1)
        let speed = data.wind.speed
        let deg = data.wind.deg
        let cityName = data.name
        console.log(cityName)

        let speedString;


        if (speed <= 1.4) {
            speedString = 'calm'

        } else if (speed >= 1.5) {
            speedString = 'quiet'

        } else if (speed <= 3.3) {
            speedString = 'light breeze'

        } else if (speed <= 5.4) {
            speedString = 'light wind'

        } else if (speed <= 7.9) {
            speedString = 'moderate'

        } else if (speed <= 10.7) {
            speedString = 'fresh'

        } else if (speed <= 13, 8) {
            speedString = 'strong'

        } else if (speed <= 17.1) {
            speedString = 'hard'

        } else if (speed <= 20.7) {
            speedString = 'very hard'

        } else if (speed <= 24.4) {
            speedString = 'storm'

        } else if (speed <= 28.4) {
            speedString = 'hard storm'

        } else if (speed <= 32.6) {
            speedString = 'violent storm'

        } else if (speed >= 32.7) {
            speedString = 'HURRICANE'

        } else { speedString = 'unknown' }


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
                <div>
                    Feels like ${feels_like}\xB0C. ${descrip}. Wind status: ${speedString}
                </div>
                <ul>
                    <li>
                        <div>
                            <svg class="speed${data.name}" width="12" height="10" viewBox="0 0 106 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="black" d="M105.5 77.8268L1.44252 46.4132L105.5 0.765333V39.25V77.8268Z" stroke="black" />
                            </svg>
                        </div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <hr/>
            </div>
        `
        document.body.append(div)


        style.insertAdjacentHTML
            ("afterbegin", `
        .speed${data.name}{
            transform: rotate(${deg}deg);
        }
            `)


    } catch (err) {
        console.log(err)
    }
})


