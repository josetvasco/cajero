const users = [
    {
        id: 1,
        nombre: 'Jose',
        numDocumento: 123, 
        password: 123 
    },
    {
        id: 2,
        nombre: 'Daniel',
        numDocumento: 456,
        password: 456
    }
];

let dineroGenerado = [
    {
        valor: 100000,
        cantidad: 0
    },
    {
        valor: 50000,
        cantidad: 0
    },
    {
        valor: 20000,
        cantidad: 0
    },
    {
        valor: 10000,
        cantidad: 0
    },
    {
        valor: 5000,
        cantidad: 0
    }
];

let total = 0;

inicioSesion();

function inicioSesion() {
    let ingreso = false;
    do {
        let documento = parseInt( prompt( 'Ingrese el número de documento  :' ) );
        let pass = prompt( 'Ingrese la contraseña:' );
        
        if( documento == users[0].numDocumento && pass == users[0].password ) {
            ingreso = true;
            generarDinero();
        } else if ( documento == users[1].numDocumento && pass == users[1].password ) {
            ingreso = true;
            validacionDinero();
        } else {
            alert( 'Usuario no existe!!' );
        }
    } while (ingreso != true);
}

function generarDinero() {
    let num100 = parseInt(prompt('Ingrese la cantidad de billetes de $100.000: ', 0));
    let num50 = parseInt(prompt('Ingrese la cantidad de billetes de $50.000: ', 0));
    let num20 = parseInt(prompt('Ingrese la cantidad de billetes de $20.000: ', 0));
    let num10 = parseInt(prompt('Ingrese la cantidad de billetes de $10.000: ', 0));
    let num5 = parseInt(prompt('Ingrese la cantidad de billetes de $5.000: ', 0));
    dineroGenerado.forEach(function(dinero){
        if(dinero.valor == 100000){
            dinero.cantidad += num100;
        } else if(dinero.valor == 50000) {
            dinero.cantidad += num50;
        } else if(dinero.valor == 20000) {
            dinero.cantidad += num20;
        } else if(dinero.valor == 10000) {
            dinero.cantidad += num10;
        } else if(dinero.valor == 5000) {
            dinero.cantidad += num5;
        } 
    });

    ingreso = false;
    imprimirDinero()
}

function imprimirDinero() {
    let total100 = dineroGenerado[0].cantidad;
    let total50 = dineroGenerado[1].cantidad;
    let total20 = dineroGenerado[2].cantidad;
    let total10 = dineroGenerado[3].cantidad;
    let total5 = dineroGenerado[4].cantidad;
    total = (total5*5000) + (total10*10000) + (total20*20000) + (total50*50000) + (total100*100000);

    console.log('---SALDO ACTUAL---')
    console.log(`Billetes de $100.000: ${total100} `);
    console.log(`Billetes de $50.000: ${total50} `);
    console.log(`Billetes de $20.000: ${total20} `);
    console.log(`Billetes de $10.000: ${total10} `);
    console.log(`Billetes de $5.000: ${total5}`);
    console.log(`Total: $${total}`);

    inicioSesion();
}

function validacionDinero() {
    let billetes100 = 0;
    let billetes50 = 0;
    let billetes20 = 0;
    let billetes10 = 0;
    let billetes5 = 0;

    if (total === 0){
        console.log('Cajero en mantenimiento, vuelva pronto');
        inicioSesion();
    } else {
        let dineroSolicitado = parseInt(prompt('Ingrese el dinero a retirar: '));

        if(dineroSolicitado <= total){
            console.log('---SALDO RETIRADO---');
            dineroGenerado.forEach(function(dinero) {
                if((Math.floor(dineroSolicitado / dinero.valor)) > 0){
                    if (dinero.valor == 100000) {
                        if (dinero.cantidad > 0){
                            billetes100 = Math.floor(dineroSolicitado / dinero.valor);
                            if (billetes100 > dinero.cantidad){
                                billetes100 = dinero.cantidad;
                            }
                            console.log(`Se entregó billetes de $100.000: ${billetes100}`);
                            dinero.cantidad -= billetes100;
                            dineroSolicitado -= billetes100 * dinero.valor;
                        }
                    } else if (dinero.valor == 50000) {
                        if (dinero.cantidad > 0){
                            billetes50 = Math.floor(dineroSolicitado / dinero.valor);
                            if (billetes50 > dinero.cantidad){
                                billetes50 = dinero.cantidad
                            }
                            console.log(`Se entregó billetes de $50.000: ${billetes50}`);
                            dinero.cantidad -= billetes50;
                            dineroSolicitado -= billetes50 * dinero.valor;
                        }
                    } else if (dinero.valor == 20000) {
                        if(dinero.cantidad > 0) {
                            billetes20 = Math.floor(dineroSolicitado / dinero.valor);
                            if (billetes20 > dinero.cantidad){
                                billetes20 = dinero.cantidad
                            }
                            console.log(`Se entregó billetes de $20.000: ${billetes20}`);
                            dinero.cantidad -= billetes20;
                            dineroSolicitado -= billetes20 * dinero.valor;
                        }
                    } else if (dinero.valor == 10000) {
                        if(dinero.cantidad > 0) {
                            billetes10 = Math.floor(dineroSolicitado / dinero.valor);
                            if (billetes10 > dinero.cantidad){
                                billetes10 = dinero.cantidad
                            }
                            console.log(`Se entregó billetes de $10.000: ${billetes10}`);
                            dinero.cantidad -= billetes10;
                            dineroSolicitado -= billetes10 * dinero.valor;
                        }
                    } else if (dinero.valor == 5000) {
                        if(dinero.cantidad > 0) {
                            billetes5 = Math.floor(dineroSolicitado / dinero.valor);
                            if (billetes5 > dinero.cantidad){
                                billetes5 = dinero.cantidad
                            }
                            console.log(`Se entregó billetes de $5.000: ${billetes5}`);
                            dinero.cantidad -= billetes5;
                            dineroSolicitado -= billetes5 * dinero.valor;
                        } 
                    }
                }
            })
            let totalRetirado = (billetes100*100000) + (billetes50*50000) + (billetes20*20000) + (billetes10*10000) + (billetes5*5000)
            console.log(`--Total retirado: $${totalRetirado}--`);
            console.log(`Se quedó debiendo: ${dineroSolicitado}`)
            imprimirDinero();
            inicioSesion();
            } else {
                console.log(`No tengo el dinero solicitado ${dineroSolicitado}, solo hay ${total}`);
                inicioSesion();
            }
            
    }
}


 

