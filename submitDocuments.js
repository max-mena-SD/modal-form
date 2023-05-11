const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

const newDocument = document.getElementById("new-doc");
const existDocument = document.getElementById("existing-doc");

// buttons actions to manage the dialog window opening and closing

function start_hidden() {
  document.getElementById("modal-important").style.display = "none";
  document.getElementById("modal-urgent").style.display = "none";
  document.getElementById("modal-domain").style.display = "none";

  document.getElementById("modal-checklist").style.display = "none";
  document.getElementById("modal-webpage").style.display = "none";
  document.getElementById("modal-link").style.display = "none";
  document.getElementById("modal-file").style.display = "none";
  document.getElementById("modal-comments").style.display = "none";
}

openButton.addEventListener("click", () => {
  start_hidden();
  modal.showModal();
});
closeButton.addEventListener("click", () => {
  modal.close();
});

// buttons actions to manage which piece of code shows up or hides

function enable_if_document(radio_document) {
  if (radio_document.checked) {
  } else {
    alert("Error in the selection of the radio button");
  }
}

newDocument.addEventListener("click", () => {
  enable_if_document(newDocument);
});

existDocument.addEventListener("click", () => {
  enable_if_document(existDocument);
});
