const h = document.querySelector('#h');
const m = document.querySelector('#m');
const s = document.querySelector('#s');

setTimeout( timer , 1000 );
function timer(){
    Number(s.innerHTML);
    Number(m.innerHTML);
    Number(h.innerHTML);

    if (s.innerHTML < 9) {
        let sec = Number(s.innerHTML);
        sec += 1;
        s.innerHTML = '0'+sec;
    } else if (s.innerHTML < 59) {
        let sec = Number(s.innerHTML);
        sec += 1;
        s.innerHTML = sec;
    } else if (m.innerHTML < 9) {
        s.innerHTML = '00';
        let min = Number(m.innerHTML);
        min += 1;
        m.innerHTML = '0'+min;
    } else if (m.innerHTML < 59){
        s.innerHTML = '00';
        let min = Number(m.innerHTML);
        min += 1;
        m.innerHTML = min;
    } else if (h.innerHTML < 9){
        s.innerHTML = '00'
        m.innerHTML = '00';
        let hour = Number(h.innerHTML);
        hour += 1;
        h.innerHTML = '0'+hour;
    } else if (h.innerHTML < 24){
        s.innerHTML = '00';
        m.innerHTML = '00';
        let hour = Number(h.innerHTML);
        hour += 1;
        h.innerHTML = hour;        
    }
    setTimeout( timer , 1000 );
}
