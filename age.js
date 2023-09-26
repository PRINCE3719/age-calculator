function calc(){
    const entered = new Date(document.getElementById('datepicker').value);
    const today = new Date();
    // const age = entered-today;
    // console.log(age);
    const birthtime = entered.getTime();
    const present_time= today.getTime(); 

    if(birthtime > present_time){
        alert('not born');
        return;
    }
    const diff_time = present_time - birthtime;
    const y = Math.floor(diff_time / (1000 * 60 * 60 * 24 * 365));
    const m = Math.floor((diff_time % (1000 * 60 * 60 * 24 * 365 )) / (1000 * 60 * 60 * 24 * 30.44 ));
    const d = Math.floor((diff_time % (1000 * 60 * 60 * 24 * 30.44 )) / (1000 * 60 * 60 * 24 ));


    document.getElementById('yearss').textContent = y;
    document.getElementById('monthss').textContent = m;
    document.getElementById('dayss').textContent = d;



}
