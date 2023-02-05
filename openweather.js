const weatherArray = ['https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=1ccf606771220f99ee80e304554cf375', 'https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.12574&appid=1ccf606771220f99ee80e304554cf375']

const url = weatherArray.map(async url => {
    try {
        const respons = await fetch(url)
        const data = await respons.json()
        console.log(data)


        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let br = document.createElement('br')
        let span = document.createElement('span')
        let img = document.createElement('img')
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



        const time = new Date(data.dt * 1000).toLocaleString('en-En', options)

        //img.setAttribute('src', './svg/compass .svg')
        div.append(span.innerHTML = time)
        div.append(br)
        div.append(h2.innerHTML = data.name, ' ', data.sys.country)


        document.body.append(div);
        document.body.style.backgroundColor = ''
        document.body.style.display = 'block'

    } catch (err) {
        alert(err)
    }
})

