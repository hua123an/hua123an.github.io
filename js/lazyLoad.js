const imgs = document.getElementsByTagName('img')
function lazyLoad() {
//     get client height
    const clientHeight = document.documentElement.clientHeight
//     get scroll distance
    const clientTop = document.documentElement.scrollTop ||  document.body.scrollTop
    for (let i = 0 ; i < imgs.length ; i++){
        if (clientHeight + clientTop > imgs[i].offsetTop && !imgs[i].src){
            imgs[i].src = imgs[i].dataset.src
            console.log(imgs[i].src)
        }
    }
}
lazyLoad(imgs)
window.onscroll = () => lazyLoad(imgs)
//set throttle function
function throttle(fn, delay) {
    let timer = null
    return () => {
        if(timer){
            return
        };
        timer = setTimeout(() => {
            fn(imgs)
            timer = null
        }, delay)
    }
}
window.onscroll = throttle(lazyLoad, 500)
//防抖函数
function debounce(fn, delay) {
    let timer = null
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(imgs)
        }, delay)
    }
}
window.onscroll = debounce(lazyLoad, 500)