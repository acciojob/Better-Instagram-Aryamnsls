let dragged = null;

document.querySelectorAll('.image').forEach(item => {
  item.addEventListener('dragstart', e => {
    dragged = e.target;
    e.target.classList.add("dragging");
  });

  item.addEventListener('dragend', e => {
    e.target.classList.remove("dragging");
  });

  item.addEventListener('dragover', e => {
    e.preventDefault(); // Needed to allow drop
  });

  item.addEventListener('drop', e => {
    e.preventDefault();
    if (dragged && dragged !== e.target) {
      // Swap background images
      const draggedBg = window.getComputedStyle(dragged).backgroundImage;
      const targetBg = window.getComputedStyle(e.target).backgroundImage;

      dragged.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;

      // Swap text content
      const tempText = dragged.textContent;
      dragged.textContent = e.target.textContent;
      e.target.textContent = tempText;
    }
  });
});
