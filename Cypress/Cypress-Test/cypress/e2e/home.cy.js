/// <reference types="Cypress" />
describe("My First Test", () => {
    it("Visits the Kitchen Sink Actions Page", () => {
        cy.visit("https://example.cypress.io");
        cy.contains("type").click();
        cy.url().should("include", "/commands/actions");
    });
});

describe("My Second Test", () => {
    it("Type in Email Field", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.get(".action-email").type("ppiron@gmail.com");
        cy.get(".action-email").should("have.value", "ppiron@gmail.com");
    });
});

describe("My Third Test", () => {
    it("Click on Canvas", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        cy.get(".action-btn").click();
        cy.get("#action-canvas").click();
        cy.get("#action-canvas").click("topLeft");
        cy.get("#action-canvas").click("bottomRight");
    });
});
