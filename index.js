const players = window.localStorage.getItem("Players")
? JSON.parse(window.localStorage.getItem("Players"))
:[];

for (let i = 0; i < players.length; i++) {
    const row = document.createElement("tr"); 
    const rowdata = "<td>" + players[i].name + "</td><td>" + players[i].email + "</td><td>" + players[i].dob + "</td><td>" + players[i].mobile + "</td><td>" + players[i].game + "</td>"; 
    row.innerHTML = rowdata; 
    const tablebody = document.getElementById("tbody"); 
    tablebody?.appendChild(row); 
  }

function MyFunction() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const mobile = document.getElementById("mobile").value;
    const game = document.getElementById("game").value;
    const row = document.createElement("tr"); 
    const rowdata = "<td>" + name + "</td><td>" + email + "</td><td>" + dob + "</td><td>" + mobile + "</td><td>" + game + "</td>"; 
    row.innerHTML = rowdata; 
    const tablebody = document.getElementById("tbody"); 
    tablebody?.appendChild(row); 
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('dob').value='';
    document.getElementById('mobile').value='';
    document.getElementById('game').value='';
    const Player = {
      name: name,
      email: email,
      dob: dob,
      mobile: mobile,
      game: game
    };
    players.push(Player);
    console.log(players);
    window.localStorage.setItem("Players", JSON.stringify(players));
  }
