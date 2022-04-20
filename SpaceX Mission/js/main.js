//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  fetch('https://api.spacexdata.com/v4/launches/latest')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `Launch Time UTC: ${data.date_utc}`
        document.querySelector('h3').innerText = `Mission Details: ${data.details}`
        document.querySelector('h4').innerText = `Success? ${data.success}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}