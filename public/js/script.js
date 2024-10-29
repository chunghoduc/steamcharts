// Sample data for games (to replace with dynamic data)
const gamesData = [
    { name: "Game 1", currentPlayers: 12000, peakToday: 15000, avg30days: 13000, gain: "+200", percentGain: "1.56%" },
    { name: "Game 2", currentPlayers: 18000, peakToday: 25000, avg30days: 22000, gain: "-500", percentGain: "-2.23%" },
    { name: "Game 3", currentPlayers: 9000, peakToday: 11000, avg30days: 9500, gain: "+400", percentGain: "4.23%" },
    { name: "Game 4", currentPlayers: 2500, peakToday: 4000, avg30days: 3000, gain: "-100", percentGain: "-3.33%" },
    // Additional game data as desired
];

// Function to load data into the table
function loadTableData() {
    const tableBody = document.querySelector("#game-table tbody");
    gamesData.forEach(game => {
        const row = document.createElement("tr");
        
        // Add game data in each cell
        row.innerHTML = `
            <td>${game.name}</td>
            <td>${game.currentPlayers.toLocaleString()}</td>
            <td>${game.peakToday.toLocaleString()}</td>
            <td>${game.avg30days.toLocaleString()}</td>
            <td>${game.gain}</td>
            <td>${game.percentGain}</td>
        `;

        // Optional: Highlight gain/loss
        const gainCell = row.children[4];
        gainCell.style.color = game.gain.startsWith("+") ? "green" : "red";

        const percentGainCell = row.children[5];
        percentGainCell.style.color = game.percentGain.startsWith("+") ? "green" : "red";

        tableBody.appendChild(row);
    });
}

// Load table data on page load
window.onload = loadTableData;ß