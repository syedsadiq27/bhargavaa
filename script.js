

(function(){
    window.onresize = displayWindowSize;
function displayWindowSize(){
    let width = window.innerWidth;
    let height = window.innerHeight;

    console.log(width);


    if (width < 600) {
        $(".slide1").attr('src', "images/carousel-mob-1.jpg");
        $(".slide2").attr('src', "images/carousel-mob-2.jpg");
        $(".slide3").attr('src', "images/carousel-mob-3.jpg");
    } else {
        $(".slide1").attr('src', "images/carousel1.jpg");
    }
};
}


)();


