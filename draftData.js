
//Player Database
  var qbData = [{name: 'Patrick Mahomes', team: 'KC', overall: 99},{name: 'Lamar Jackson', team: 'BAL', overall: 97},{name: 'Russell Wilson', team: 'SEA', overall: 98},{name: 'Deshaun Watson', team: 'HOU', overall: 95},{name: 'Drew Brees', team: 'NO', overall: 95},{name: 'Aaron Rodgers', team: 'GB', overall: 92},{name: 'Ryan Tannehill', team: 'TEN', overall: 92},{name: 'Kyler Murray', team: 'ARI', overall: 90},{name: 'Carson Wentz', team: 'PHI', overall: 88},{name: 'Matt Ryan', team: 'ATL', overall: 86},{name: 'Dak Prescott', team: 'DAL', overall: 86},{name: 'Philip Rivers', team: 'IND', overall: 86},{name: 'Tom Brady', team: 'TB', overall: 86},{name: 'Ben Roethlisberger', team: 'PIT', overall: 86},{name: 'Josh Allen', team: 'BUF', overall: 85},{name: 'Matthew Stafford', team: 'DET', overall: 84},{name: 'Kirk Cousins', team: 'MIN', overall: 84},{name: 'Cam Newton', team: 'FA', overall: 83},{name: 'Jared Goff', team: 'LAR', overall: 82},{name: 'Sam Darnold', team: 'NYJ', overall: 82},{name: 'Derek Carr', team: 'LV', overall: 82},{name: 'Jimmy Garoppolo', team: 'SF', overall: 82},{name: 'Ryan Fitzpatrick', team: 'MIA', overall: 81},{name: 'Daniel Jones', team: 'NYG', overall: 80},{name: 'Drew Lock', team: 'DEN', overall: 80},{name: 'Gardner MINSHEW', team: 'JAC', overall: 80},{name: 'Dwayne Haskins', team: 'WAS', overall: 80},{name: 'Baker Mayfield', team: 'CLE', overall: 79},{name: 'Jameis Winston', team: 'NO', overall: 79},{name: 'Jarrett Stidham', team: 'NE', overall: 79},{name: 'Justin Herbert', team: 'LAC', overall: 78},{name: 'Mitch Trubisky', team: 'CHI', overall: 77},{name: 'Nick Foles', team: 'CHI', overall: 76},{name: 'Andy Dalton', team: 'DAL', overall: 76},{name: 'Mason Rudolph', team: 'PIT', overall: 74},{name: 'David Blough', team: 'DET', overall: 73},{name: 'Devlin Hodges', team: 'PIT', overall: 73},{name: 'Will Grier', team: 'CAR', overall: 72}];
  var hbData = [{name: 'Christian McCaffery', team: 'CAR', overall: 99},{name: 'Saquon Barkley', team: 'NYG', overall: 98},{name: 'Ezekiel Elliot', team: 'DAL', overall: 97},{name: 'Derrick Henry', team: 'TEN', overall: 97},{name: 'Nick Chubb', team: 'CLE', overall: 93},{name: 'Josh Jacobs', team: 'LV', overall: 92},{name: 'Aaron Jones', team: 'GB', overall: 91},{name: 'Dalvin Cook', team: 'MIN', overall: 91},{name: 'Alvin Kamara', team: 'NO', overall: 89},{name: 'Leveon Bell', team: 'NYJ', overall: 88},{name: 'James Conner', team: 'PIT', overall: 87},{name: 'Austin Ekeler', team: 'LAC', overall: 87},{name: 'Kareem Hunt', team: 'CLE', overall: 86},{name: 'Mark Ingram', team: 'BAL', overall: 86},{name: 'Kenyan Drake', team: 'ARI', overall: 85},{name: 'Chris Carson', team: 'SEA', overall: 85},{name: 'Leonard Fournette', team: 'JAG', overall: 85},{name: 'Miles Sanders', team: 'PHI', overall: 84},{name: 'Melvin Gordon', team: 'DEN', overall: 84},{name: 'Joe Mixon', team: 'CIN', overall: 84},{name: 'Sony Michel', team: 'NE', overall: 83},{name: 'Todd Gurley', team: 'ATL', overall: 83},{name: 'James White', team: 'NE', overall: 82},{name: 'Devin Singletary', team: 'BUF', overall: 82},{name: 'Tarik Cohen', team: 'CHI', overall: 82},{name: 'Phillip Lindsay', team: 'DEN', overall: 82},{name: 'Raheem Mostert', team: 'SF', overall: 81},{name: 'David Montgomery', team: 'CHI', overall: 81},{name: 'David Johnson', team: 'HOU', overall: 81},{name: 'Tevin Coleman', team: 'MIA', overall: 80},{name: 'Clyde Edwards-Helaire', team: 'KC', overall: 80},{name: 'Damien Williams', team: 'KC', overall: 80},{name: 'Derrius Guice', team: 'WAS', overall: 79},{name: 'Frank Gore', team: 'NYJ', overall: 78},{name: 'Jordan Howard', team: 'MIA', overall: 78},{name: 'Kerryon Johnson', team: 'DET', overall: 78},{name: 'Cam Akers', team: 'LAR', overall: 77},{name: 'Matt Breida', team: 'MIA', overall: 77},{name: 'Alexander Mattison', team: 'MIN', overall: 76},{name: 'DAndre Swift', team: 'DET', overall: 76},{name: 'JK Dobbins', team: 'BAL', overall: 75},{name: 'Adrian Peterson', team: 'WAS', overall: 74},{name: 'Tony Pollard', team: 'DAL', overall: 73},{name: 'Lamar Miller', team: 'HOU', overall: 73},{name: 'Latavius Murray', team: 'NO', overall: 72},{name: 'Marlon Mack', team: 'IND', overall: 72},{name: 'Darrell Henderson', team: 'LAR', overall: 71},{name: 'Duke Johnson', team: 'N/A', overall: 70}];
  var wrData = [{name: 'Michael Thomas', team: 'NO', overall: 99},{name: 'DeAndre Hopkins', team: 'ARI', overall: 98},{name: 'Julio Jones', team: 'ATL', overall: 98},{name: 'Davante Adams', team: 'GB', overall: 96},{name: 'Tyreek Hill', team: 'KC', overall: 96},{name: 'Chris Godwin', team: 'TB', overall: 92},{name: 'Mike Evans', team: 'TB', overall: 92},{name: 'Kenny Golladay', team: 'DET', overall: 91},{name: 'Amari Cooper', team: 'DAL', overall: 91},{name: 'Odell Beckham Jr.', team: 'CLE', overall: 87},{name: 'Stefon Diggs', team: 'BUF', overall: 87},{name: 'TY Hilton', team: 'IND', overall: 86},{name: 'Julian Edelman', team: 'NE', overall: 86},{name: 'AJ Green', team: 'CIN', overall: 85},{name: 'Calvin Ridley', team: 'ATL', overall: 85},{name: 'Jarvis Landry', team: 'CLE', overall: 85},{name: 'Ty Lockett', team: 'SEA', overall: 85},{name: 'Courtland Sutton ', team: 'DEN', overall: 85},{name: 'AJ Brown', team: 'TEN', overall: 84},{name: 'Devante Parker', team: 'MIA', overall: 84},{name: 'JuJu Smith-Schuster', team: 'PIT', overall: 84},{name: 'Marvin Jones', team: 'DET', overall: 84},{name: 'Adam Thielen', team: 'MIN', overall: 84},{name: 'DK Metcalf', team: 'SEA', overall: 84},{name: 'DJ Moore', team: 'CAR', overall: 84},{name: 'Larry Fitzgerald', team: 'ARI', overall: 83},{name: 'John Brown', team: 'BUF', overall: 83},{name: 'Terry McLaurin', team: 'WAS', overall: 83},{name: 'Keenan Allen', team: 'LAC', overall: 83},{name: 'Allen Robinson', team: 'CHI', overall: 83},{name: 'DJ Chark ', team: 'JAG', overall: 83},{name: 'Jerry Jeudy', team: 'DEN', overall: 82},{name: 'Emmanuel Sanders', team: 'NO', overall: 82},{name: 'Sammy Watkins', team: 'KC', overall: 82},{name: 'Michael Gallup', team: 'DAL', overall: 81},{name: 'Robby Anderson', team: 'CAR', overall: 81},{name: 'Diontae Johnson', team: 'PIT', overall: 80},{name: 'Christian Kirk', team: 'ARI', overall: 80},{name: 'CeeDee Lamb', team: 'DAL', overall: 80},{name: 'Henry Ruggs', team: 'LV', overall: 80},{name: 'Cooper Kupp', team: 'LAR', overall: 80},{name: 'Tyler Boyd', team: 'CIN', overall: 80},{name: 'Mike Williams', team: 'LAC', overall: 80},{name: 'Mecole Hardman', team: 'KC', overall: 80},{name: 'Darius Slayton', team: 'NYG', overall: 79},{name: 'Nelson Agholor', team: 'PHI', overall: 79},{name: 'Deebo Samuel', team: 'SF', overall: 79},{name: 'Jamison Crowder', team: 'NYJ', overall: 79},{name: 'Golden Tate', team: 'NYG', overall: 78},{name: 'Sterling Shepherd', team: 'NYG', overall: 78},{name: 'Robert Woods', team: 'LAR', overall: 78},{name: 'Brandin Cooks', team: 'HOU', overall: 78},{name: 'Justin Jefferson', team: 'MIN', overall: 77},{name: 'Alshon Jeffery', team: 'PHI', overall: 77},{name: 'John Ross', team: 'CIN', overall: 77},{name: 'Dede Westbrook', team: 'JAG', overall: 76},{name: 'Marquez Valdes-Scandling', team: 'GB', overall: 75},{name: 'Will Fuller', team: 'HOU', overall: 75},{name: 'Mohamed Sanu', team: 'NE', overall: 75},{name: 'Tee Higgins', team: 'CIN', overall: 75},{name: 'Jalen Reagor', team: 'PHI', overall: 74},{name: 'Kenny Stills', team: 'HOU', overall: 74},{name: 'Chase Claypool', team: 'PIT', overall: 74},{name: 'Corey Davis', team: 'TEN', overall: 74},{name: 'Breshad Perriman', team: 'NYJ', overall: 73},{name: 'Cole Beasley', team: 'BUF', overall: 73},{name: 'Hunter Renfrow', team: 'LV', overall: 73},{name: 'Tyrell Williams', team: 'LV', overall: 73},{name: 'DeSean Jackson', team: 'PHI', overall: 72},{name: 'Michael Pittman', team: 'IND', overall: 72},{name: 'Denzel Mims', team: 'NYJ', overall: 72},{name: 'Brandon Aiyuk', team: 'SF', overall: 72},{name: 'Anthony Miller', team: 'CHI', overall: 72},{name: 'Parris Campbell', team: 'IND', overall: 71},{name: 'Allen Lazard', team: 'GB', overall: 71},{name: 'Preston Williams', team: 'MIA', overall: 71},{name: 'NKeal Harry', team: 'NE', overall: 70},{name: 'Curtis Samuel', team: 'CAR', overall: 70}];
  var teData = [{name: 'Travis Kelce', team: 'KC', overall: 99},{name: 'George Kittle', team: 'SF', overall: 98},{name: 'Zach Ertz', team: 'PHI', overall: 96},{name: 'Mark Andrews', team: 'BAL', overall: 91},{name: 'Darren Waller', team: 'LV', overall: 90},{name: 'Evan Engram', team: 'NYG', overall: 88},{name: 'Hunter Henry', team: 'LAC', overall: 88},{name: 'Dallas Goedert', team: 'PHI', overall: 87},{name: 'TJ Hockenson', team: 'DET', overall: 86},{name: 'Jared Cook', team: 'NO', overall: 86},{name: 'Austin Hooper', team: 'CLE', overall: 85},{name: 'Tyler Higbee', team: 'LAR', overall: 84},{name: 'Rob Gronkowski', team: 'TB', overall: 84},{name: 'Eric Ebron', team: 'IND', overall: 83},{name: 'Mike Gesicki', team: 'MIA', overall: 82},{name: 'Will Dissly', team: 'SEA', overall: 82},{name: 'Greg Olsen', team: 'SEA', overall: 82},{name: 'Noah Fant', team: 'DEN', overall: 81},{name: 'OJ Howard', team: 'TB', overall: 81},{name: 'Delanie Walker', team: 'TEN', overall: 80},{name: 'Jack Doyle', team: 'IND', overall: 79},{name: 'Jimmy Graham', team: 'GB', overall: 77},{name: 'Zach Gentry', team: 'PIT', overall: 76},{name: 'Kyle Rudolph', team: 'MIN', overall: 76},{name: 'Tyler Eifert', team: 'CIN', overall: 75},{name: 'Vance McDonald', team: 'PIT', overall: 74},{name: 'Blake Jarwin', team: 'DAL', overall: 74},{name: 'Ryan Izzo', team: 'NE', overall: 74},{name: 'Ross Travis', team: 'NYJ', overall: 74},{name: 'Darren Fells', team: 'HOU', overall: 73}];
  var ogData = [{name: 'Zack Martin', team: 'DAL', overall: 99},{name: 'Quenton Nelson', team: 'IND', overall: 97},{name: 'David DeCastro', team: 'PIT', overall: 96},{name: 'Brandon Brooks', team: 'PHI', overall: 92},{name: 'Kevin Zeitler', team: 'NYG', overall: 90},{name: 'Shaq Mason', team: 'NE', overall: 88},{name: 'Ali Marpet', team: 'TB', overall: 87},{name: 'Joel Bitonio', team: 'CLE', overall: 86},{name: 'Brandon Sherff', team: 'WAS', overall: 84},{name: 'Joe Thuney', team: 'NE', overall: 82},{name: 'Andrew Norwell', team: 'JAG', overall: 80},{name: 'Kelechi Osmele', team: 'NYJ', overall: 79},{name: 'Brian Winters', team: 'NYJ', overall: 78},{name: 'Trai Turner', team: 'CAR', overall: 77},{name: 'Ron Leary', team: 'DEN', overall: 76},{name: 'Ramon Foster', team: 'PIT', overall: 76},{name: 'Larry Warford', team: 'NO', overall: 75},{name: 'DJ Fluker', team: 'BAL', overall: 74},{name: 'Will Hernandez', team: 'NYG', overall: 74},{name: 'Richie Incognito', team: 'LV', overall: 74},{name: 'Quinton Spain', team: 'BUF', overall: 74},{name: 'Zach Fulton', team: 'HOU', overall: 74},{name: 'Gabe Jackson', team: 'LV', overall: 74},{name: 'Billy Turner', team: 'GB', overall: 74},{name: 'Clint Boling', team: 'CIN', overall: 73},{name: 'Eric Kush', team: 'CLE', overall: 73},{name: 'Brandon Thomas', team: 'JAG', overall: 73},{name: 'Oday Aboushi', team: 'DET', overall: 73},{name: 'Greg Van Roten', team: 'CAR', overall: 73},{name: 'Kenny Wiggins', team: 'DET', overall: 73},{name: 'Bryan Witzmann', team: 'CLE', overall: 73},{name: 'Trey Hopkins', team: 'CIN', overall: 73},{name: 'Cordy Glenn', team: 'CIN', overall: 72},{name: 'Denver Kirkland', team: 'LV', overall: 72},{name: 'Danny Isidora', team: 'MIN', overall: 72},{name: 'Dorian Johnson', team: 'CAR', overall: 72},{name: 'Ethan Pocic', team: 'SEA', overall: 72},{name: 'Joshua Garnett', team: 'SF', overall: 72},{name: 'Adam Gettis', team: 'ATL', overall: 71},{name: 'Dakota Dozier', team: 'MIN', overall: 71},{name: 'Will Clapp', team: 'NO', overall: 71},{name: 'Chris Reed', team: 'MIA', overall: 71},{name: 'DeOndre Wesley', team: 'BUF', overall: 71}];
  var cData = [{name: 'Jason Kelce', team: 'PHI', overall: 99},{name: 'Maurice Pouncey', team: 'PIT', overall: 96},{name: 'Rodney Hudson', team: 'LV', overall: 96},{name: 'Alex Mack', team: 'ATL', overall: 95},{name: 'Ben Jones', team: 'TEN', overall: 90},{name: 'Ryan Jensen', team: 'TB', overall: 88},{name: 'Ryan Khalil', team: 'NYJ', overall: 87},{name: 'AQ Shipley ', team: 'ARI', overall: 86},{name: 'Corey Linsley', team: 'GB', overall: 84},{name: 'Ryan Kelly', team: 'IND', overall: 84},{name: 'Mike Pouncey', team: 'MIA', overall: 83},{name: 'Brandon Linder', team: 'JAG', overall: 83},{name: 'Cesar Ruiz', team: 'NO', overall: 82},{name: 'David Andrews', team: 'NE', overall: 82},{name: 'Matt Paradis', team: 'CAR', overall: 80},{name: 'Justin Britt', team: 'SEA', overall: 80},{name: 'J.C. Tretter', team: 'CLE', overall: 79},{name: 'Lloyd Cushenberry III', team: 'DEN', overall: 78},{name: 'Brett Jones', team: 'MIN', overall: 78},{name: 'Frank Ragnow', team: 'DET', overall: 78},{name: 'Joe Looney', team: 'DAL', overall: 76},{name: 'Jon Halapio', team: 'NYG', overall: 76},{name: 'Matt Hennessy', team: 'ATL', overall: 74},{name: 'Daniel Kilgore', team: 'MIA', overall: 74},{name: 'Weston Richburg', team: 'SF', overall: 74},{name: 'Brian Allen', team: 'LAR', overall: 72},{name: 'James Daniels', team: 'CHI', overall: 71},{name: 'Nick Martin', team: 'HOU', overall: 71}];

//Random Player Generator
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}
let qbshuffled = shuffle([...qbData]);
let hbshuffled = shuffle([...hbData]);
let wrshuffled = shuffle([...wrData]);
let teshuffled = shuffle([...teData]);
let ogshuffled = shuffle([...ogData]);
let cshuffled = shuffle([...cData]);
//Display Players
for (let display of document.querySelectorAll(".qbdisplay")) {
    let {name, team, overall} = qbshuffled.pop();
    display.innerHTML = name + ' ' + team + ' ' + overall;
}
for (let display of document.querySelectorAll(".hbdisplay")) {
    let {name, team, overall} = hbshuffled.pop();
    display.innerHTML = name + ' ' + team + ' ' + overall;
}
for (let display of document.querySelectorAll(".wrdisplay")) {
    let {name, team, overall} = wrshuffled.pop();
    display.innerHTML = name + ' ' + team + ' ' + overall;
}
for (let display of document.querySelectorAll(".tedisplay")) {
    let {name, team, overall} = teshuffled.pop();
    display.innerHTML = name + ' ' + team + ' ' + overall;
}
for (let display of document.querySelectorAll(".ogdisplay")) {
    let {name, team, overall} = ogshuffled.pop();
    display.innerHTML = name + ' ' + team + ' ' + overall;
}

for (let display of document.querySelectorAll(".cdisplay")) {
    let {name, team, overall} = cshuffled.pop();
    display.innerHTML = name + ' ' + team + ' ' + overall;
}


//Appearance
function showTeam() {
  window.location.href = "team.html";
  var x = document.getElementById("team");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//Functions


const btn = document.querySelector('#btn');
// handle click button
btn.onclick = function () {
    const rbs = document.querySelectorAll('input[name="teamName"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    document.getElementById("teamSelection").style.display = "none";
    document.getElementById("qbRound").style.display = "block";
    document.getElementById("showTeam").style.display = "block";
    localStorage.setItem('teamName', JSON.stringify(selectedValue));
};

function reset() {
  localStorage.clear()
  location.reload();
}

function showOverall() {
  var overall = document.getElementById("overall").innerHTML;
  alert("Your team's overall is " + overall);
}

function startDraft() {
  document.getElementById("start").style.display = "none";
  document.getElementById("teamSelection").style.display = "block";
};

function qbSelect1 () {
  document.getElementById("qbRound").style.display = "none";
  document.getElementById("hbRound").style.display = "block";
  var qbValue = document.getElementById("qb1").innerHTML;
  var qbSplit = qbValue.split(" ");
  var qbName = qbSplit[0] + " " + qbSplit[1];
  document.getElementById("overall").style.display = "block";
  document.getElementById("overall").innerHTML = qbSplit[3];
  document.getElementById("cumovr").innerHTML = qbSplit[3];
  alert("You have selected " + qbName);
  localStorage.setItem('qbName', JSON.stringify(qbName));
  localStorage.setItem('qbTeam', JSON.stringify(qbSplit[2]));
  localStorage.setItem('qbOverall', JSON.stringify(qbSplit[3]));

  }

function qbSelect2 () {
  document.getElementById("qbRound").style.display = "none";
  document.getElementById("hbRound").style.display = "block";
  var qbValue = document.getElementById("qb2").innerHTML;
  var qbSplit = qbValue.split(" ");
  var qbName = qbSplit[0] + " " + qbSplit[1];
  document.getElementById("overall").style.display = "block";
  document.getElementById("cumovr").innerHTML = qbSplit[3];
  document.getElementById("overall").innerHTML = qbSplit[3];
  alert("You have selected " + qbName);
  localStorage.setItem('qbName', JSON.stringify(qbName));
  localStorage.setItem('qbTeam', JSON.stringify(qbSplit[2]));
  localStorage.setItem('qbOverall', JSON.stringify(qbSplit[3]));
  }

  function qbSelect3 () {
    document.getElementById("qbRound").style.display = "none";
    document.getElementById("hbRound").style.display = "block";
    var qbValue = document.getElementById("qb3").innerHTML;
    var qbSplit = qbValue.split(" ");
    var qbName = qbSplit[0] + " " + qbSplit[1];
    document.getElementById("overall").style.display = "block";
    document.getElementById("cumovr").innerHTML = qbSplit[3];
    document.getElementById("overall").innerHTML = qbSplit[3];
    alert("You have selected " + qbName);
    document.getElementById("qbRound").style.display = "none";
    document.getElementById("hbRound").style.display = "block";
    localStorage.setItem('qbName', JSON.stringify(qbName));
    localStorage.setItem('qbTeam', JSON.stringify(qbSplit[2]));
    localStorage.setItem('qbOverall', JSON.stringify(qbSplit[3]));
    }
    function hbSelect1 () {
      document.getElementById("hbRound").style.display = "none";
      document.getElementById("wr1Round").style.display = "block";
      var qbValue = document.getElementById("hb1").innerHTML;
      var qbSplit = qbValue.split(" ");
      var qbName = qbSplit[0] + " " + qbSplit[1];
      var currentcumovr = document.getElementById("cumovr").innerHTML;
      var cumovr = document.getElementById("cumovr").innerHTML;
      document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(qbSplit[3]))/2);
      document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(qbSplit[3]);
      alert("You have selected " + qbName);
      localStorage.setItem('hbName', JSON.stringify(qbName));
      localStorage.setItem('hbTeam', JSON.stringify(qbSplit[2]));
      localStorage.setItem('hbOverall', JSON.stringify(qbSplit[3]));
      }

    function hbSelect2 () {
      document.getElementById("hbRound").style.display = "none";
      document.getElementById("wr1Round").style.display = "block";
      var qbValue = document.getElementById("hb2").innerHTML;
      var qbSplit = qbValue.split(" ");
      var qbName = qbSplit[0] + " " + qbSplit[1];
      alert("You have selected " + qbName);
      var cumovr = document.getElementById("cumovr").innerHTML;
      document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(qbSplit[3]))/2);
      document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(qbSplit[3]);
      localStorage.setItem('hbName', JSON.stringify(qbName));
      localStorage.setItem('hbTeam', JSON.stringify(qbSplit[2]));
      localStorage.setItem('hbOverall', JSON.stringify(qbSplit[3]));
      }

      function hbSelect3 () {
        document.getElementById("hbRound").style.display = "none";
        document.getElementById("wr1Round").style.display = "block";
        var value = document.getElementById("hb3").innerHTML;
        var split = value.split(" ");
        var name = split[0] + " " + split[1];
        window.qbOverall = split[3];
        alert("You have selected " + name);
        var cumovr = document.getElementById("cumovr").innerHTML;
        document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/2);
        document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
        localStorage.setItem('hbName', JSON.stringify(name));
        localStorage.setItem('hbTeam', JSON.stringify(split[2]));
        localStorage.setItem('hbOverall', JSON.stringify(split[3]));
        }

        function wrSelect1 () {
          document.getElementById("wr1Round").style.display = "none";
          document.getElementById("wr2Round").style.display = "block";
          var value = document.getElementById("wr1").innerHTML;
          var split = value.split(" ");
          var name = split[0] + " " + split[1];
          alert("You have selected " + name);
          var cumovr = document.getElementById("cumovr").innerHTML;
          document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/3);
          document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
          localStorage.setItem('wr1Name', JSON.stringify(name));
          localStorage.setItem('wr1Team', JSON.stringify(split[2]));
          localStorage.setItem('wr1Overall', JSON.stringify(split[3]));
          }

          function wrSelect2 () {
            document.getElementById("wr1Round").style.display = "none";
            document.getElementById("wr2Round").style.display = "block";
            var value = document.getElementById("wr2").innerHTML;
            var split = value.split(" ");
            var name = split[0] + " " + split[1];
            var cumovr = document.getElementById("cumovr").innerHTML;
            document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/3);
            document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
            window.qbOverall = split[3];
            alert("You have selected " + name);
            localStorage.setItem('wr1Name', JSON.stringify(name));
            localStorage.setItem('wr1Team', JSON.stringify(split[2]));
            localStorage.setItem('wr1Overall', JSON.stringify(split[3]));
            }

            function wrSelect3 () {
              document.getElementById("wr1Round").style.display = "none";
              document.getElementById("wr2Round").style.display = "block";
              var value = document.getElementById("wr3").innerHTML;
              var split = value.split(" ");
              var name = split[0] + " " + split[1];
              window.qbOverall = split[3];
              alert("You have selected " + name);
              var cumovr = document.getElementById("cumovr").innerHTML;
              document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/3);
              document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
              localStorage.setItem('wr1Name', JSON.stringify(name));
              localStorage.setItem('wr1Team', JSON.stringify(split[2]));
              localStorage.setItem('wr1Overall', JSON.stringify(split[3]));
              }
              function wrSelect4 () {
                document.getElementById("wr2Round").style.display = "none";
                document.getElementById("wr3Round").style.display = "block";
                var value = document.getElementById("wr4").innerHTML;
                var split = value.split(" ");
                var name = split[0] + " " + split[1];
                var cumovr = document.getElementById("cumovr").innerHTML;
                document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/4);
                document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                alert("You have selected " + name);
                localStorage.setItem('wr2Name', JSON.stringify(name));
                localStorage.setItem('wr2Team', JSON.stringify(split[2]));
                localStorage.setItem('wr2Overall', JSON.stringify(split[3]));
                }
                function wrSelect5 () {
                  document.getElementById("wr2Round").style.display = "none";
                  document.getElementById("wr3Round").style.display = "block";
                  var value = document.getElementById("wr5").innerHTML;
                  var split = value.split(" ");
                  var name = split[0] + " " + split[1];
                  var cumovr = document.getElementById("cumovr").innerHTML;
                  document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/4);
                  document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                  alert("You have selected " + name);
                  localStorage.setItem('wr2Name', JSON.stringify(name));
                  localStorage.setItem('wr2Team', JSON.stringify(split[2]));
                  localStorage.setItem('wr2Overall', JSON.stringify(split[3]));
                  }
                  function wrSelect6 () {
                    document.getElementById("wr2Round").style.display = "none";
                    document.getElementById("wr3Round").style.display = "block";
                    var value = document.getElementById("wr6").innerHTML;
                    var split = value.split(" ");
                    var name = split[0] + " " + split[1];
                    var cumovr = document.getElementById("cumovr").innerHTML;
                    document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/4);
                    document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                    alert("You have selected " + name);
                    localStorage.setItem('wr2Name', JSON.stringify(name));
                    localStorage.setItem('wr2Team', JSON.stringify(split[2]));
                    localStorage.setItem('wr2Overall', JSON.stringify(split[3]));
                    }
                    function wrSelect7 () {
                      document.getElementById("wr3Round").style.display = "none";
                      document.getElementById("teRound").style.display = "block";
                      var value = document.getElementById("wr7").innerHTML;
                      var split = value.split(" ");
                      var name = split[0] + " " + split[1];
                      var cumovr = document.getElementById("cumovr").innerHTML;
                      document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/5);
                      document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                      alert("You have selected " + name);
                      localStorage.setItem('wr3Name', JSON.stringify(name));
                      localStorage.setItem('wr3Team', JSON.stringify(split[2]));
                      localStorage.setItem('wr3Overall', JSON.stringify(split[3]));
                      }
                      function wrSelect8 () {
                        document.getElementById("wr3Round").style.display = "none";
                        document.getElementById("teRound").style.display = "block";
                        var value = document.getElementById("wr8").innerHTML;
                        var split = value.split(" ");
                        var name = split[0] + " " + split[1];
                        var cumovr = document.getElementById("cumovr").innerHTML;
                        document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/5);
                        document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                        alert("You have selected " + name);
                        localStorage.setItem('wr3Name', JSON.stringify(name));
                        localStorage.setItem('wr3Team', JSON.stringify(split[2]));
                        localStorage.setItem('wr3Overall', JSON.stringify(split[3]));
                        }
                        function wrSelect9 () {
                          document.getElementById("wr3Round").style.display = "none";
                          document.getElementById("teRound").style.display = "block";
                          var value = document.getElementById("wr9").innerHTML;
                          var split = value.split(" ");
                          var name = split[0] + " " + split[1];
                          var cumovr = document.getElementById("cumovr").innerHTML;
                          document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/5);
                          document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                          alert("You have selected " + name);
                          localStorage.setItem('wr3Name', JSON.stringify(name));
                          localStorage.setItem('wr3Team', JSON.stringify(split[2]));
                          localStorage.setItem('wr3Overall', JSON.stringify(split[3]));
                          }
                          function teSelect1 () {
                            document.getElementById("teRound").style.display = "none";
                            document.getElementById("og1Round").style.display = "block";
                            var value = document.getElementById("te1").innerHTML;
                            var split = value.split(" ");
                            var name = split[0] + " " + split[1];
                            var cumovr = document.getElementById("cumovr").innerHTML;
                            document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/6);
                            document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                            alert("You have selected " + name);
                            localStorage.setItem('teName', JSON.stringify(name));
                            localStorage.setItem('teTeam', JSON.stringify(split[2]));
                            localStorage.setItem('teOverall', JSON.stringify(split[3]));
                            }
                            function teSelect2 () {
                              document.getElementById("teRound").style.display = "none";
                              document.getElementById("og1Round").style.display = "block";
                              var value = document.getElementById("te2").innerHTML;
                              var split = value.split(" ");
                              var name = split[0] + " " + split[1];
                              var cumovr = document.getElementById("cumovr").innerHTML;
                              document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/6);
                              document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                              alert("You have selected " + name);
                              localStorage.setItem('teName', JSON.stringify(name));
                              localStorage.setItem('teTeam', JSON.stringify(split[2]));
                              localStorage.setItem('teOverall', JSON.stringify(split[3]));
                              }
                              function teSelect3 () {
                                document.getElementById("teRound").style.display = "none";
                                document.getElementById("og1Round").style.display = "block";
                                var value = document.getElementById("te3").innerHTML;
                                var split = value.split(" ");
                                var name = split[0] + " " + split[1];
                                var cumovr = document.getElementById("cumovr").innerHTML;
                                document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/6);
                                document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                alert("You have selected " + name);
                                localStorage.setItem('teName', JSON.stringify(name));
                                localStorage.setItem('teTeam', JSON.stringify(split[2]));
                                localStorage.setItem('teOverall', JSON.stringify(split[3]));
                                }
                                function ogSelect1 () {
                                  document.getElementById("og1Round").style.display = "none";
                                  document.getElementById("og2Round").style.display = "block";
                                  var value = document.getElementById("og1").innerHTML;
                                  var split = value.split(" ");
                                  var name = split[0] + " " + split[1];
                                  var cumovr = document.getElementById("cumovr").innerHTML;
                                  document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/7);
                                  document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                  alert("You have selected " + name);
                                  localStorage.setItem('og1Name', JSON.stringify(name));
                                  localStorage.setItem('og1Team', JSON.stringify(split[2]));
                                  localStorage.setItem('og1Overall', JSON.stringify(split[3]));
                                  }
                                  function ogSelect2 () {
                                    document.getElementById("og1Round").style.display = "none";
                                    document.getElementById("og2Round").style.display = "block";
                                    var value = document.getElementById("og2").innerHTML;
                                    var split = value.split(" ");
                                    var name = split[0] + " " + split[1];
                                    var cumovr = document.getElementById("cumovr").innerHTML;
                                    document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/7);
                                    document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                    alert("You have selected " + name);
                                    localStorage.setItem('og1Name', JSON.stringify(name));
                                    localStorage.setItem('og1Team', JSON.stringify(split[2]));
                                    localStorage.setItem('og1Overall', JSON.stringify(split[3]));
                                  }
                                  function ogSelect3 () {
                                    document.getElementById("og1Round").style.display = "none";
                                    document.getElementById("og2Round").style.display = "block";
                                    var value = document.getElementById("og3").innerHTML;
                                    var split = value.split(" ");
                                    var name = split[0] + " " + split[1];
                                    var cumovr = document.getElementById("cumovr").innerHTML;
                                    document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/7);
                                    document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                    alert("You have selected " + name);
                                    localStorage.setItem('og1Name', JSON.stringify(name));
                                    localStorage.setItem('og1Team', JSON.stringify(split[2]));
                                    localStorage.setItem('og1Overall', JSON.stringify(split[3]));
                                    }
                                    function ogSelect4 () {
                                      document.getElementById("og2Round").style.display = "none";
                                      document.getElementById("cRound").style.display = "block";
                                      var value = document.getElementById("og4").innerHTML;
                                      var split = value.split(" ");
                                      var name = split[0] + " " + split[1];
                                      var cumovr = document.getElementById("cumovr").innerHTML;
                                      document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/8);
                                      document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                      alert("You have selected " + name);
                                      localStorage.setItem('og2Name', JSON.stringify(name));
                                      localStorage.setItem('og2Team', JSON.stringify(split[2]));
                                      localStorage.setItem('og2Overall', JSON.stringify(split[3]));
                                      }
                                      function ogSelect5 () {
                                        document.getElementById("og2Round").style.display = "none";
                                        document.getElementById("cRound").style.display = "block";
                                        var value = document.getElementById("og5").innerHTML;
                                        var split = value.split(" ");
                                        var name = split[0] + " " + split[1];
                                        var cumovr = document.getElementById("cumovr").innerHTML;
                                        document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/8);
                                        document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                        alert("You have selected " + name);
                                        localStorage.setItem('og2Name', JSON.stringify(name));
                                        localStorage.setItem('og2Team', JSON.stringify(split[2]));
                                        localStorage.setItem('og2Overall', JSON.stringify(split[3]));
                                        }
                                        function ogSelect6 () {
                                          document.getElementById("og2Round").style.display = "none";
                                          document.getElementById("cRound").style.display = "block";
                                          var value = document.getElementById("og6").innerHTML;
                                          var split = value.split(" ");
                                          var name = split[0] + " " + split[1];
                                          var cumovr = document.getElementById("cumovr").innerHTML;
                                          document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/8);
                                          document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                          alert("You have selected " + name);
                                          localStorage.setItem('og2Name', JSON.stringify(name));
                                          localStorage.setItem('og2Team', JSON.stringify(split[2]));
                                          localStorage.setItem('og2Overall', JSON.stringify(split[3]));
                                          }
                                          function cSelect1 () {
                                            document.getElementById("cRound").style.display = "none";
                                            //document.getElementById("mlbRound").style.display = "block";
                                            var value = document.getElementById("c1").innerHTML;
                                            var split = value.split(" ");
                                            var name = split[0] + " " + split[1];
                                            var cumovr = document.getElementById("cumovr").innerHTML;
                                            document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/9);
                                            document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                            alert("You have selected " + name);
                                            localStorage.setItem('cName', JSON.stringify(name));
                                            localStorage.setItem('cTeam', JSON.stringify(split[2]));
                                            localStorage.setItem('cOverall', JSON.stringify(split[3]));
                                            }
                                            function cSelect2 () {
                                              document.getElementById("cRound").style.display = "none";
                                              //document.getElementById("mlbRound").style.display = "block";
                                              var value = document.getElementById("c2").innerHTML;
                                              var split = value.split(" ");
                                              var name = split[0] + " " + split[1];
                                              var cumovr = document.getElementById("cumovr").innerHTML;
                                              document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/9);
                                              document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                              alert("You have selected " + name);
                                              localStorage.setItem('cName', JSON.stringify(name));
                                              localStorage.setItem('cTeam', JSON.stringify(split[2]));
                                              localStorage.setItem('cOverall', JSON.stringify(split[3]));
                                              }
                                              function cSelect3 () {
                                                document.getElementById("cRound").style.display = "none";
                                                //document.getElementById("mlbRound").style.display = "block";
                                                var value = document.getElementById("c3").innerHTML;
                                                var split = value.split(" ");
                                                var name = split[0] + " " + split[1];
                                                var cumovr = document.getElementById("cumovr").innerHTML;
                                                document.getElementById("overall").innerHTML = Math.round((parseInt(cumovr) + parseInt(split[3]))/9);
                                                document.getElementById("cumovr").innerHTML = parseInt(cumovr) + parseInt(split[3]);
                                                alert("You have selected " + name);
                                                localStorage.setItem('cName', JSON.stringify(name));
                                                localStorage.setItem('cTeam', JSON.stringify(split[2]));
                                                localStorage.setItem('cOverall', JSON.stringify(split[3]));
                                                }
