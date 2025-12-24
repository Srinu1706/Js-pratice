// let username;
// document.getElementById("mysubmit").onclick=()=>{
//     username=document.getElementById("textBox").value;
//     if(username===""){
//         console.log("enter username")
//     }
//     else{
//         console.log("Hey"+username)
//     }
//     // console.log(username)
//     age=document.getElementById("myage").value
//     console.log(age)
// }

document.getElementById("result").innerText=result

document.getElementById("myadd").onclick=()=>{
    let number1;
    let number2;
   number1=Number(document.getElementById("field1").value);
   number2=Number(document.getElementById("field2").value);
    let result=number1+number2
   document.getElementById("result").innerText=result
    console.log(result)
}


document.getElementById("mysub").onclick=()=>{
    let number1;
    let  number2;
   number1=Number(document.getElementById("field1").value);
   number2=Number(document.getElementById("field2").value);
  let result=number1-number2
   document.getElementById("result").innerText=result
    console.log(result)
}

document.getElementById("mymul").onclick=()=>{
    let number1;
    let  number2;
   number1=Number(document.getElementById("field1").value);
   number2=Number(document.getElementById("field2").value);
    let  result=number1*number2
   document.getElementById("result").innerText=result
    console.log(result)
}



document.getElementById("mydiv").onclick=()=>{
    let number1;
    let  number2;
   
   number1=Number(document.getElementById("field1").value);
   number2=Number(document.getElementById("field2").value);
     if (number2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by 0";
        return;
    }
     let result=number1/number2
      document.getElementById("result").innerText=result
    console.log(result)
}

document.getElementById("Myreset").onclick=()=>{
    document.getElementById("field1").value=""
     document.getElementById("field2").value=""

     document.getElementById("result").innerText="";
}
