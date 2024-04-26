document.querySelectorAll('[name="sentiment"]').forEach((button) => {
  button.addEventListener("mouseover", function () {
    switch (this.value) {
      case "1":
        // pastel red
        document.body.style.backgroundColor = "#FFC0CB";
        break;
      case "2":
        // pastel orange
        document.body.style.backgroundColor = "#FFA07A";
        break;
      case "3":
        // pastel yellow
        document.body.style.backgroundColor = "#FFD700";
        break;
      case "4":
        // pastel green
        document.body.style.backgroundColor = "#90EE90";
        break;
      case "5":
        // pastel blue
        document.body.style.backgroundColor = "#87CEEB";
        break;
    }
  });
  // default color when not hovering
  button.addEventListener("mouseout", function () {
    document.body.style.backgroundColor = "";
  });
});
