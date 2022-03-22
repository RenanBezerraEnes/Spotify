const artists = ["eminem", "queen", "metallica", "cold play"]
window.onload = () => {
    artists.forEach((artistLoad) => {
        loadSongs(artistLoad)
    })
}



const loadSongs = (artists) => {

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artists)
    .then((responseData) => responseData.json())
    .then(({data}) =>{
        const cards = document.querySelector(".loadCards")

        cards.innerHTML = data.map((songs) => 
        `
        <div class="col-1 mb-3">
        <div class="card h-100">
          <img
            src="${songs.artist.picture_small}"
            class="img-fluid"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${songs.artist.name}</h5>
            <p> ${songs.title}</p>
            <button class="play" onclick="playMusic('${songs.preview}')">PLAY</button>
            <button class="pause" onclick="pauseMusic('${songs.preview}')s">PAUSE</button>
            </p>
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

const search = () => {

}


const playMusic = () => {
    let btnPlay = document.querySelector(".play");
    btnPlay.onplay = () => {
    }
    
  };
  
const pauseMusic = () => {
    let btnPause = document.querySelector(".pause");
    
  };