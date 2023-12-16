const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalExpenses = document.getElementById('totalExpenses');

let total = 0;

expenseForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const expenseName = document.getElementById('expenseName').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

  if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0) {
    total += expenseAmount;
    updateTotal();
    addExpenseToList(expenseName, expenseAmount);
    clearInputs();
  } else {
    alert('Please enter a valid expense name and amount.');
  }
});

function updateTotal() {
  totalExpenses.textContent = total.toFixed(2);
}

function addExpenseToList(name, amount) {
  const expenseItem = document.createElement('div');
  expenseItem.classList.add('expense');
  expenseItem.innerHTML = `
    <p>${name}</p>
    <p>$${amount.toFixed(2)}</p>
  `;
  expenseList.appendChild(expenseItem);
}

function clearInputs() {
  document.getElementById('expenseName').value = '';
  document.getElementById('expenseAmount').value = '';
}
