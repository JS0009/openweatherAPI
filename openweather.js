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



        div.innerHTML =
            `
            <span>
                ${time}
            </span>
            <h2>
                ${data.name}${data.sys.country}
            </h2>
            <div>
                <div>
                    <svg>
                    </svg>
                    <span>
                    </span>
                </div>
                <div></div>
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

        // div.insertAdjacentHTML("afterend",
        //     `
        //     <div>
        //         <div>
        //             <svg>
        //             </svg>
        //             <span>
        //             </span>
        //         </div>
        //         <div></div>
        //         <ul>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //             <li></li>
        //         </ul>
        //     </div>
        //     `)


    } catch (err) {
        alert(err)
    }
})


