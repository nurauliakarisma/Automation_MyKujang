import Login from '../../support/PageObject/login';
import MenuDashboard from '../../support/PageObject/dashboard';
import MenuPersonel from "../../support/PageObject/Personel/menupersonel";
import DataPokok from '../../support/PageObject/Personel/datapokorendem';

describe('LoginTest', () => {
  function generateNRP(baseNRP) {
    const prefix = baseNRP.slice(0, -4);
    const random = Math.floor(Math.random() * 1000 + 9999);
    return prefix + random;
  }
  beforeEach(function () {
    cy.viewport(1920, 1080)
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
    DataPokok.TambahDataPokok();
    DataPokok.AssertFormTambahDataPokok();
    DataPokok.UploadFotoDepan(this.DataPokok.TambahDataPokok1.FotoDepan);
    DataPokok.UploadFotoKanan(this.DataPokok.TambahDataPokok1.FotoKanan);
    DataPokok.UploadFotoKiri(this.DataPokok.TambahDataPokok1.FotoKiri);
    DataPokok.UploadFotoBelakang(this.DataPokok.TambahDataPokok1.FotoBelakang);
    DataPokok.NamaLengkap(this.DataPokok.TambahDataPokok1.NamaLengkap);
    const newNRP = generateNRP(this.DataPokok.TambahDataPokok1.NRP);
    DataPokok.NRP(newNRP);
    DataPokok.NIK(this.DataPokok.TambahDataPokok1.NIK);
    DataPokok.PilihPangkat(this.DataPokok.TambahDataPokok1.Pangkat);
    DataPokok.TMTPangkat(this.DataPokok.TambahDataPokok1.TMTPangkat);
    DataPokok.PilihKorps(this.DataPokok.TambahDataPokok1.Korps);
    DataPokok.PilihSpesialisasi(this.DataPokok.TambahDataPokok1.Spesialisasi);
    DataPokok.PilihKualifikasi(this.DataPokok.TambahDataPokok1.Kualifikasi);
    //DataPokok.PilihJabatan(this.DataPokok.TambahDataPokok1.Jabatan);
    //DataPokok.TMTJabatan(this.DataPokok.TambahDataPokok1.TMTJabatan);
    DataPokok.PilihSatuanKerja(this.DataPokok.TambahDataPokok1.Satuan);
    DataPokok.TempatLahir(this.DataPokok.TambahDataPokok1.TempatLahir);
    DataPokok.TanggalLahir(this.DataPokok.TambahDataPokok1.TanggalLahir);
    DataPokok.Agama(this.DataPokok.TambahDataPokok1.Agama);
    DataPokok.StatusPerkawinan(this.DataPokok.TambahDataPokok1.statusPerkawinan);
    DataPokok.JenisKelamin(this.DataPokok.TambahDataPokok1.JenisKelamin);
    DataPokok.Alamat(this.DataPokok.TambahDataPokok1.Alamat);
    DataPokok.NoHp(this.DataPokok.TambahDataPokok1.NoHp);
    DataPokok.KategoriPersonel(this.DataPokok.TambahDataPokok1.KategoriPersonel);
    DataPokok.TMTKategoriPersonel(this.DataPokok.TambahDataPokok1.TMTKategoriPersonel);
    DataPokok.SumberPerwira(this.DataPokok.TambahDataPokok1.SumberPerwira);
    DataPokok.TMTPerwira(this.DataPokok.TambahDataPokok1.TMTPerwira);
    DataPokok.SumberTNI(this.DataPokok.TambahDataPokok1.SumberTNI);
    DataPokok.TMTSumberTNI(this.DataPokok.TambahDataPokok1.TMTSumberTNI);
    DataPokok.SimpanDataPokok();
      })

})