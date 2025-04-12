describe("Drag and Drop Tests", () => {
  beforeEach(() => {
    cy.visit("YOUR_PAGE_URL_HERE"); // Replace with your actual HTML page path
  });

  it("Check if all draggable items exist", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).should("exist");
    }
  });

  it("Check if all div containers exist", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#div${index}`).should("exist");
    }
  });

  const triggerDragAndDrop = (sourceSelector, targetSelector) => {
    cy.get(sourceSelector).then(($source) => {
      const dataTransfer = new DataTransfer();

      cy.wrap($source)
        .trigger("dragstart", { dataTransfer })
        .trigger("drag", { dataTransfer });

      cy.get(targetSelector)
        .trigger("dragover", { dataTransfer })
        .trigger("drop", { dataTransfer });

      cy.wrap($source).trigger("dragend", { dataTransfer });
    });
  };

  it("Drag drag3 to drag6", () => {
    triggerDragAndDrop("#drag3", "#drag6");
  });

  it("Drag drag1 to drag5", () => {
    triggerDragAndDrop("#drag1", "#drag5");
  });

  it("Drag drag4 to drag2", () => {
    triggerDragAndDrop("#drag4", "#drag2");
  });

  it("Drag drag2 to drag3", () => {
    triggerDragAndDrop("#drag2", "#drag3");
  });

  it("Drag drag5 to drag3", () => {
    triggerDragAndDrop("#drag5", "#drag3");
  });

  it("Drag drag6 to drag1", () => {
    triggerDragAndDrop("#drag6", "#drag1");
  });
});
