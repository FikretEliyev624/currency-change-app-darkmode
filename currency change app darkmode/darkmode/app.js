let header=document.querySelector("header");
let li=document.querySelectorAll("li");
let btn1=document.querySelectorAll("#btn-group-div1 button");
let btn2=document.querySelectorAll("#btn-group-div2 button");

document.getElementById("mode-btn").addEventListener("click",_=>{
    document.body.classList.toggle("dark");
    header.classList.toggle("head-dark");
    li.forEach(l=>{
        l.classList.toggle("text-dark");
    })
    btn1.forEach(btn=>{
        btn.classList.toggle("dark-btn");
    })
    btn2.forEach(btn=>{
        btn.classList.toggle("dark-btn");
    })
    
    currenyStyle1(btnDiv1);
    currenyStyle1(btnDiv2);
    function currenyStyle1(targetObject) {
        targetObject.querySelectorAll('button').forEach((item) => {
            item.addEventListener('click', () => {
                targetObject.querySelectorAll('button').forEach((item) => {
                    item.classList.toggle("dark-btn");
                    
                });
                item.style.backgroundColor = '#833AE0';
    
            })
        })
    }
});







function currenyStyle(targetObject) {
    targetObject.querySelectorAll('button').forEach((item) => {
        item.addEventListener('click', () => {
            targetObject.querySelectorAll('button').forEach((item) => {
                item.style.backgroundColor = '#E5E5E5';
                item.style.color = '#9F9F9F';
            });
            item.style.backgroundColor = '#833AE0';

        })
    })
}



