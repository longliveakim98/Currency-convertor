    document.getElementById('convert').addEventListener('click',function(){
    const selectFrom = document.getElementById("select-from").value;
    const selectTo = document.getElementById("select-to").value;
    const amount = parseFloat(document.getElementById("input-box").value);
    const symbolFrom = document.getElementById('symbol-from');
    const symbolTo = document.getElementById('symbol-to')
    let result = 0;


    const currencySymbols = {
        'USD': '$USD',
        'MYR': 'RM',
        'SGD': '$SGD',
        '?' : '?'
        
    };

    // Set the symbols based on selected currencies
    symbolFrom.innerText = currencySymbols[selectFrom];
    symbolTo.innerText = currencySymbols[selectTo];
    
    if (selectFrom === selectTo) {
        result = amount;
    }else if( selectFrom === 'USD' && selectTo ==='MYR'){
        result = amount * 4.18;    
    }else if ( selectFrom === 'USD' && selectTo ==='SGD' ){
        result = amount * 1.35;
    }else if ( selectFrom === 'MYR' && selectTo ==='USD' ){
        result = amount * 0.24;
    }else if ( selectFrom === 'MYR' && selectTo ==='SGD' ){
        result = amount * 0.32 ;
    }else if ( selectFrom === 'SGD' && selectTo ==='USD' ){
        result = amount * 0.74 ;
    }else if ( selectFrom === 'SGD' && selectTo ==='MYR' ){
        result = amount * 3.11;   
    } 

    if(isNaN(result)){
        document.getElementById('result').innerHTML = 'Give an amount!';
    }else if(result < 0){
        document.getElementById('result').innerHTML = 'Put on positive amount!';
    }else{ 
        document.getElementById('result').innerHTML=result.toFixed(2);
    }
    
});

