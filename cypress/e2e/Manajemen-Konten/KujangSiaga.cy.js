import Login from '../../support/PageObject/login';
import KujangSiaga from "../../support/PageObject/Manajemen-Konten/kujangsiaga";

describe('LoginTest', () => {
  beforeEach(function () {
    cy.fixture('login').as('loginData');
    cy.fixture('KujangSiaga').as('KujangSiagaData');
    Login.visitadmin();
  });

  it ('Add-KujangSiaga-Normal', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    // Tambahkan langkah-langkah untuk menambahkan Kujang Siaga di sini
    KujangSiaga.AssertManajementKontenCard();
    KujangSiaga.ClickManajementKonten();
    KujangSiaga.ClickKujangSiaga();
    KujangSiaga.ClickTambahKujangSiaga();
    KujangSiaga.AssertFormTambahKujangSiaga();
    KujangSiaga.fillTitle(this.KujangSiagaData.KujangSiaga1.title);
    KujangSiaga.PilihTanggalHariIni();
    KujangSiaga.Pilihwaktu(this.KujangSiagaData.KujangSiaga1.waktu, this.KujangSiagaData.KujangSiaga1.tambahMenit);
    KujangSiaga.PilihPeringatan(this.KujangSiagaData.KujangSiaga1.peringatan);
    KujangSiaga.PilihLevel(this.KujangSiagaData.KujangSiaga1.level);
    KujangSiaga.PilihBerulang(this.KujangSiagaData.KujangSiaga1.berulang);
    KujangSiaga.PilihPegawai(this.KujangSiagaData.KujangSiaga1.pegawai);
    KujangSiaga.fillPesan(this.KujangSiagaData.KujangSiaga1.Pesan);
    KujangSiaga.fillLokasi(this.KujangSiagaData.KujangSiaga1.Lokasi);
    KujangSiaga.ClickSimpanKujangSiaga();
    KujangSiaga.AssertSimpanKujangSiagaSuccess();
  });

  it ('Edit-KujangSiaga-Normal', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    KujangSiaga.AssertManajementKontenCard();
    KujangSiaga.ClickManajementKonten();
    KujangSiaga.ClickKujangSiaga();
    KujangSiaga.SearchKujangSiaga(this.KujangSiagaData.KujangSiaga1.title);
    KujangSiaga.ClickSearchKujangSiaga();
    KujangSiaga.ClickRowKujangSiagaByTitle(this.KujangSiagaData.KujangSiaga1.title);
    KujangSiaga.ClickEditKujangSiaga();
    KujangSiaga.AssertFormEditKujangSiaga();
    KujangSiaga.fillTitle(this.KujangSiagaData.EditKujangSiaga1.title);
    KujangSiaga.PilihTanggalHariIni();
    KujangSiaga.PilihPeringatan(this.KujangSiagaData.EditKujangSiaga1.peringatan);
    KujangSiaga.fillPesan(this.KujangSiagaData.EditKujangSiaga1.Pesan);
    KujangSiaga.fillLokasi(this.KujangSiagaData.EditKujangSiaga1.Lokasi);
    KujangSiaga.ClickSimpanKujangSiaga();
    KujangSiaga.AssertSimpanKujangSiagaSuccess();
  });

  it ('Delete-KujangSiaga-Normal', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    KujangSiaga.AssertManajementKontenCard();
    KujangSiaga.ClickManajementKonten();
    KujangSiaga.ClickKujangSiaga();
    KujangSiaga.SearchKujangSiaga(this.KujangSiagaData.EditKujangSiaga1.title);
    KujangSiaga.ClickSearchKujangSiaga();
    KujangSiaga.ClickDeleteKujangSiagaByTitle(this.KujangSiagaData.EditKujangSiaga1.title);
    KujangSiaga.AssertDeleteKujangSiagaSuccess();
  });

    it ('Add-KujangSiaga-Siaga', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    // Tambahkan langkah-langkah untuk menambahkan Kujang Siaga di sini
    KujangSiaga.AssertManajementKontenCard();
    KujangSiaga.ClickManajementKonten();
    KujangSiaga.ClickKujangSiaga();
    KujangSiaga.ClickTambahKujangSiaga();
    KujangSiaga.AssertFormTambahKujangSiaga();
    KujangSiaga.fillTitle(this.KujangSiagaData.KujangSiaga2.title);
    KujangSiaga.PilihTanggalHariIni();
    KujangSiaga.Pilihwaktu(this.KujangSiagaData.KujangSiaga2.waktu, this.KujangSiagaData.KujangSiaga2.tambahMenit);
    KujangSiaga.PilihPeringatan(this.KujangSiagaData.KujangSiaga2.peringatan);
    KujangSiaga.PilihLevel(this.KujangSiagaData.KujangSiaga2.level);
    KujangSiaga.PilihPegawai(this.KujangSiagaData.KujangSiaga2.pegawai);
    KujangSiaga.fillPesan(this.KujangSiagaData.KujangSiaga2.Pesan);
    KujangSiaga.fillLokasi(this.KujangSiagaData.KujangSiaga2.Lokasi);
    KujangSiaga.ClickSimpanKujangSiaga();
    KujangSiaga.AssertSimpanKujangSiagaSuccess();
  });

  it ('Edit-KujangSiaga-Siaga', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    KujangSiaga.AssertManajementKontenCard();
    KujangSiaga.ClickManajementKonten();
    KujangSiaga.ClickKujangSiaga();
    KujangSiaga.SearchKujangSiaga(this.KujangSiagaData.KujangSiaga2.title);
    KujangSiaga.ClickSearchKujangSiaga();
    KujangSiaga.ClickRowKujangSiagaByTitle(this.KujangSiagaData.KujangSiaga2.title);
    KujangSiaga.ClickEditKujangSiaga();
    KujangSiaga.AssertFormEditKujangSiaga();
    KujangSiaga.fillTitle(this.KujangSiagaData.EditKujangSiaga2.title);
    KujangSiaga.PilihTanggalHariIni();
    KujangSiaga.PilihPeringatan(this.KujangSiagaData.EditKujangSiaga2.peringatan);
    KujangSiaga.fillPesan(this.KujangSiagaData.EditKujangSiaga2.Pesan);
    KujangSiaga.fillLokasi(this.KujangSiagaData.EditKujangSiaga2.Lokasi);
    KujangSiaga.ClickSimpanKujangSiaga();
    KujangSiaga.AssertSimpanKujangSiagaSuccess();
  });

  it ('Delete-KujangSiaga-Siaga', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    KujangSiaga.AssertManajementKontenCard();
    KujangSiaga.ClickManajementKonten();
    KujangSiaga.ClickKujangSiaga();
    KujangSiaga.SearchKujangSiaga(this.KujangSiagaData.EditKujangSiaga2.title);
    KujangSiaga.ClickSearchKujangSiaga();
    KujangSiaga.ClickDeleteKujangSiagaByTitle(this.KujangSiagaData.EditKujangSiaga2.title);
    KujangSiaga.AssertDeleteKujangSiagaSuccess();
  });
});

export default KujangSiaga;