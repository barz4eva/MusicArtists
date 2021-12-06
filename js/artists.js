
const baseUrl = 'https://api.spotify.com/v1/search?'
var accessToken = "BQAGNbSB4Gq7BFCg9X1jiISK8xeiAo9PkflyeVy4AYD94jz-zZ9qIEcPnrQcUbPGWt5GzJm2zXD9stAut4mXgydKwW5M36BpxNXjA3mZKqISwkgX5lZ0eNyiUimtovQhImOucgH-kKY3dtCwNxwAFVPcQJEdpEc";


function getArtists(){

  var search =`q=${$('#search-artist').val()}` 
  var artistType = `type=${$('#selection option:selected').val()}`

  $.ajax({
    
    url: `${baseUrl}${search}&${artistType}`,
    type: 'GET',
    dataType: "json",
    headers: {
        'Authorization' : 'Bearer ' + accessToken
    }
})
  .done(response => {
    if(artistType == "type=artist"){
      renderArtistList(response.artists.items);
    }
    else if(artistType == "type=track") {
      renderTrackList(response.tracks.items)
    }
    else renderAlbumList(response.albums.items);
    
  })
}

  function renderArtistList (artist = []){
    $('#artist-list').empty();
      artist.forEach(art => {
          renderArtist(art);
      })
  }

  function renderTrackList (track = []){
    $('#artist-list').empty();
    track.forEach(track =>{
      renderTracks(track);
    })
  }

  function renderAlbumList (album = []){
    $('#artist-list').empty();
    album.forEach(album =>{
      renderAlbums(album);
    })
  }

  function renderArtist(art){
    const $template = $($('#artist-template').html());
    $template.find('.artist-name').text(art.name);
    $template.find('.artist-image').attr('src', art.images[2].url);
    $template.find('.artist-type').text(art.type);
    $template.find('.artist-genre').text(art.genres[0]);
    $template.find('.artist-followers').text(`followers: ${art.followers.total }`);
    $('#artist-list').append($template);
  }

  function renderTracks(track){
    const $template = $($('#artist-template').html());
    $template.find('.artist-name').text(track.name);
    $template.find('.artist-genre').text(track.artists[0].name);
    $template.find('.artist-type').text(track.type);
    
    $('#artist-list').append($template);
  }

  function renderAlbums(album){
    const $template = $($('#artist-template').html());
    $template.find('.artist-name').text(album.name);
    $template.find('.artist-image').attr('src', album.images[2].url);
    $template.find('.artist-genre').text(album.artists[0].name);
    $template.find('.artist-type').text(album.type);
    
    $('#artist-list').append($template);
  }


  
 
  $('#get-artists').click(()=> {
    getArtists();
  })
 