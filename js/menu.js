/* 햄버거 메뉴 */
var btnMenuEl = document.querySelector("#btn-menu"),
    sideMenuEl = document.querySelector("#side-menu"),
    btnCloseEl = document.querySelector("#btn-close"),
    sideMenuItemEl = sideMenuEl.querySelectorAll("li"),
    _isOpen = false,
    _isAni = false;

function onClickBtnMenu(e){
    e.preventDefault();
    if(_isOpen || _isAni) return;
    if(!_isOpen){
        _isOpen = true;
        _isAni = true;
        sideMenuEl.classList.add("open");
        setTimeout(function(){
            _isAni = false;
            for(var i = 0; i < sideMenuItemEl.length; i++){
                addAni(i);
            }
        }, 380);
    }
}
function onClickBtnClose(e){
    e.preventDefault();
    if(!_isOpen || _isAni) return;
    if(_isOpen){
        _isOpen = false;
        _isAni = true;
        sideMenuEl.classList.remove("open");
        setTimeout(function(){
            _isAni = false;
            for(var i = 0; i < sideMenuItemEl.length; i++){
            sideMenuItemEl[i].classList.remove("ani");
            }
        }, 400);
    }
}
function addAni(id){
    setTimeout(function(){
        sideMenuItemEl[id].classList.add("ani");
    }, 40 * id);
}
// 요소 노드에 이벤트를 추가하는 기능 집합.
function addEvent() {
    btnMenuEl.addEventListener("click", onClickBtnMenu);
    btnCloseEl.addEventListener("click", onClickBtnClose);
}
// 기능 초기화 
function init() {
    addEvent();
}
init();


/* 마우스 인터랙션 */
var cursorDotEl = document.querySelector('#cursor-dot'),
    cursorBGEl = document.querySelector('#cursor-bg'),
    progressEl = document.querySelector('#progress');
    

function onMouseMove(e){



   // console.log(e.clientX, e.clientY);
   // console.log(e.pageX, e.pageY);
   // 마우스의 좌표를 받아올 수 있다.
   // client - 브라우저를 기준으로 마우스 좌표를 찾아온다. (스크롤이 되어도 같은 값 - 현재 보이는 브라우저의 고정값)
   // page - 문서 상단을 기준으로 마우스 좌표를 찾아온다. (스크롤이 되면 다른 값 - 현재 문서의 스크롤에 영향을 받아 값이 변형)
    var posX = e.clientX, 
        posY = e.clientY;
   // 마우스 좌표의 위치 값.

    // gsap 애니메이션 처리.
    // to(param1, param2);
    // param1 - 요소를 기입,
    // param2 - gsap 문서 형식에 따라 옵션값을 기입 (object)
    gsap.killTweensOf(cursorDotEl);
    gsap.killTweensOf(cursorBGEl);
    gsap.killTweensOf(progressEl);
    // -요소에서 애니메이션을 제거

    gsap.to(cursorDotEl, {
        top: posY,
        left: posX,
        duration: 0.6, 
        ease: 'sine.out', 
    });
    gsap.to(cursorBGEl, { top: posY, left: posX, duration: 0.3, ease: 'sine.out' });
    gsap.to(progressEl, { top: posY, left: posX, duration: 0.25, ease: 'sine.out' });
}

window.addEventListener('mousemove', onMouseMove); // 마우스 움직임 실행


