class DataPokok {
    static TambahDataPokok(){
        cy.contains('.mdi-plus').should('be.visible').click();
    }

    static NamaDepan(NamaDepan){
        cy.get('input[aria-labelledby="input-v-0-4-label"]').should('be.visible').clear().type(NamaDepan);
    }

    static NRP(NRP){
        cy.get('input[aria-labelledby="input-v-0-7-label"]').should('be.visible').clear().type(NRP);
    }

    static NIK(NIK){
        cy.get('input[aria-labelledby="input-v-0-10-label"]').should('be.visible').clear().type(NIK);
    }

    static PilihPangkat(Pangkat){
        cy.get('.v-field__input').should('be.visible').click();
        cy.contains(Pangkat).should('be.visible').click();
    }

    static PilihTMTPangkat(TMTPangkat){
        cy.get('input[aria-labelledby="input-v-0-20-label"]').should('be.visible').clear().type(TMTPangkat);
    }

    static Korps(Korps){
        cy.get('.v-field__input').should('be.visible').click();
        cy.contains(Korps).should('be.visible').click();
    }

    static Spesialisasi(Spesialisasi){
        cy.get('input[aria-controls="menu-v-4-99"]').should('be.visible').click();
        cy.contains(Spesialisasi).should('be.visible').click();
    }

    static Jabatan(Jabatan){
        cy.get('input[aria-labelledby="input-v-0-32-label"]').should('be.visible').clear().click();
        cy.contains(Jabatan).should('be.visible').click();
    }

    static TMTJabatan(TMTJabatan){
        cy.get('input[aria-labelledby="input-v-4-106-label"]').should('be.visible').clear().type(TMTJabatan);
    }

    static Satuan(){
        cy.get('input[placeholder="Satuan Kerja"]').should('be.visible').click();
        cy.contains('#v-list-group--id-0102').should('be.visible').click();
        cy.contains('Pilih').should('be.visible').click();
    }

    static TempatLahir(TempatLahir){
        cy.get('input[aria-labelledby="input-v-4-109-label"]').should('be.visible').clear().type(TempatLahir);
    }

    static TanggalLahir(TanggalLahir){
        cy.get('input[aria-labelledby="input-v-4-113-label"]').should('be.visible').clear().click();
        cy.contains(TanggalLahir).should('be.visible').click();
        cy.get('.v-btn__content').contains('2026').should('be.visible').click();
        cy.contains('2000').should('be.visible').click();
    }


}
export default DataPokok;