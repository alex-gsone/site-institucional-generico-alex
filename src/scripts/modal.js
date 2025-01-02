function handleModal() {
  const button1 = document.querySelector(".header_button");
  const button2 = document.querySelector(".faq_button");
  const modalContainer = document.querySelector(".modal");

  // Função que abre o modal
  function openModal() {
    modalContainer.showModal();
  }

  // Adiciona evento de clique aos botões para abrir o modal
  button1.addEventListener("click", openModal);
  button2.addEventListener("click", openModal);

  closeModal();
}

function closeModal() {
  const button = document.querySelector("#closeModal");
  const modalContainer = document.querySelector(".modal");

  // Função que fecha o modal
  button.addEventListener("click", () => {
    modalContainer.close();
  });
}

handleModal();
