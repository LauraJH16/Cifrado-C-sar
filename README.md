# PRODUCTO FINAL - CIFRADO CÉSAR

### PSEUDOCODIGO:

Creamos función de cifrado:
~~~
Funcion Cipher(phrase){  
    
    Definir output,texto,i  

    output = ''(vacio)  
    texto = phrase(convertido en mayusculas)

    Para( i = 0 , i < longitud de la variable texto , i = i + 1){

    output = output + String.fromCharCode(Devuelve una cadena desde un numero ASCII)((((texto.charCodeAt[ i ](Devuelve numero ASCII de la variable texto1 en su indice i )-65)+33)%26)+65)
    }

    retorne variable output
    }
~~~
Ahora creamos una funcion de descifrado a la cual le estoy poniendo un 1 adelante de sus variables y cambiando el ' i ' por el ' j ' para no confundirlas con las de la funcion Cipher
~~~
Funcion Decipher(phrase1){  
    
    Definimos como variable a output1,texto1,j

    output1 = ''(vacio)  
    texto1 = phrase1(convertido en mayusculas)

    Para( j = 0 , j<longitud de la variable texto1 , j = j + 1){

    output1 = output1 + String.fromCharCode(Devuelve una cadena desde un numero ASCII)((((texto1.charCodeAt[ j ](Devuelve numero ASCII de la variable texto1 en su indice j )+65)-33)%26)+65)
    }

    retorne variable output1
    }
~~~
Ahora que ya tenemos las funciones creadas pasaremos a preguntar al usuario y a validar 
~~~
Definimos como variable a order,k,value

order = prompt('Ingresa una frase')(Pide al usuario)

Si(order es distinto de ""(vacio))Entonces:

    Para (k = 0 , k < longitud de la     variable order,k = k + 1){
        Si(order convertido a ASCII mayor 64 y menor a 91 )Entonces:
           
            value = true
        
        Sino

            value = false
            Alerta ('Ingrese solo letras')
    }

    Si (value == true) Entonces:

        Alerta ('Cifrado  ->' + (LLamamos a la funcion Cipher) Cipher(order))
        Alerta ('Decifrado  ->' + (LLamamos a la funcion Decipher) Decipher(order))

Sino

    Alerta('Ingrese una frase')
~~~

### DIAGRAMA DE FLUJO

![Sin titulo](diagrama.png)