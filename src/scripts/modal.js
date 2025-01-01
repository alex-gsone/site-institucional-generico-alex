
function handleModal() {
    const button = document.querySelector(".header_button");
    const modalContainer = document.querySelector(".modal");
  
    button.addEventListener("click", () => {
      modalContainer.showModal();
  
      closeModal();
    });
  }
  
  function closeModal() {
    const button = document.querySelector("#closeModal");
    const modalContainer = document.querySelector(".modal");
  
    button.addEventListener("click", () => {
      modalContainer.close();
    });
  }
  
  handleModal(); 