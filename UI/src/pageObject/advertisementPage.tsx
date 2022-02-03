export default {
  getaddButton() {
    return cy.get(".al-add__button");
  },
  getAdvertisementNameField() {
    return cy.get("[name='name']");
  },
  getStreetField() {
    return cy.get("[name='street']");
  },
  getRoomsField() {
    return cy.get("[name='rooms']");
  },
  getPriceField() {
    return cy.get("[name='price']");
  },
  getStatusCheckbox() {
    return cy.get(`[type='checkbox']`);
  },
  getCancelButton() {
    return cy.get("button").contains("Cancel");
  },
  getSaveButton() {
    return cy.get("button").contains("save");
  },
  getToast() {
    return cy.get(".md-toast-text");
  },
  getAd() {
    return cy.get(".md-body > :nth-child(2) > :nth-child(2)");
  },
};
