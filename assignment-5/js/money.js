document.getElementById('calulate-button').addEventListener('click', function(){
    const foodInput = document.getElementById('food-expenses');
    const foodAmount = parseInt (foodInput.value);
    foodInput.value = "";

    const rentInput = document.getElementById('rent-expenses');
    const rentAmount = parseInt (rentInput.value);
    rentInput.value = '';

    const clothInput = document.getElementById('cloth-expenses');
    const clothAmount = parseInt (clothInput.value);
    clothInput.value = '';
    
    const totalAmount = foodAmount + rentAmount+ clothAmount;

    const totalExpenses= document.getElementById(' total-expenes');
    totalExpenses.innerText = totalAmount;

    const incomeInput = document.getElementById('total-income');
   const incomeAmount =  parseInt(incomeInput.value);
    
   const totalBalance = document.getElementById('balance-total');
   totalBalance.innerText = incomeAmount - totalAmount;
})

//saving amount 

document.getElementById('saving-btn').addEventListener('click', function(){
    const saveAmount =( totalBalance/100)*10
})