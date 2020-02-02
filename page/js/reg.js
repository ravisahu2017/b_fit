function getRadioButtonValue(name){
    var radio=document.getElementsByName(name);
    // return radio.reduce((acc,d)=>{
    //          if(d.checked){
    //              acc=d.value;
    //          }
    //          return acc;
    // },null)
    for(var i=0;i<radio.length;i++){
        if(radio[i].checked){
            return radio[i].value;
        }
    }
}

function createRegis(){
    var obj= {
        name:null,
        email:null,
        DOB:null,
        gender:null,
        registrationDate:null,
        validity:null,
        membershipId:null,
        address:null,
        city:null,
        zipCode:null,
        phoneNo:null,
        memberType:null
      }
   for(var key in obj){
       if(key=="gender" || key=="memberType"){
        obj[key]=getRadioButtonValue(key);
       }
       else{
        obj[key]=document.getElementById(key).value;
       }
   }
   return obj;
}


function submitDate(){
    var submitdata=createRegis();
    fetch("/registration",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(submitdata)
    })
    .then(res=>res.json())
    .then((result)=>{
        console.log(result);
        if(result["success"]){
            alert("registration successful.")
        }
        else if(result["error"]){
            var msg=result["error"]["message"]|| result["error"]["errmsg"]
            alert(msg)
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(createRegis());

}
