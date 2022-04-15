const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const mouthClose = document.querySelector('.mouth')


closedFace.addEventListener('click', function(){
    if(openFace.classList.contains('open')){
        openFace.classList.add('active')
        closedFace.classList.remove('active')
        mouthClose.classList.remove('active')

    }
})

openFace.addEventListener('click',function(){
    if(mouthClose.classList.contains('mouth')){
        mouthClose.classList.add('active')
        openFace.classList.remove('active')
    }
})

mouthClose.addEventListener('click',function(){
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active')
        mouthClose.classList.remove('active')
        openFace.classList.remove('active')
    }
})