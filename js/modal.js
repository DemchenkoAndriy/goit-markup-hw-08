(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal_open]"),
    closeModalBtn: document.querySelector("[data-modal_close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
