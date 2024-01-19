// describe - использую как набор тест-кейсов, внутри него it - отдельный кейс
describe('frontend tests', () => {
    // кейс №1 "Авторизация, добавление товаров в корзину и оформление заказа"
    it('true auth', () => {
        // Сброс куки/local
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        // Ввод переменных заранее
        let SKU_1;
        let SKU_2;
        let SKU_1_basket;
        let SKU_2_basket;
        //Авторизация
        cy.visit('https://frontend.stada-edi.cpeople.ru/login');
        cy.get('.css-1apqzwu > input').eq(0).type('remezov@cpeople.team');
        cy.get('.css-1apqzwu > input').eq(1).type('Remezov123.');
        cy.get('.css-tolxbf > .MuiButtonBase-root').click();
        cy.wait(1500);
        // Переход в каталог и добавление позиций в корзину
        cy.visit('https://frontend.stada-edi.cpeople.ru/catalog');
        cy.get('.MuiGrid-wrap-xs-nowrap > :nth-child(2) > .MuiInputBase-root > .MuiSelect-select').click();
        cy.get('[data-value="1"]').click();
        cy.wait(1500);
        // Ниже записываю SKU заранее в две переменные (дальше возможен грейд до записи в массивы)
        cy.get('#row3391 > td:nth-child(2) > .css-1sqp8qc').invoke('text').then(cy.log).then((text) => {
            SKU_1 = text;
            return text;
        });
        cy.get('#row3488 > td:nth-child(2) > .css-1sqp8qc').invoke('text').then(cy.log).then((text) => {
            SKU_2 = text;
            return text;
        });
        // Указываю кол-во товаров в каталоге
        cy.get('#row3391 > td:first-child() input').type('{ctrl}+{a} {backspace} 10');
        cy.get('#row3488 > td:first-child() input').type('{ctrl}+{a} {backspace} 10');
        // Перехожу в корзину
        cy.get('.css-gtxs57 > .MuiButtonBase-root').click();
        cy.get('.css-1uofusz > .MuiButtonBase-root').click();
        // Создаю переменные SKU в корзине
        cy.get('#row3391 > td:nth-child(2) > .css-1sqp8qc').invoke('text').then(cy.log).then((text) => {
            SKU_1_basket = text;
            return text;
        });
        cy.get('#row3488 > td:nth-child(2) > .css-1sqp8qc').invoke('text').then(cy.log).then((text) => {
            SKU_2_basket = text;
            return text;
        });
        // Сравнение SKU для проверки, те ли были добавлены, если true, то оформление заказа
        if (SKU_1 == SKU_1_basket && SKU_2 == SKU_2_basket) {
            cy.get('.css-jc15eb > :nth-child(2) > .MuiButtonBase-root').click();
            cy.get('.css-tu690p > .MuiGrid-root > .MuiButtonBase-root').click();
            cy.get('.css-ccxz37 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click();
            cy.get('form .css-1uvydh2').click().type("24012024");
            cy.wait(1500);
            cy.get('.css-tu690p > .MuiGrid-root > .MuiButtonBase-root').click();
        } else {
            console.log('Error: SKU отличаются!');
        }
    });
})
