const weatherArray = ['https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=1ccf606771220f99ee80e304554cf375', 'https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.12574&appid=1ccf606771220f99ee80e304554cf375']

const url = weatherArray.map(async url => {
    const respons = await fetch(url)
    const data = await respons.json()
    console.log(data)
})
// let div = document.createElement('div')
// let img = document.createElement('img')
// img.setAttribute('src', './svg/compass .svg')
// div.innerHTML = "<p>Привет погода</p>"
// document.body.append(div, img);

