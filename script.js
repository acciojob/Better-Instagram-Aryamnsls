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
    e.preventDefault(); // Allow drop
  });

  item.addEventListener('drop', e => {
    e.preventDefault();
    if (dragged && dragged !== e.target) {
      // Swap background images
      const temp = dragged.style.backgroundImage;
      dragged.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;

      // Swap text
      const tempText = dragged.textContent;
      dragged.textContent = e.target.textContent;
      e.target.textContent = tempText;
    }
  });
});
