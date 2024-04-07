function sumar(): void {
    console.log("suma resultado");
    let elementoid: number | null = parseInt((document.getElementById('n1') as HTMLInputElement)?.value);
    console.log(elementoid);

    let elementoid2: number | null = parseInt((document.getElementById('n2') as HTMLInputElement)?.value);
    console.log(elementoid2);
    alert('El resultado de la suma es '+ (elementoid+elementoid2))

    let elementoid3 = (document.getElementById('res') as HTMLInputElement);
    console.log(elementoid3);
    let textoConcatenado=(elementoid+elementoid2)

    // Asignar el texto concatenado a elementoid3
    let textoString: string = String(textoConcatenado);
    elementoid3.value=textoString


}

function restar(): void {
    console.log("resta");
    let elementoid: number | null = parseInt((document.getElementById('n1') as HTMLInputElement)?.value);
    console.log(elementoid);

    let elementoid2: number | null = parseInt((document.getElementById('n2') as HTMLInputElement)?.value);
    console.log(elementoid2);
    alert('El resultado de la resta es '+ (elementoid-elementoid2))

    let elementoid3 = (document.getElementById('res') as HTMLInputElement);
    console.log(elementoid3);
    let textoConcatenado=(elementoid-elementoid2)

    // Asignar el texto concatenado a elementoid3
    let textoString: string = String(textoConcatenado);
    elementoid3.value=textoString


}


function multiplicar(): void {
    console.log("mult");
    let elementoid: number | null = parseInt((document.getElementById('n1') as HTMLInputElement)?.value);
    console.log(elementoid);

    let elementoid2: number | null = parseInt((document.getElementById('n2') as HTMLInputElement)?.value);
    console.log(elementoid2);
    alert('El resultado de la multiplicación es '+ (elementoid*elementoid2))

    let elementoid3 = (document.getElementById('res') as HTMLInputElement);
    console.log(elementoid3);
    let textoConcatenado=(elementoid*elementoid2)

    // Asignar el texto concatenado a elementoid3
    let textoString: string = String(textoConcatenado);
    elementoid3.value=textoString


}

function dividir(): void {
    console.log("division");
    let elementoid: number | null = parseInt((document.getElementById('n1') as HTMLInputElement)?.value);
    console.log(elementoid);

    let elementoid2: number | null = parseInt((document.getElementById('n2') as HTMLInputElement)?.value);
    console.log(elementoid2);
    alert('El resultado de la división es '+ (elementoid/elementoid2))

    let elementoid3 = (document.getElementById('res') as HTMLInputElement);
    console.log(elementoid3);
    let textoConcatenado=(elementoid/elementoid2)

    // Asignar el texto concatenado a elementoid3
    let textoString: string = String(textoConcatenado);
    elementoid3.value=textoString


}
