

var accessToken = "xxxx";
$.ajax({
    url: 'https://api.spotify.com/v1/search?q=travis&type=artist',
    type: 'GET',
    dataType: "json",
    headers: {
        'Authorization' : 'Bearer ' + accessToken
    },
    success: function(data) {
        console.log(data);
    }
});
