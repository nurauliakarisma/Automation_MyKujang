import Login from '../../support/PageObject/login';
import MenuDashboard from '../../support/PageObject/dashboard';
import MenuPersonel from "../../support/PageObject/Personel/menupersonel";
import DataPokok from '../../support/PageObject/Personel/DataPokok1';

describe('LoginTest', () => {
  function generateNRP(baseNRP) {
    const prefix = baseNRP.slice(0, -4);
    const random = Math.floor(Math.random() * 1000 + 9999);
    return prefix + random;
  }
  beforeEach(function () {
    cy.viewport(2450, 1080)
    cy.fixture('login').as('loginData');
    cy.fixture('DataPokok').as('DataPokok');
    Login.visitadmin();
  });

  it ('Dp-1 Tambah Data Pokok', function (){
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    MenuDashboard.Personel();  
    MenuDashboard.PagePersonelTampil();
    MenuPersonel.DataPokok();
    DataPokok.SearchDataPokok(this.DataPokok.TambahDataPokok1.NamaLengkap);
    DataPokok.clickHapusDataPokok(); 
    //DataPokok.AssertBerhasilHapusDataPokok();
  })

})
