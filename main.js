async function getTunnelUrl() {
    const res = await fetch("tunnel_url.txt");
    return (await res.text()).trim();
}

/* ============================
   ESTADÍSTICAS
============================ */
let lastPlayers = [];

async function loadStats() {
    try {
        const tunnel = await getTunnelUrl();
        const res = await fetch(`${tunnel}/stats`);
        const data = await res.json();

        if (document.getElementById("day")) {
            document.getElementById("day").textContent = data.day;
            document.getElementById("time").textContent = data.time;
            document.getElementById("hordeDay").textContent = data.nextHordeDay;
            document.getElementById("hordeIn").textContent = data.nextHordeIn;
        }

        lastPlayers = data.players || [];
        renderPlayers(lastPlayers);

    } catch (err) {
        console.error("Error cargando stats:", err);
    }
}

function renderPlayers(players) {
    const list = document.getElementById("playersList");
    if (!list) return;

    list.innerHTML = players
        .map(p => `<p>👤 ${p.name} — ⭐ ${p.level}</p>`)
        .join("");
}

/* ============================
   RANKING
============================ */
let rankingData = [];

async function loadRanking() {
    try {
        const tunnel = await getTunnelUrl();
        const res = await fetch(`${tunnel}/ranking`);
        const data = await res.json();

        rankingData = Object.entries(data).map(([name, stats]) => ({
            name,
            level: stats.level,
            zombies: stats.zombies,
            deaths: stats.deaths
        }));

        renderRanking(rankingData);

    } catch (err) {
        console.error("Error cargando ranking:", err);
    }
}

function renderRanking(data) {
    const tbody = document.getElementById("rankingTable");
    if (!tbody) return;

    tbody.innerHTML = data.map(p => `
        <tr>
            <td>${p.name}</td>
            <td>${p.level}</td>
            <td>${p.zombies}</td>
            <td>${p.deaths}</td>
        </tr>
    `).join("");
}

/* ============================
   AUTO-REFRESH
============================ */
loadStats();
setInterval(loadStats, 30000);

loadRanking();
setInterval(loadRanking, 30000);
