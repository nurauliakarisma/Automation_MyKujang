class MenuPersonel {

    //Personel Menu
    static Personel(){
        cy.contains('Personel').should('be.visible').click();
    }

    static DataPokok(){
        cy.contains('Data Pokok').should('be.visible').click();
    }

    static Jabatan(){
        cy.contains('Jabatan').should('be.visible').click();
    }

    static KenaikanPangkat(){
        cy.contains('Kenaikan Pangkat').should('be.visible').click();
    }

    static Kumplin(){
        cy.contains('Kumplin').should('be.visible').click();
    }

    static Tahor(){
        cy.contains('Tahor').should('be.visible').click();
    }

    static TunjanganBrivet(){
        cy.contains('Tunjangan Brivet').should('be.visible').click();
    }

    static Gaji(){
        cy.contains('Gaji').should('be.visible').click();
    }

    static Dosir(){
        cy.contains('Dosir').should('be.visible').click();
    }

    static Sprin(){
        cy.contains('Sprin').should('be.visible').click();
    }

    static Mutasi(){
        cy.contains('Mutasi').should('be.visible').click();
    }

    static Pelayanan(){
        cy.contains('Pelayanan').should('be.visible').click();
    }

    static Lapkuat(){
        cy.contains('Lapkuat').should('be.visible').click();
    }

    static SmartAnalitika(){
        cy.contains('Smart Analitika').should('be.visible').click();
    }

    static EIS(){
        cy.contains('EIS').should('be.visible').click();
    }

    static Dashboard(){
        cy.contains('Dashboard').should('be.visible').click();
    }


    //Assertion Personel Menu
    static AssertPersonelMenu(){
        cy.url().should('include', '/admin/portal?module=personel');
    }

    static AssertDataPokok(){
        cy.contains('Data Pokok').should('be.visible');
    }

    static AssertJabatan(){
        cy.contains('Jabatan').should('be.visible');
    }

    static AssertKenaikanPangkat(){
        cy.contains('Kenaikan Pangkat').should('be.visible');
    }

    static AssertKumplin(){
        cy.contains('Kumplin').should('be.visible');
    }

    static AssertTahor(){
        cy.contains('Tahor').should('be.visible');
    }

    static AssertTunjanganBrivet(){
        cy.contains('Tunjangan Brivet').should('be.visible');
    }

    static AssertGaji(){
        cy.contains('Gaji').should('be.visible');
    }

    static AssertDosir(){
        cy.contains('Dosir').should('be.visible');
    }

    static AssertSprin(){
        cy.contains('Sprin').should('be.visible');
    }

    static AssertMutasi(){
        cy.contains('Mutasi').should('be.visible');
    }

    static AssertPelayanan(){
        cy.contains('Pelayanan').should('be.visible');
    }

    static AssertLapkuat(){
        cy.contains('Lapkuat').should('be.visible');
    }

    static AssertSmartAnalitika(){
        cy.contains('Smart Analitika').should('be.visible');
    }       

    static AssertEIS(){
        cy.contains('EIS').should('be.visible');
    }

    static AssertDashboard(){
        cy.contains('Dashboard').should('be.visible');
    }
    
}
export default new MenuPersonel();