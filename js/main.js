const modal = document.querySelector('.modal')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelector('.close')

loginBtn.addEventListener('click, openModal')
closeBtn.addEventListener('click, closeModal')
window.addEventListener('click, outsideClick')

function openModal(){
  modal.style.display = 'block'
}
function openModal(){
  modal.style.display = 'none'
}
function outsideClick(e) {
  if (e.target==modal){
   closeModal() 
  }
}

/*video mixes */
let videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(vid =>{
  vid.onclick = () =>{
    let src = vid.querySelector('.list-video').src;
    let title = vid.querySelector('.list-title').innerHTML;
    document.querySelector('.main-video-container .main-video').src = src;
    document.querySelector('.main-video-container .main-video').play();
    document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
  };
});