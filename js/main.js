let display = document.querySelector('.container');
let inputs = document.querySelector('.input-form');
let submit = document.querySelector('.submit');
submit.addEventListener('click', function (e){
e.preventDefault();
   console.log(inputs.value);
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputs.value}&appid=70e1ed322b02acbc57d443dd91065f3e`, {
  })
  .then(response => response.json())
  .then((json)=>{
   let temp = `${json.main.temp - 273}`;
let tempRound = Math.floor(temp);
display.innerHTML = `<div class = "main-card">
<h1>${json.name}</h1>
<h2>${tempRound}° </h2>
<h3>${json.weather[0].description}</h3>
<img src="https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" alt ="img">
</div>`;
     console.log(json);

  });

})

