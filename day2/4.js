let a = ()=>{
    console.log("1");    
}

let b = ()=>{
    console.log("2");
}

let c = (p1,p2)=>{
    p1();
    p2();
}

c(a,b);