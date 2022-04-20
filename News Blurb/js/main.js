//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  fetch('https://inshortsapi.vercel.app/news?category=all')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        document.querySelector('h2').innerText = data.data[0].author
        document.querySelector('h3').innerText = data.data[0].content
        document.querySelector('h4').innerText = data.data[0].date
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}