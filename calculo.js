// cuota = (capital * i) / (1 - ( 1 + i) ^ -n)
//  𝐶𝑛 = 𝐶𝑜 ∗ (1 + 𝑖) ^ n

exports.calculo = (capital, tasaInteres, plazo) => {

    //let cuota = 0;
    let deposito =0;
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const depositos = [];
    let capitalAmortizar = 0;

    plazo = Math.round(plazo);

    // Calcular la cuota
    deposito = ( capital * (1 + tasaInteresDecimal) **-plazo);
    //cuota = (capital * tasaInteresDecimal) / ( 1 - (1 + tasaInteresDecimal) ** -plazo);
    
    deposito = deposito.toFixed(2);

    console.log(deposito);

    while (mes != plazo) {
        
        interes = capital * tasaInteresDecimal;
        interes = interes.toFixed(2);
  
        capitalAmortizar = deposito - interes;
        capitalAmortizar = capitalAmortizar.toFixed(2);
    
        mes++;
    
        capital -= capitalAmortizar;
        capital = capital.toFixed(2);
    
        depositos.push({
          mes,
          deposito,
          interes,
          capital,
        });
      }
    
      return depositos;
    };