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
});

document.querySelectorAll('.dropzone').forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
  });

  zone.addEventListener('drop', e => {
    e.preventDefault();
    if (dragged && zone !== dragged.parentElement) {
      zone.appendChild(dragged);
    }
  });
});
