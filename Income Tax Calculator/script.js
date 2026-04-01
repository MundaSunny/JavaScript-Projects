// Income Tax Calculator
const form = document.getElementById('taxForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const income = parseFloat(document.getElementById('income').value);
  
  if (isNaN(income) || income < 0) {
    alert('Please enter a valid income amount');
    return;
  }
  
  let tax = 0;
  
  // Tax brackets
  if (income <= 10000) {
    tax = income * 0.10;
  } else if (income <= 40000) {
    tax = 1000 + (income - 10000) * 0.12;
  } else if (income <= 85000) {
    tax = 4600 + (income - 40000) * 0.22;
  } else {
    tax = 14500 + (income - 85000) * 0.24;
  }
  
  document.getElementById('Tax result').textContent = `: ₹ ${tax.toFixed(2)}`;


});
