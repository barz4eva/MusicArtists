

var accessToken = "BQCVwpkRO7yNsL3qCIGf_SEw-iEtdlBTpdNz06CyxCXaI4BMWDSHt3MEiEKQx2Ln9bPNUpnhuyqKhU8r30xt0cqMpoQ5aDAYCJN7TR1J4k4q7-qEIZMuz6kegMWhblWc60mlD3j22yX6AujPGsxnvjCF4oaMjY8";
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
