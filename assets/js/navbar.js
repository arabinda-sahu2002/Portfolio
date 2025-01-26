document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    fetch("templates/header.html")
      .then((response) => response.text())
      .then((data) => {
        document.body.insertAdjacentHTML("afterbegin", data);
        highlightCurrentPage();
      });
  
    // Load Footer
    fetch("templates/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.body.insertAdjacentHTML("beforeend", data);
      });
  
    // Highlight the current page in navigation
    function highlightCurrentPage() {
      const currentPage = window.location.pathname.split("/").pop().split(".")[0];
      const links = document.querySelectorAll(".navbar a");
      links.forEach((link) => {
        if (link.dataset.page === currentPage) {
          link.classList.add("active");
        }
      });
    }
  });  