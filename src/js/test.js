console.log('ready');
let today = new Date();
let oneDay = 1000 * 60 * 60 * 24;
let gamesAfterToday = [];
let fixtures = [
{
  date: new Date(today.getFullYear(), 0, 18),
    team: 'Cowdenbeath',
      home: 'home',
},
{
  date: new Date(today.getFullYear(), 0, 23),
    team: 'Kilmarnock',
      home: 'away',
},
{
  date: new Date(today.getFullYear(), 0, 27),
    team: 'Livingston',
      home: 'away',
},
{
  date: new Date(today.getFullYear(), 1, 2),
    team: 'St. Mirren',
      home: 'Ibrox',
},
{
  date: new Date(today.getFullYear(), 1, 6),
    team: 'Aberdeen',
      home: 'away',
},
{
  date: new Date(today.getFullYear(), 1, 16),
    team: 'St. Johnstone',
      home: 'Ibrox',
},
{
  date: new Date(today.getFullYear(), 1, 24),
    team: 'Hamilton',
      home: 'away',
},
{
  date: new Date(today.getFullYear(), 1, 27),
    team: 'Dundee',
      home: 'Ibrox',
},
{
  date: new Date(today.getFullYear(), 2, 8),
    team: 'Hibernian',
    home: 'away',
},
{
  date: new Date(today.getFullYear(), 2, 16),
    team: 'Kilmarnock',
      home: 'Ibrox',
},
{
  date: new Date("2019-03-18T12:00:00-07:30"),
  team: 'Test',
  home: 'Ibrox',
},
{
  date: new Date(today.getFullYear(), 2, 31),
    team: 'The Unwashed',
      home: 'away',
},
{
  date: new Date(today.getFullYear(), 3, 3),
    team: 'Hearts',
      home: 'Ibrox',
},
{
  date: new Date(today.getFullYear(), 3, 6),
    team: 'Motherwell',
      home: 'away',
},

]

for (let i = 0; i < fixtures.length; i++) {
  console.log(fixtures[i]);
  if (fixtures[i].date >= (today)) {
    gamesAfterToday.push(fixtures[i]);
    console.log('today: ', today)
     console.log('gamesAfterToday: ', gamesAfterToday);
  }
}

let closestMatch = gamesAfterToday[0];
console.log('CM: ', closestMatch);
let closestMatchDate = gamesAfterToday[0].date;
let closestMatchDateDay = closestMatchDate.getDate();
let todaysDay = today.getDate();

let hours = closestMatchDate.getHours();
let mins = closestMatchDate.getMinutes();
let tMins = today.getMinutes();
// if minutes are less than 10 we need to add a 0
if(tMins < 10){
  tMins = '' + 0 + tMins;
}

let todaysTime = '' + today.getHours() + tMins;

let matchTime = '' + closestMatchDate.getHours() + closestMatchDate.getMinutes();
let afterMatchTime = '' + (closestMatchDate.getHours() + 04) + closestMatchDate.getMinutes();
let team = closestMatch.team;
let home = closestMatch.home;

if((todaysDay === closestMatchDateDay) && (todaysTime < afterMatchTime)){
  console.log('playing today');
  document.getElementById('optionalDate').remove();
    document.getElementById('optionalDays').remove();
    document.getElementById('optionalToday').innerHTML = " today";

} else{
  let daysLeft = Math.ceil((closestMatchDate.getTime() - today.getTime()) / oneDay);

document.getElementById('date').innerHTML = daysLeft;
console.log('daysleft: ', daysLeft);
}
document.getElementById('time').innerHTML = matchTime;
document.getElementById('team').innerHTML = team;
document.getElementById('home').innerHTML = home;

let link = document.getElementById("stylesheet");

// if (closestMatch.home === "away") {
//   console.log("away");
//   link.setAttribute("href", "src/css/away.css");
// } else {
//   console.log("home");
//   link.setAttribute("href", "src/css/home.css");
// }