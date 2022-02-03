import ad from "../pageObject/advertisementPage";

context("Adivertisement Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://admin-advertisement.herokuapp.com/advertisements");
  });

  it("Must add new advertisement", () => {
    ad.getaddButton().click();
    ad.getAdvertisementNameField().type("NEW Add");
    ad.getStreetField().type("Boulevard Street 21");
    ad.getRoomsField().type("1");
    ad.getPriceField().type("200");
    ad.getStatusCheckbox().click();
    ad.getSaveButton().click();
    ad.getToast().contains("Saved successfully");
  });

  it("Must edit any existing advertisement", () => {
    ad.getAd().click();
    ad.getAdvertisementNameField().clear().type("new name");
    ad.getStreetField().clear().type("B Street 21");
    ad.getSaveButton().click();
    ad.getToast().contains("Saved successfully");
    ad.getAd().click();
    ad.getAdvertisementNameField().should("have.value", "new name");
    ad.getStreetField().should("have.value", "B Street 21");
  });
});
