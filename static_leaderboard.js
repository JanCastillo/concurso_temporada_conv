
var tbody = d3.select("tbody");

leaderboard.map((promotor) => {
    let row = tbody.append("tr");
    Object.entries(promotor).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
    });
});