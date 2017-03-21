$(document).ready(function () {
    console.log("ready!");
    testeJsonWithParamter();
});

function testeJsonWithParamter() {
    var url = "http://api.giphy.com/v1/gifs/search?q=children's";
    //&api_key=dc6zaTOxFJmzC

    $.getJSON(url, { api_key: "dc6zaTOxFJmzC" }, function (data) {
        $.each(data.data, function (index) {
            appendImg(data.data[index].images.original.url);
        });
    });
}

function appendImg(urlImage) {
    $('#divCarousel').prepend("<div class='item'><img src=\'" + urlImage + "\'  style='width:100%; height:600px;' /></div>")
}


