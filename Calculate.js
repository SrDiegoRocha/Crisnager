export const funCalc = (key, value) => {
    let price;
    let breakPoints = 70;
    let breakPointsQtd = [];
    let breakPointsPriceSimple = [];
    let breakPointsPriceComposite = [];

    for (let i = 1; i < breakPoints; i++) {
        breakPointsQtd.push(i*15);       
    }

    for (let i = 0; i < breakPoints; i++) {
        breakPointsPriceSimple.push((i*5)+25);
        breakPointsPriceComposite.push((i*5)+30);
    }


    if (value === 0 || value === '' || value === undefined || value === null) {
        return {
            price: 0,
            qtd: value,
            priceAndQtd: value
        }
    }

    if (key === 'simple') {
        for (let i = 0; i < breakPoints; i++) {
            if (value > 0 && value <= breakPointsQtd[i]) {
                price = breakPointsPriceSimple[i]
                return {
                    price,
                    qtd: value
                }
            }
        }

    } else if(key === 'composite') {
        for (let i = 0; i < breakPoints; i++) {
            if (value > 0 && value <= breakPointsQtd[i]) {
                price = breakPointsPriceComposite[i]
                return {
                    price,
                    qtd: value
                }
            }
        }

    } else if(key === 'videos') {
        return {
            priceAndQtd: value
        }

    } else if(key === 'makeoff') {
        return {
            priceAndQtd: value
        }

    }
}