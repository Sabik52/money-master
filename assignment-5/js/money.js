


//************calculation of Total Expenses**********************/
document.getElementById('calulate-button').addEventListener('click', function(){
    const foodInput = document.getElementById('food-expenses');
    const rentInput = document.getElementById('rent-expenses');
    const clothInput = document.getElementById('cloth-expenses');

  //*******************total expenses**************** //
    const totalCost = parseInt (foodInput.value) + parseInt (rentInput.value)+parseInt (clothInput.value) ;
    
    const totalExpenses= document.getElementById(' total-expenes');
    totalExpenses.innerText = totalCost;

    const incomeInput = document.getElementById('total-income');
    const incomeAmount =  parseInt(incomeInput.value);

   const totalBalance = document.getElementById('balance-total');
   totalBalance.innerText = incomeAmount - totalCost;


  //  clear field
   foodInput.value = '';
   rentInput.value= '';
   clothInput.value = '';

  //.................Calculation of Saving Amount...............// 
   document.getElementById('saving-btn').addEventListener('click', function(){
    const savingAmount = incomeAmount * (20/100);
    const totalSaving = document.getElementById('total-saving');
    totalSaving.innerText = savingAmount; 

    //.........Remaining Balance After Reducing Saving Amoung.........//
    const remainingBalance = document.getElementById('remaining-balance');
    const previousBalance = parseInt(totalBalance.innerText);
    remainingBalance.innerText = previousBalance - savingAmount;
})

})


