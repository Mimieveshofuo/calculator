const buttons = document.querySelector(".buttons");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const small = document.querySelector("small");
const resetbtn = document.getElementById('resetbtn')

buttons.addEventListener("click", (e) => {
  let bill = document.getElementById("bill").value;
  let btn = e.target.value;
  let people = document.getElementById("people").value;
  if (people == 0) {
    error();
  } else 
  {
    let percent = parseFloat((btn * bill) / 100 / people);
    tip.innerHTML = `$` + percent.toFixed(2);
    let billperperson = parseFloat(bill / people);
    let totalperperson = parseFloat(billperperson + percent).toFixed(2);
    total.innerHTML = `$` + totalperperson;
    success();
  }
  resetbtn.className = 'point'

});
function error() {
    people.className ='error'
    small.textContent = "Can\'t be zero"
}
function success() {
  people.className = 'success'
  small.style.visibility = "hidden";
}

function reset() {
  document.getElementById("myForm1").reset();
  document.getElementById("myForm2").reset();
  tip.innerHTML = `$00:00`;
  total.innerHTML = `$00:00`;
}
