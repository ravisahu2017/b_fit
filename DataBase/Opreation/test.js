function getUser(){
    return new Promise((res,rej)=>{
        console.log("promise call")
        setTimeout(()=>{
          res("success");
        },1000)
    })
}

async function userData(){
    var a="not success";
    try{
      a= await getUser();
    }
    catch(err){
     console.log(err)
    }
    return a;
}

var x=userData();
console.log("start");
console.log(x);