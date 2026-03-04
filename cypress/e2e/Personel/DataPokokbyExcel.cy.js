import Login from '../../support/PageObject/login';
import MenuDashboard from '../../support/PageObject/dashboard';
import MenuPersonel from "../../support/PageObject/Personel/menupersonel";
import DataPokok from '../../support/PageObject/Personel/datapokok';

describe('E2E - Tambah Data Pokok dari Excel', () => {

  before(() => {
    cy.viewport(1920, 1080);

    // 🔹 Login sekali saja
    cy.fixture('login').then((loginData) => {

      Login.visitadmin();

      const user = loginData.validUser;
      Login.login(user.username, user.password);
      Login.AssertLoginSuccess();

      MenuDashboard.Personel();
      MenuDashboard.PagePersonelTampil();
      MenuPersonel.DataPokok();
    });
  });

  it('Input semua data personel dari Excel sampai habis', () => {

    // 🔥 Ambil data Excel
    cy.task('readExcel', 'cypress/fixtures/personel.xlsx')
      .then((data) => {

        // Validasi kalau kosong
        expect(data.length).to.be.greaterThan(0);

        cy.wrap(data).each((row, index) => {

          cy.log(`Memproses row ke-${index + 1}: ${row.NamaLengkap}`);

          // Intercept sebelum klik simpan
          cy.intercept('POST', '**/personel/**').as('savePersonel');

          DataPokok.TambahDataPokok();
          DataPokok.AssertFormTambahDataPokok();

          DataPokok.NamaLengkap(row.NamaLengkap);
          DataPokok.NRP(row.NRP);
          DataPokok.NIK(row.NIK);
          DataPokok.PilihPangkat(row.Pangkat);
          DataPokok.TMTPangkat(row.TMTPangkat);
          DataPokok.PilihKorps(row.Korps);
          DataPokok.PilihSpesialisasi(row.Spesialisasi);
          DataPokok.PilihKualifikasi(row.Kualifikasi);
          //DataPokok.PilihJabatan(row.Jabatan);
          //DataPokok.TMTJabatan(row.TMTJabatan);
          DataPokok.PilihSatuanKerja(row.Satuan);
          DataPokok.TempatLahir(row.TempatLahir);
          DataPokok.TanggalLahir(row.TanggalLahir);
          DataPokok.Agama(row.Agama);
          DataPokok.StatusPerkawinan(row.StatusPerkawinan);
          DataPokok.JenisKelamin(row.JenisKelamin);
          DataPokok.Alamat(row.Alamat);
          DataPokok.NoHp(row.NoHp);
          DataPokok.KategoriPersonel(row.KategoriPersonel);
          DataPokok.TMTKategoriPersonel(row.TMTKategoriPersonel);
          DataPokok.SumberPerwira(row.SumberPerwira);
          DataPokok.TMTPerwira(row.TMTPerwira);
          DataPokok.SumberTNI(row.SumberTNI);
          DataPokok.TMTSumberTNI(row.TMTSumberTNI);

          DataPokok.SimpanDataPokok();

          //🔥 Tunggu API selesai
          cy.wait('@savePersonel')
            .its('response.statusCode')
            .should('be.oneOf', [200, 201]);

          // 🔥 Assert notifikasi sukses (sesuaikan dengan app kamu)
          cy.contains('Data berhasil disimpan', { timeout: 10000 }).should('be.visible');

        });

      });

  });

});