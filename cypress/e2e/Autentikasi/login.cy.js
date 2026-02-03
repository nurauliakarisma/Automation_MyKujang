import Login from '../../support/PageObject/login';

//Login Test
describe('LoginTest', () => {
  before(function () {
    cy.fixture('login').as('loginData');
    Login.visitadmin();
  });

  it('Valid Login', function () {
    const user = this.loginData.validUser;
    Login.fillUsername(user.username);
    Login.fillPassword(user.password);
    Login.submit();
    Login.AssertLoginSuccess();
  });

});