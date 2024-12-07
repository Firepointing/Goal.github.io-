// JavaScript for High School Goal Tracker
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("goalTrackerForm");
  const goalData = document.getElementById("goalData");

  // Add a new goal
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value;
    const goal = document.getElementById("goal").value.trim();

    // Validate inputs
    if (!name || !subject || !goal) {
      alert("Please fill out all fields!");
      return;
    }

    // Create a new row
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${subject}</td>
      <td>${goal}</td>
      <td>${Math.floor(Math.random() * 101)}%</td>
    `;

    // Add the row to the table
    goalData.appendChild(row);

    // Clear form inputs
    form.reset();
  });
});
