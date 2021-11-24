const btnDownload = document.querySelector('.btn-download');
const mainWrapper = document.querySelector('.popup-main-wrapper');
const closePopup = document.querySelector('.close-popup');

btnDownload.onclick = ()=>{
    mainWrapper.classList.add('active');
    document.body.setAttribute('style', 'overflow:hidden;');
}
closePopup.onclick = ()=>{
    mainWrapper.classList.remove('active');
    document.body.setAttribute('style', '');
}