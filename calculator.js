function showresult(choice){
    var n1=parseFloat(document.getElementById('num1').value);
    var n2=parseFloat(document.getElementById('num2').value);
    var output;
    var c=choice;
    
    switch(c)
        {
        case '1':
            output=n1+n2;
            break;
        case '2':
            output=n1-n2;
            break;
        case '3':
            output=n1*n2;
            break;
        case '4': 
            output=n1/n2;
            break;
        case '5':
            output=n2*100/n1;
            break;
        default:
            break;
                
        }
    document.getElementById('result').value=output;
}