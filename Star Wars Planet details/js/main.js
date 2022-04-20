//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value

  fetch(`https://swapi.dev/api/planets/?search=${choice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)
        document.querySelector('h2').innerText = `Planet Name: ${data.results[0].name}`
        document.querySelector('h3').innerText = `Population: ${data.results[0].population}`
        document.querySelector('h4').innerText = `Gravity: ${data.results[0].gravity}`
        document.querySelector('h5').innerText = `Films: ${data.results[0].films}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}