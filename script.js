const heading1="Hi Beautiful 💜";
const head=document.getElementById("heading");
let start=0;
function headingtext(){
	head.innerText=heading1.slice(0,start);
	start++;
}
setInterval(headingtext,100);


const heading2="Dear qrewiueirtort";
const head2=document.getElementById("texthead");
let start2=0;
function headingtext2(){
	head2.innerText=heading2.slice(0,start);
	start2++;
}
setInterval(headingtext2,500);

let head3 = document.getElementById("full-letter");
fetch("Letter2.txt")
  .then(response => response.text())
  .then(data => {
    let heading3 = data;
    let start3 = 0;
    function headingtext3() {
      head3.innerText = heading3.slice(0, start3);
      start3++;
    }
    setInterval(headingtext3, 100);
  })
  .catch(error => console.error(error));
