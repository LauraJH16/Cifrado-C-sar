
//Creamos las funciones de CIPHER y DECIPHER:

function cipher(phrase){
    
    var output="";
    var texto = phrase.toUpperCase();
    
    for(var i = 0 ; i<texto.length ; i++){
        output += String.fromCharCode((((texto.charCodeAt(i)-65)+33)%26)+65);
    }

    return output;

}
    
function decipher(phrase1){
    
    var output1="";
    var texto1 = phrase1.toUpperCase();
    
    for(var j = 0 ; j<texto1.length ; j++){
        output1 += String.fromCharCode((((texto1.charCodeAt(j)+65)-33)%26)+65);
    }
    
    return output1;

}
    
//Por medio de 'prompt' le pedimos al usuario que ingrese un frase:
    var order = (prompt('Ingrese una frase: ')).toUpperCase();
    
    if(order != ""){
        //for(var m=0 ; m<order.length ; m++){}
        
        for(var k=0 ; k<order.length ; k++){
           
            if(order.charCodeAt(k) >= 65 && order.charCodeAt(k) <=90){
    
                var value=true;
                
            }else{
                 var value = false;
                alert('Ingrese solo letras');
            }             
        }

        if (value==true){
                              
            alert('Cifrado   ->    ' + cipher(order));
            alert('Decifrado   ->    ' + decipher(cipher(order)));
        }
        
    }else{
        alert('Ingrese una frase');
    }