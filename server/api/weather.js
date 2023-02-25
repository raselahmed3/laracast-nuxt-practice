export default async ()=>{
    const weather = await $fetch(`https://api.openweathermap.org/data/2.5/weather?lat=23.8103&lon=90.4125&appid=${process.env.OPEN_WEATHER_API_KEY}`);


return weather
}