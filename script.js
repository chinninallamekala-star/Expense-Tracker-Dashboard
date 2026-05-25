let balance = 0;
let totalExpense = 0;

function addExpense() {

  const title = document.getElementById("title").value;
  const amount = parseInt(document.getElementById("amount").value);

  if(title === "" || amount === "") {
    alert("Please fill all fields");
    return;
  }

  balance -= amount;
  totalExpense += amount;

  document.getElementById("balance").innerText = "₹" + balance;
  document.getElementById("total-expense").innerText = "₹" + totalExpense;

  const li = document.createElement("li");

  li.innerHTML = `
    ${title}
    <span>₹${amount}</span>
    <button onclick="deleteExpense(this, ${amount})">Delete</button>
  `;

  document.getElementById("expense-list").appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function deleteExpense(button, amount) {

  balance += amount;
  totalExpense -= amount;

  document.getElementById("balance").innerText = "₹" + balance;
  document.getElementById("total-expense").innerText = "₹" + totalExpense;

  button.parentElement.remove();
}