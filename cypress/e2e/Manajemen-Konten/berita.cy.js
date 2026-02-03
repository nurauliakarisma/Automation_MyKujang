import Login from '../../support/PageObject/login';
import Berita from "../../support/PageObject/Manajemen-Konten/berita";

describe('LoginTest', () => {
  beforeEach(function () {
    cy.fixture('login').as('loginData');
    cy.fixture('berita').as('beritaData');
    Login.visitadmin();
  });

  it('B-01 Add-berita-draf', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Berita.AssertManajementKontenCard();
    Berita.ClickManajementKonten();
    Berita.ClickBerita();
    Berita.ClickTambahBerita();
    Berita.fillTitle(this.beritaData.beritadraft.title);
    Berita.uploadPhoto(this.beritaData.beritadraft.photo);
    Berita.fillDeskripsi(this.beritaData.beritadraft.deskripsi);
    Berita.uploadThumbnail(this.beritaData.beritadraft.thumbnail);
    Berita.ClickDraftBerita();
    Berita.AssertSimpanDraftBeritaSuccess();
  });
  
  it('B-02 Hapus-berita-draf', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Berita.AssertManajementKontenCard();
    Berita.ClickManajementKonten();
    Berita.ClickBerita();
    Berita.ClickEllipsisByTitle(this.beritaData.beritadraft.title);
    Berita.ClickDeleteIcon();
    Berita.AssertPopUpHapusBerita();
    Berita.ClickKonfirmasiHapusBerita();
    Berita.AssertHapusBeritaSuccess();
  });

  it('B-03 Add-berita-reset-berita-publish', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Berita.AssertManajementKontenCard();
    Berita.ClickManajementKonten();
    Berita.ClickBerita();
    Berita.ClickTambahBerita();
    Berita.fillTitle(this.beritaData.beritadraft.title);
    Berita.uploadPhoto(this.beritaData.beritadraft.photo);
    Berita.fillDeskripsi(this.beritaData.beritadraft.deskripsi);
    Berita.uploadThumbnail(this.beritaData.beritadraft.thumbnail);
    Berita.ClickResetBerita();
    Berita.fillTitle(this.beritaData.beritaedit.title);
    Berita.uploadPhoto(this.beritaData.beritaedit.photo);
    Berita.fillDeskripsi(this.beritaData.beritaedit.deskripsi);
    Berita.uploadThumbnail(this.beritaData.beritaedit.thumbnail);
    Berita.ClickPublikasiBerita();
    Berita.AssertSimpanDraftBeritaSuccess();
  });

  it('B-04 Hapus-berita-edit', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Berita.AssertManajementKontenCard();
    Berita.ClickManajementKonten();
    Berita.ClickBerita();
    Berita.ClickEllipsisByTitle(this.beritaData.beritaedit.title);
    Berita.ClickDeleteIcon();
    Berita.AssertPopUpHapusBerita();
    Berita.ClickKonfirmasiHapusBerita();
    Berita.AssertHapusBeritaSuccess();
  });

  it('B-05 Add-berita-publikasi', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Berita.AssertManajementKontenCard();
    Berita.ClickManajementKonten();
    Berita.ClickBerita();
    Berita.ClickTambahBerita();
    Berita.fillTitle(this.beritaData.beritadraft.title);
    Berita.uploadPhoto(this.beritaData.beritadraft.photo);
    Berita.fillDeskripsi(this.beritaData.beritadraft.deskripsi);
    Berita.uploadThumbnail(this.beritaData.beritadraft.thumbnail);
    Berita.ClickPublikasiBerita();
    Berita.AssertPublishBeritaSuccess();
  });
  
  it('B-06 Hapus-berita-publikasi', function () {
    const user = this.loginData.validUser;
    Login.login(user.username, user.password);
    Login.AssertLoginSuccess();
    Berita.AssertManajementKontenCard();
    Berita.ClickManajementKonten();
    Berita.ClickBerita();
    Berita.ClickEllipsisByTitle(this.beritaData.beritadraft.title);
    Berita.ClickDeleteIcon();
    Berita.AssertPopUpHapusBerita();
    Berita.ClickKonfirmasiHapusBerita();
    Berita.AssertHapusBeritaSuccess();
  });



});
