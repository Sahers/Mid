let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let a4 = document.getElementById("a4")
let a5 = document.getElementById("a5")
let a6 = document.getElementById("a6")
let a7 = document.getElementById("a7")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let b7 = document.getElementById("b7")
let result = document.getElementById("result")
function calcu(){
  let inputs = document.getElementsByClassName("num")
  let errormsg = document.getElementById('errormsg')
  let digits = document.getElementById('numberOfDigits')
let array = [...inputs]
console.log(array[2])
  for (i=0;i < array.length;i++) {
    let a = 0
    if(array[i].value == "" || isNaN(array[i].value)){
    array[i].classList.add('error')
    errormsg.style.display = 'block'
}
else{
  array[i].classList.remove('error')
  errormsg.style.display = 'none'
  result.innerHTML = `
        <center>
      <table style= "width:500px;"border="9">
      <tr>
      <td class= "top">كxم</td>
      <td class= "top">(ك)التكرار</td>
      <td class= "top">(م)مركز المجموعة</td>
      <td class= "top">المجموعة</td>
      </tr>
      <tr>
      <td>${((+a1.value + +a2.value)/2) * (b1.value)}</td>
      <td>${b1.value}</td>
      <td>${(+a1.value + +a2.value)/2}
      </td>
      <td>${a1.value}</td>
      </tr>
      <tr>
      <td>${((+a2.value + +a3.value)/2) * (b2.value)}</td>
      <td>${b2.value}</td>
      <td>${(+a2.value + +a3.value)/2}
      </td>
      <td>${a2.value}</td>
      </tr>
      <tr>
      <td>${((+a3.value + +a4.value)/2) * (b3.value)}</td>
      <td>${b3.value}</td>
      <td>${(+a3.value + +a4.value)/2}
      </td>
      <td>${a3.value}</td>
      </tr>
      <tr>
      <td>${((+a4.value + +a5.value)/2) * (b4.value)}</td>
      <td>${b4.value}</td>
      <td>${(+a4.value + +a5.value)/2}
      </td>
      <td>${a4.value}</td>
      </tr>
      <tr>
      <td>${((+a5.value + +a6.value)/2) * (b5.value)}</td>
      <td>${b5.value}</td>
      <td>${(+a5.value + +a6.value)/2}
      </td>
      <td>${a5.value}</td>
      </tr>
      <tr>
      <td>${((+a6.value + +a7.value)/2) * (b6.value)}</td>
      <td>${b6.value}</td>
      <td>${(+a6.value + +a7.value)/2}
      </td>
      <td>${a6.value}</td>
      </tr>
      <tr>
      <td>${((+(+a6.value + +a7.value)/2) + +(+a7.value - +a6.value)) * (b7.value)}</td>
      <td>${b7.value}</td>
      <td>${(+(+a6.value + +a7.value)/2) + +(+a7.value - +a6.value)}
      </td>
      <td>${a7.value}</td>
      </tr>
      <tr>
      <td>
      ${(+((+a1.value + +a2.value)/2) * (b1.value)+
      +((+a2.value + +a3.value)/2) * (b2.value)+
      +((+a3.value + +a4.value)/2) * (b3.value)+
      +((+a4.value + +a5.value)/2) * (b4.value)+
      +((+a5.value + +a6.value)/2) * (b5.value)+
      +((+a6.value + +a7.value)/2) * (b6.value)+
      +((+(+a6.value + +a7.value)/2) + +(+a7.value - +a6.value)) * (b7.value))}
      </td>
      <td>
      ${(+b1.value + +b2.value + +b3.value + +b4.value + +b5.value + +b6.value + +b7.value)}
      </td>
      <td class= "top" colspan="2">المجموع</td>
      </tr>
      </table>
      <div>
      <h1 style= "color:blue;">الوسط الحسابي يساوي</h1>
      <h1 style= "color:blue;">${((+((+a1.value + +a2.value)/2) * (b1.value)+
      +((+a2.value + +a3.value)/2) * (b2.value)+
      +((+a3.value + +a4.value)/2) * (b3.value)+
      +((+a4.value + +a5.value)/2) * (b4.value)+
      +((+a5.value + +a6.value)/2) * (b5.value)+
      +((+a6.value + +a7.value)/2) * (b6.value)+
      +((+(+a6.value + +a7.value)/2) + +(+a7.value - +a6.value)) * (b7.value)) / (+b1.value + +b2.value + +b3.value + +b4.value + +b5.value + +b6.value + +b7.value)).toFixed(digits.value) }</h1>
      </div>
      <button onclick= "print()">اطبع الناتج</button>
      </center>
      `
}
  }
  
    
}
/*
<tr></tr>
<td></td>



  */
