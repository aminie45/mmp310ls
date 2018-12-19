/* loads the YouTube API script */
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);

function tplawesome(e, t) {
    res = e;
    for (var n = 0; n < t.length; n++) {
        res = res.replace(/\{\{(.*?)\}\}/g, function (e, r) {
            return t[n][r]
        })
    }
    return res
}

// Button Controls
function createPlayer(data) {

    var div = document.createElement("div");
    document.getElementById("results").appendChild(div);

    var play = document.createElement('button');
    play.textContent = "Play";
    document.getElementById("results").appendChild(play);

    var stop = document.createElement('button');
    stop.textContent = "Stop";
    document.getElementById("results").appendChild(stop);

    var pause = document.createElement('button');
    pause.textContent = "Pause";
    document.getElementById("results").appendChild(pause);


    var player = new YT.Player(div, {
        videoId: data.id.videoId,
        events: {
            'onReady': onPlayerReady,
        }
    });

    function onPlayerReady() {
        console.log('ready');

        play.onclick = function () {
            player.playVideo();
        };

        stop.onclick = function () {
            player.stopVideo();
        };

        pause.onclick = function () {
            player.pauseVideo();
        };

    }


}

$(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();


        // prepare the request
        console.log(gapi);
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            key: "AIzaSyCnmOTZfzsKkQIb2fjjILv9zSm9Lo4t8bY",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 6,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
        });


        // execute the request
        request.execute(function (response) {
            var results = response.result;
            $("#results").html("");
            $.each(results.items, function (index, item) {
                createPlayer(item);
            });
            resetVideoHeight();
        });
    });

    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9 / 16);
}

function init() {
    gapi.client.setApiKey("AIzaSyCnmOTZfzsKkQIb2fjjILv9zSm9Lo4t8bY");
    gapi.client.load("youtube", "v3", function () {
        console.log(gapi)
        // yt api is ready
    });
}
