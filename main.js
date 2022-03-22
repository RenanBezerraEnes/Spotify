const artists = ["eminem", "queen", "metallica", "coldplay"]
window.onload = () => {
   //const artistContainer..........querySelect
   const artistContainer = document.querySelector("#artist-container")
    artists.forEach((artistLoad) => {
      // creating a row inside of the current artistContainer
      // aristCtonainer.innerHTML = 'div id='ártist-row-artistLoad....' row </div>'
      // row.id= artist-row + artistLoad // #artist-row-eminem
      // creating the row and adding to the container innerHTML
      artistContainer.innerHTML += `
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4" id="artist-row-${artistLoad}">
      </div>
      `
        loadSongs(artistLoad)
    })
}



const loadSongs = (artists) => {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artists)
    .then((responseData) => responseData.json())
    .then(({data}) =>{
        const cards = document.querySelector("#artist-row-" + artists)

        cards.innerHTML += data.map((songs) => 
        `
        <div class="col mb-3">
        <div class="card h-100">
          <img
            src="${songs.artist.picture_small}"
            class="img-fluid"
            alt="..."
          />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${songs.artist.name}<h6> ${songs.title}</h6></h5>
            <div class="d-flex">
            <i class="bi bi-play-fill" onclick="playMusic('${songs.preview}')" style="cursor: pointer"></i>
            <i class="bi bi-pause" onclick="pauseMusic()" style="cursor: pointer"></i>
            </div>
          </div>
          <div class="card-footer">
            <small class="text-muted">rank: ${songs.rank}</small>
          </div>
        </div>
      </div>
        `). join(" ")
    })
    .catch((error) => console.log(error))
}

// ******************************************************** SEARCH BAR ***************************************************************

const search = (valueSong) => {
  const inputValue = valueSong.target.value
  
}


const playMusic = (preview) => {
    let audio = document.querySelector("audio");
    audio.src=preview
    audio.play();
  };
  
const pauseMusic = () => {
  let audio = document.querySelector("audio");
  audio.pause();
  };