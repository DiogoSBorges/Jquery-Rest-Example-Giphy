$(document).ready(function () {
    getGifs("funny cats");

    $("#btnSearch").click(function () {
        var textSearch = $('#inputSearch').val();
        $("#myImages").empty();
        getGifs(textSearch);

    });
});

function getGifs(search) {
    var url = "http://api.giphy.com/v1/gifs/search?q=" + search.replace(" ", "+");
    $.getJSON(url, { api_key: "dc6zaTOxFJmzC" }, function (data) {
        $.each(data.data, function (index) {
            appendImg(data.data[index].images.original.url);
        });
    });
}

function appendImg(urlImage) {
    $('#myImages').prepend("<div class='col-md-3' style='padding-bottom: 15px;'><a href='#''><img src=\'" + urlImage + "\' height='300' width='300' class='img-rounded' /></div>")
    //height='80' width='80'
}

function testePost() {
    $.post("https://jsonplaceholder.typicode.com/photos", function (data) {
        $.each(data, function (i, item) {
            alert(data[i].url);
        });

    });
}