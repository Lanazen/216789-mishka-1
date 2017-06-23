var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");
var link = document.querySelector(".modal-cart");
      link.addEventListener("click", function (event) {
        event.preventDefault();
        overlay.classList.add("overlay--show");
        modal.classList.add("modal--show");
      });
      window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
          if (modal.classList.contains("modal--show")) {
            modal.classList.remove("modal--show");
            overlay.classList.remove("overlay--show");
          }
        }
      });
