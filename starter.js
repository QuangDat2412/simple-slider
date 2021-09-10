window.addEventListener('load', function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const slider = $('.slider');
    const sliderMain = $('.slider-main');
    const sliderItems = $$('.slider-item');
    const nextBtn = $('.slider-next');
    const prevBtn = $('.slider-prev');
    const dotItem = $$('.slider-dot-item');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    nextBtn.onclick = function () {
        nextSlider();
        dotAction(index);
    }

    prevBtn.onclick = function () {
        prevSlider();
        dotAction(index);
    }
    setInterval(() => {
        nextSlider();
        dotAction(index);
    }, 10000);
    function dotAction(index){
        if ($('.slider-dot-item.active')) 
        {
            $('.slider-dot-item.active').classList.remove('active');
        }
        dotItem[index].classList.add('active')
    }
    function nextSlider(){
        index++;
        positionX = positionX -sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
        if(index>=slidesLength) {
            sliderMain.style = `transform: translateX(0)`;
            index=0
            positionX = 0;
        };
    }
    function prevSlider(){
        index--;
        positionX = positionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px)`;
        if(index<0){
            index=slidesLength-1;
            positionX = positionX - sliderItemWidth*slidesLength;
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }
    }
})