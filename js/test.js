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
  if (fixtures[i].date > today) {
    gamesAfterToday.push(fixtures[i]);
  }
}

let closestMatch = gamesAfterToday[0];
let closestMatchDate = gamesAfterToday[0].date;
let daysLeft = Math.ceil((closestMatchDate.getTime() - today.getTime()) / oneDay);
let team = closestMatch.team;
let home = closestMatch.home;

document.getElementById('date').innerHTML = daysLeft;
document.getElementById('team').innerHTML = team;
document.getElementById('home').innerHTML = home;

let link = document.getElementById("stylesheet");

if (closestMatch.home === "away") {
  console.log("away");
  link.setAttribute("href", "css/stylesheetTwo.css");
} else {
  console.log("home");
  link.setAttribute("href", "css/stylesheetTwo-alt.css");
}