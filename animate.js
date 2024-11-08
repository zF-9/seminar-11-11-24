$(document).ready(function() {
    $("#canvas").hide();
    $('#background-video').hide();

    if (localStorage.getItem('ribbonCut') != 'cut') {
        $('.ribbon').delay(2500).fadeIn();
        $('#imgFollow').delay(3000).fadeIn();
    };

    $(".ribbon").click(function() {
        $(".ribbon--l").addClass("hide");
        $(".ribbon--r").addClass("hide");
        $(".bow").addClass("hide");
        $("#imgFollow").hide();

        localStorage.setItem('ribbonCut','cut')

        $("#canvas").delay(1000).fadeIn();
        $("#canvas").hide();
        $('#background-video').delay(5000).fadeIn();
        
    });
});

$(document).mousemove(function (e) {
    $('#imgFollow').offset({
    left: e.pageX + 30,
    top: e.pageY - 20
    });
    $('#imgFollow').css('z-index', '1000');
});