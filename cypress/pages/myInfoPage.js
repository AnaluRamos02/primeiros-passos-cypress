class MyInfoPage {
    selectorsList() {
        const selectors = {
           firstNameField: "[name='firstName']",
           lastNameField: "[name='lastName']",
           genericField: ".oxd-input--active",
           dataField: "[placeholder='yyyy-dd-mm']",
           genericCombobox: ".oxd-select-text--arrow", 
           secondItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
           thirdItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
           dataCloseButton: '.--close',
           submitButton: ".orangehrm-left-space"
        }

        return selectors
    }

    fillNameField(firstName, lastName,) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
    } 

    fillPersonalDetails(employeeId, OtherId, driverLicenseNumber, expiryDate ){
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber)
    cy.get(this.selectorsList().genericField).eq(6).clear({ force: true }).type(expiryDate)
    cy.get(this.selectorsList().dataCloseButton).click()
    }

    saveForm(){
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    }

    fillStatus() {
    cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
    cy.get(this.selectorsList().secondItemCombobox).click()
    cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
    cy.get(this.selectorsList().thirdItemCombobox).click()
    }
}

export default MyInfoPage