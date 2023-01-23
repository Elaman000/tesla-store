var car = document.getElementById('carr')
btn_red.onclick = red
function red() {
    btn_red.classList.add('img')
    btn_black.classList.remove('img')
    btn_blue.classList.remove('img')
    btn_grey.classList.remove('img')
    btn_white.classList.remove('img')

    carr.classList.add('red')
    carr.classList.remove('blue')
    carr.classList.remove('black')
    carr.classList.remove('grey')
    carr.classList.remove('white')
    setTimeout(()=>{
        car.style.backgroundImage = "url('img/car\ red.jpg')";
    },900)
}
btn_black.onclick = black
function black() {
    btn_red.classList.remove('img')
    btn_black.classList.add('img')
    btn_blue.classList.remove('img')
    btn_grey.classList.remove('img')
    btn_white.classList.remove('img')
    
    carr.classList.add('black')
    carr.classList.remove('blue')
    carr.classList.remove('red')
    carr.classList.remove('grey')
    carr.classList.remove('white')
    setTimeout(()=>{
        car.style.backgroundImage = "url('img/car\ black.jpg')";
    },900)
}
btn_blue.onclick = blue
function blue() {
    btn_red.classList.remove('img')
    btn_black.classList.remove('img')
    btn_blue.classList.add('img')
    btn_grey.classList.remove('img')
    btn_white.classList.remove('img')

    carr.classList.add('blue')
    carr.classList.remove('red')
    carr.classList.remove('black')
    carr.classList.remove('grey')
    carr.classList.remove('white')
    setTimeout(()=>{
        car.style.backgroundImage = "url('img/car\ blue.jpg')";
    },900)
}
btn_grey.onclick = grey
function grey() {
    btn_red.classList.remove('img')
    btn_black.classList.remove('img')
    btn_blue.classList.remove('img')
    btn_grey.classList.add('img')
    btn_white.classList.remove('img')

    carr.classList.add('grey')
    carr.classList.remove('blue')
    carr.classList.remove('red')
    carr.classList.remove('black')
    carr.classList.remove('white')
    setTimeout(()=>{
        car.style.backgroundImage = "url('img/car\ seryi.jpg')";
    },900)
}
btn_white.onclick = white
function white() {
    btn_red.classList.remove('img')
    btn_black.classList.remove('img')
    btn_blue.classList.remove('img')
    btn_grey.classList.remove('img')
    btn_white.classList.add('img')

    carr.classList.add('white')
    carr.classList.remove('blue')
    carr.classList.remove('red')
    carr.classList.remove('black')
    carr.classList.remove('grey')
    setTimeout(()=>{
        car.style.backgroundImage = "url('img/car\ white.jpg')";
    },900)
}