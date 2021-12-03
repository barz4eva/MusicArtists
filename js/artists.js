

var accessToken = "BQC_Bd7w7YC2DSQgUYvb3yAOx9q2kCQEnGnJsIYOqFMUOrjF-K-q-a3l_7ncTbolopwnEzRlXz5BSD2nFXqK1VfTkZ1ovU71ThSLlkgSorNsPLXBC6zNxQtWgSgmsH9jxPElM77MdTglTnvr8DpC6ayk8Z393mQ";
$.ajax({
    url: 'https://api.spotify.com/v1/search?q=travis&type=artist',
    type: 'GET',
    dataType: "json",
    headers: {
        'Authorization' : 'Bearer ' + accessToken
    }
})
  .done(response => {
     renderArtistList(response.artists.items);
  })

  function renderArtistList (artist = []){
      artist.forEach(art => {
          renderArtist(art);
      })
  }

  function renderArtist(art){
    const $template = $($('#artist-template').html());
    $template.find('.artist-name').text(art.name);
    $template.find('.artist-image').text(art.images[0].url);
    $template.find('.artist-type').text(art.type);
    $template.find('.artist-genre').text(art.genres[0]);
    $template.find('.artist-followers').text(art.followers.total);
    $('#artist-list').append($template);
  }

  

