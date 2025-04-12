let dragged = null;

document.querySelectorAll('.image').forEach(item => {
  item.addEventListener('dragstart', e => {
    dragged = e.target;
    e.target.classList.add("dragging");
  });

  item.addEventListener('dragend', e => {
    e.target.classList.remove("dragging");
    dragged = null;
  });

  item.addEventListener('dragover', e => {
    e.preventDefault();
  });

  item.addEventListener('drop', e => {
    e.preventDefault();

    // Ensure you're getting the correct target (parent div)
    let dropTarget = e.target;
    if (!dropTarget.classList.contains('image')) {
      dropTarget = dropTarget.closest('.image');
    }

    if (dragged && dropTarget && dragged !== dropTarget) {
      // Swap background images
      const draggedBg = dragged.style.backgroundImage;
      const targetBg = dropTarget.style.backgroundImage;

      dragged.style.backgroundImage = targetBg;
      dropTarget.style.backgroundImage = draggedBg;

      // Swap text content
      const tempText = dragged.textContent;
      dragged.textContent = dropTarget.textContent;
      dropTarget.textContent = tempText;
    }
  });
});
