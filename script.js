var swiper= new swiper(".mySwiper-1", {
    slidesperview:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper= new swiper(".mySwiper-1", {
    slidesperview:3,
    spaceBetween: 20,
    loop:true,
    loopFillGropWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0:{
            slidesperview:1,
        }
       520: {
            slidesperview:2,
        }
        920: {
            slidesperview:3,
        }


    }
})

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input) {
    input.addEventlistener('change',function(){
        let id =input. ariaValueMax;
        let thiSwiper =document.getElementById('swiper' + id);
        thiSwiper.swiper.update();
    })
})
