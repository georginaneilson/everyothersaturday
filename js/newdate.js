let today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25);
let oneDay = 1000 * 60 * 60 * 24;

// if (today.getMonth() == 11 && today.getDay() > 25) {
//   cmas.setFullYear(cmas.getFullYear() + 1);
// }

let testdate = new Date('December 26, 18 00:20:18 GTM+00:00')
console.log(testdate);

let daysLeft = Math.ceil((cmas.getTime() - today.getTime()) / oneDay);

if (today.getMonth() == 11 && today.getDay() == 25) {
  document.getElementById('newdate').innerHTML = "Merry Christmas!";
} else {
  document.getElementById('newdate').innerHTML =  daysLeft + " days until Christmas!";
}