(function() {

    var ICON_WIDTH = 80;

    function image( object, context ) {
        var img = new Image();
        img.src = object.src;
        img.width = object.width;
        img.height = object.height;
        img.onload = function() {
            context.drawImage( img, object.x, object.y, img.width, img.height );
        };
        return img;
    }

    $(document).ready(function() {

        var canvas = document.getElementById("architecture");
        var context = canvas.getContext("2d");
        context.font = "" + ICON_WIDTH + 'px "Glyphicons Halflings"';

        var logoSize = 180;
        var logo = image({
            src: "images/mycroft.svg",
            width: logoSize, height: logoSize,
            x: canvas.width/2 - logoSize / 2,
            y: canvas.height/2 - logoSize / 2 + 20
        }, context );

        var tv = image({
            src: "images/tv.svg",
            width: ICON_WIDTH, height: ICON_WIDTH,
            x: 250 - ICON_WIDTH / 2, y: 25
        }, context );

        var music = image({
            src: "images/music.svg",
            width: ICON_WIDTH, height: ICON_WIDTH,
            x: 20, y: 100
        }, context );

        var clock = image({
            src: "images/clock.svg",
            width: ICON_WIDTH, height: ICON_WIDTH,
            x: 400, y: 100
        }, context );

        var mic = image({
            src: "images/mic.svg",
            width: ICON_WIDTH, height: ICON_WIDTH,
            x: 340, y: 300
        }, context );

        var rain = image({
            src: "images/rain.svg",
            width: ICON_WIDTH, height: ICON_WIDTH,
            x: 80, y: 300
        }, context );

    });

})();
