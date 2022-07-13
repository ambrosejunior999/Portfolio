'use strict mode'
let textArray = ["Hi, welcome to my portfolio website", "I'm ambrose","A front-end developer"]
let textDisplay = document.getElementById('bad')
let i = 0
let move = 0
let phase = []
let deleteOne = false

function go() {

    textDisplay.innerHTML = phase.join('') 
    if (i < textArray.length) {
        
        if (!deleteOne && move <=  textArray[i].length ) {
            phase.push(textArray[i][move])
            move++
        }

        if (deleteOne && move <= textArray[i].length ) {
            phase.pop(textArray[i][move])
            move--
        }
         
        if (move == textArray[i].length) {
             deleteOne = true
        }
        
        if (deleteOne && move === 0) {
            phase = []
            deleteOne = false
            i++
         if (i == textArray.length) {
             i = 0
         }   
        }
    }
    setTimeout(go, 130)
}

go()

// form dropdown 
let show = 0
function git() {
if(show==0){

    document.getElementById('form-dropdown').style.display = 'inherit'   
    document.getElementById('bic').style.display = 'none'
    document.getElementById('p').innerHTML = ' Am ambrose, a front-end developer from <br> Nigeria,West-Africa and an aspiring full stack developer<br> and Lawyer'
    show = 1
}else if(show == 1){
document.getElementById('form-dropdown').style.display = 'none'   
    document.getElementById('bic').style.display = 'inherit'
    document.getElementById('p').style.width = ''
    show = 0
}

}
function nostart() {
    setTimeout(() => { 
   document.getElementById('form-dropdown').style.display = 'none'
    document.getElementById('bic').style.display = 'inherit'      
}, 200);
}

// dark/light mode dropdown
let flow = 0
function darkLight() {
    if(flow == 0){
        document.getElementById('dart').style.display = 'inherit'
        flow = 1
    }else if(flow == 1){
        document.getElementById('dart').style.display = 'none'
        flow = 0
    }
}
// dark mode button
function dark() {
    document.querySelector('body').style.backgroundColor = 'black'
    document.getElementById('dist').style.backgroundColor = 'black'

}
// light mode button
function light() {
    document.querySelector('body').style.backgroundColor = 'white'
    document.getElementById('dist').style.backgroundColor = 'white'

}

// whatsapp icon shaking
setInterval(() => {
    document.getElementById('whatsapp').style.display = 'inherit'
}, 5000);
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let comment = document.getElementById('comment').value;

  
function submit() {
    document.getElementById('hack').innerText = 'Loading...'
    document.getElementById('hack').style.textAlign = 'center'
   
    setTimeout(() => { 
        document.getElementById('form-dropdown').style.display = 'none'
        document.getElementById('bic').style.display = 'inherit'
    JSON.parse(window.localStorage.setItem('Full Name',name))
    JSON.parse(window.localStorage.setItem('Email Address',email))
    JSON.parse(window.localStorage.setItem('Message/comment',comment))
}, 3500);
}



// pic changing onload
let pics = ['ife1.jpeg','cench2.jfif','cench3.jfif','cench4.jfif','cench5.jfif']
let index = 0
window.addEventListener('load', () => {
var size = pics.length
var x = Math.floor(size * Math.random())
document.getElementById('bic').src = pics[x]
})
let array = [100,50]
let newArray = array.reduce(function(text,value){
    return text - value
})
console.log(newArray)