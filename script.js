async function loadStats() {
  const response = await fetch("stats.json?nocache=" + Date.now());
  const data = await response.json();

  document.getElementById("playersOnline").textContent = data.playersOnline;
  document.getElementById("day").textContent = data.day;
  document.getElementById("hour").textContent = data.hour;
  document.getElementById("horde").textContent = data.hordeIn;

  const ranking = document.getElementById("ranking");
  ranking.innerHTML = "";

  data.players
    .sort((a, b) => b.gamestage - a.gamestage)
    .forEach(p => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${p.name}</td>
        <td>${p.level}</td>
        <td>${p.gamestage}</td>
      `;
      ranking.appendChild(row);
    });
}

loadStats();
setInterval(loadStats, 30000);
