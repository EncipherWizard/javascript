let e = ()=>{
    console.log("1");
}

function demo(p1){
    p1();
}

demo(e);

demo(function (){
    console.log("2");
});

let e1 = ()=>{
    console.log("3");
}

demo(e1);