// describe - использую как набор тест-кейсов, внутри него it - отдельный кейс
describe('CRPT tests', () => {
    // кейс №1 "Тестирование авторизации с заполнением инпут-полей валидными данными с полном формате"
    it('Auth test with @', () => {
        cy.visit('https://frontend.portal.crpt.cpeople.ru/login');
        cy.get('.login_B_Login_LoginWrap__PFY6c > .login_B_Login_Control__R7rX_').type('cpeople.remezov@crpt.ru');
        cy.get('.login_B_Login_PasswordWrap__uBsk8 > .login_B_Login_Control__R7rX_').type('zkw!NHPDZnjDdV65@WBE');
        cy.get('.login_B_Login_Button__lTltp').click();
    });
    // кейс №2 "Тестирование авторизации с заполнением инпут-полей валидными данными до @"
    it('Auth test without @', () => {
        cy.visit('https://frontend.portal.crpt.cpeople.ru/login');
        cy.get('.login_B_Login_LoginWrap__PFY6c > .login_B_Login_Control__R7rX_').type('cpeople.remezov');
        cy.wait(500);
        cy.get('.login_B_Login_PasswordWrap__uBsk8 > .login_B_Login_Control__R7rX_').type('zkw!NHPDZnjDdV65@WBE');
        cy.wait(500);
        cy.get('.login_B_Login_Button__lTltp').click();
    });
    // кейс №3 "Тестирование авторизации удалённого пользователя"
    it('Remote user authorization', () => {
        cy.visit('https://frontend.portal.crpt.cpeople.ru/login');
        cy.get('.login_B_Login_LoginWrap__PFY6c > .login_B_Login_Control__R7rX_').type('cpeople.dmitriev@crpt.ru');
        cy.get('.login_B_Login_PasswordWrap__uBsk8 > .login_B_Login_Control__R7rX_').type('zkw!NHPDZnjDdV65@WBE');
        cy.get('.login_B_Login_Button__lTltp').click();
    });
    // кейс №4 "Тестирование авторизации удалённого пользователя"
    it('Universal access', () => {
        cy.visit('https://frontend.portal.crpt.cpeople.ru/login');
        cy.get('.login_B_Login_LoginWrap__PFY6c > .login_B_Login_Control__R7rX_').type('o.pertseva');
        cy.wait(500);
        cy.get('.login_B_Login_PasswordWrap__uBsk8 > .login_B_Login_Control__R7rX_').type('crptsecret');
        cy.wait(500);
        cy.get('.login_B_Login_Button__lTltp').click();
    });
})