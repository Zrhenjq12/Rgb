let wrap = document.querySelector('.wrapper')


let wrapList = document.querySelector('.wraper-list')
let r = 0,
    g = 0,
    b = 0;

wrapList.onmousedown = function(event) {
    event.preventDefault();
    if (event.target.tagName == 'BUTTON') {
        thumb = event.target;

        console.log(thumb.nextSibling.nextSibling);
        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX - list.getBoundingClientRect().left - 30;
            let t = 0;
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = list.offsetWidth - thumb.offsetWidth - 45;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            thumb.style.left = (newLeft) + 'px';
            if (thumb.dataset.button == 'one') {
                r = Math.round(newLeft / 1.392);
                spanCollection[0].textContent = `${r}`
                wrap.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            }
            if (thumb.dataset.button == 'two') {
                g = Math.round(newLeft / 1.392);
                spanCollection[1].textContent = `${g}`
                wrap.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            }
            if (thumb.dataset.button == 'three') {
                b = Math.round(newLeft / 1.392);
                spanCollection[2].textContent = `${b}`
                wrap.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            }


        }

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
        thumb.ondragstart = function() {
            return false;
        };
    }
}

let spanCollection = document.querySelectorAll('span')

function spanTitle() {}