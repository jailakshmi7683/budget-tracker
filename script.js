let categories = [];
let amounts = [];

const ctx = document.getElementById("expenseChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: categories,
    datasets: [{
      data: amounts,
      backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
    }],
  },
});

function addExpense() {
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (category && !isNaN(amount)) {
    categories.push(category);
    amounts.push(amount);
    chart.update();
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  }
}
