const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const modalAbout = document.querySelector(".modal-about-bg");
const modalContact = document.querySelector(".modal-contact-bg");
const modalAboutClose = document.querySelector(".modal-about-close");
const modalContactClose = document.querySelector(".modal-contact-close");

about.addEventListener("click", () => {
  modalAbout.classList.add("modal-bg-active");
});
contact.addEventListener("click", () => {
  modalContact.classList.add("modal-bg-active");
});
modalAboutClose.addEventListener("click", () => {
  modalAbout.classList.remove("modal-bg-active");
});
modalContactClose.addEventListener("click", () => {
  modalContact.classList.remove("modal-bg-active");
});
