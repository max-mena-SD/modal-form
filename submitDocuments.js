const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

const newDocument = document.getElementById("new-doc");
const existDocument = document.getElementById("existing-doc");

const urgentYes = document.getElementById("urgent-yes");
const urgentNo = document.getElementById("urgent-no");

const webpageYes = document.getElementById("webpage-yes");
const webpageNo = document.getElementById("webpage-no");

// buttons actions to manage the dialog window opening and closing

function start_hidden() {
  document.getElementById("modal-important").style.display = "none";
  document.getElementById("modal-urgent").style.display = "none";
  document.getElementById("modal-SOP").style.display = "none";
  document.getElementById("modal-domain").style.display = "none";

  document.getElementById("modal-checklist").style.display = "none";
  document.getElementById("modal-changes").style.display = "none";
  document.getElementById("modal-enter").style.display = "none";
  document.getElementById("modal-webpage").style.display = "none";
  document.getElementById("modal-link").style.display = "none";
  document.getElementById("modal-important-exist").style.display = "none";
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

urgentYes.addEventListener("click", () => {
  showStep2NewDoc();
});
urgentNo.addEventListener("click", () => {
  showStep2NewDoc();
});

webpageYes.addEventListener("click", () => {
  document.getElementById("modal-link").style.display = "block";
  showStep3NewDoc();
});
webpageNo.addEventListener("click", () => {
  document.getElementById("modal-link").style.display = "none";
  showStep3NewDoc();
});

function showStep2NewDoc() {
  document.getElementById("modal-domain").style.display = "block";
  document.getElementById("modal-checklist").style.display = "block";
  document.getElementById("modal-webpage").style.display = "block";
}

function showStep3NewDoc() {
  document.getElementById("modal-file").style.display = "block";
  document.getElementById("modal-comments").style.display = "block";
}

// buttons actions to manage which piece of code shows up or hides

function enable_if_document(radio_document) {
  if (radio_document.value == "new") {
    document.getElementById("modal-important").style.display = "block";
    document.getElementById("modal-urgent").style.display = "block";
  }
  if (radio_document.value == "existing") {
    document.getElementById("modal-urgent").style.display = "block";
    document.getElementById("modal-SOP").style.display = "block";
    document.getElementById("modal-changes").style.display = "block";
    document.getElementById("modal-enter").style.display = "block";
    document.getElementById("modal-important-exist").style.display = "block";
    document.getElementById("modal-file").style.display = "block";
    document.getElementById("modal-comments").style.display = "block";
  }
}

newDocument.addEventListener("click", () => {
  start_hidden();
  enable_if_document(newDocument);
});

existDocument.addEventListener("click", () => {
  start_hidden();
  enable_if_document(existDocument);
});
