import Login from '../../support/PageObject/login';
import Agenda from "../../support/PageObject/Manajemen-Konten/agenda";

describe('Manajemen Konten - Agenda', () => {

  beforeEach(function () {
    cy.fixture('login').as('loginData');
    cy.fixture('agenda').as('AgendaData');
    Login.visitadmin();
  });

  it('TC-01 Manajemen Konten Agenda - Tambah Agenda', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Agenda.AssertManajementKontenCard();
    Agenda.ClickManajementKonten();
    Agenda.AssertAgendaCard();
    Agenda.ClickAgenda();
    const agenda = this.AgendaData.Agenda1;
    Agenda.ClickTambahAgenda();
    Agenda.fillJudulAgenda(agenda.title);
    Agenda.WaktuMulaiAgenda(agenda.waktumulai);
    Agenda.WaktuSelesaiAgenda(agenda.waktuselesai);
    Agenda.lokasiAgenda(agenda.location);
    Agenda.deskripsiAgenda(agenda.description);

    Agenda.ClickSimpanAgenda();

  });

});
