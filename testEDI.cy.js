// describe - использую как набор тест-кейсов, внутри него it - отдельный кейс
describe('frontend tests', () => {
    // кейс №1 "Тестирование авторизации с заполнением инпут-полей валидными данными"
    it('true auth', () => {
        cy.visit('https://frontend.stada-edi.cpeople.ru/login');
        cy.get('.css-1apqzwu > input').eq(0).type('remezov@cpeople.team');
        cy.get('.css-1apqzwu > input').eq(1).type('Remezov123.');
        cy.get('.css-tolxbf > .MuiButtonBase-root').click();
    });
    // кейс №2 "Тестирование авторизации удалённого пользователя"
    it('remove user', () => {
        let resultLog;
        cy.visit('https://frontend.stada-edi.cpeople.ru/login');
        cy.get('.css-1apqzwu > input').eq(0).type('esenia.esina@example.ru');
        cy.get('.css-1apqzwu > input').eq(1).type('Remezov123.');
        cy.get('.css-tolxbf > .MuiButtonBase-root').click();
        // Ниже код получения текста из всплывашки с текстом ошибки. 
        cy.get('.css-19gih4e').invoke('text').then(cy.log).then((text) => {
            resultLog = text;
            return text;
        });
    });
    // кейс №3 "Тестирование админа"
    it.only('user == admin', () => {
        cy.visit('https://frontend.stada-edi.cpeople.ru/login');
        cy.get('.css-1apqzwu > input').eq(0).type('support@cpeople.ru');
        cy.get('.css-1apqzwu > input').eq(1).type('6neCimEU7s2tt7.');
        cy.get('.css-tolxbf > .MuiButtonBase-root').click();
        // Ниже код получения текста из всплывашки с текстом ошибки. 
    });
})