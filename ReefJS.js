// Set slideShowSpeed (milliseconds)
var slideShowSpeed = 8000;

// Duration of crossfade (seconds)
var crossFadeDuration = 3;

// Specify the image files
var Pic = new Array(); // don't touch this
// to add more images, just continue
// the pattern, adding to the array below

Pic[0] = 'background_bro_01.jpg';
Pic[1] = 'background_bro_02.jpg';
Pic[2] = 'background_bro_04.jpg';
Pic[3] = 'background_bro_05.jpg';
Pic[4] = 'background_bro_06.jpg';
Pic[5] = 'background_bro_07.jpg';
Pic[6] = 'background_bro_08.jpg';


// =======================================
// do not edit anything below this line
// =======================================

var Dummyt;
var nCounterj = 0;
var PicLen = Pic.length;

var preLoad = new Array();
for (nCounteri = 0; nCounteri < PicLen; nCounteri++){
    preLoad[nCounteri] = new Image();
    preLoad[nCounteri].src = Pic[nCounteri]
}

function runSlideShow(){
    if (document.all){
        document.images.SlideShow.style.filter='blendTrans(duration=2)';
        document.images.SlideShow.style.filter='blendTrans(duration=crossFadeDuration)';
        document.images.SlideShow.filters.blendTrans.Apply()
    }
    document.images.SlideShow.src = preLoad[nCounterj].src;
    if (document.all){
        document.images.SlideShow.filters.blendTrans.Play()
    }
    nCounterj = nCounterj + 1;
    if (nCounterj > (PicLen-1)) nCounterj=0;
    Dummyt = setTimeout('runSlideShow()', slideShowSpeed)
}