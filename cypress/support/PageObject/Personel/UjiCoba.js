class DataPokok {
    // Click Button Menu

   
    // Clik Form Data Pokok
    static TambahDataPokok(){
        cy.get('div.d-flex.align-center > button.v-btn.v-btn--icon > span:nth-of-type(3) > i.mdi-plus.mdi').should('be.visible').click();
    }
    static SimpanDataPokok(){
        cy.contains('button', 'Simpan').click();
    }
    static SearchDataPokok(Nama){
        cy.get('input[placeholder="Cari"]').type(Nama);
        cy.get('.mdi-magnify').click();
        cy.get('td').contains(Nama).should('be.visible');
    }
    static AssertBerhasilHapusDataPokok(){
        cy.contains('Berhasil menghapus data').should('be.visible');
    }

    // Hapus Data Pokok berdasarkan Nama
    static clickHapusDataPokok(Nama) {
        cy.wait(10000); // Tunggu sebentar untuk memastikan data sudah muncul
        cy.get(':nth-child(2) > .d-flex > h4').contains(Nama)
            .should('be.visible')
            .closest('tr')
            .within(() => {
                cy.get('i.mdi-trash-can')
                .should('be.visible')
                .click()
            })

        cy.contains('button', 'Konfirmasi')//.click()
    }


    
}

export default DataPokok;