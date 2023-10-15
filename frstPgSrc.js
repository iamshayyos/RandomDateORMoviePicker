  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    document.getElementById("select").addEventListener("change", function () {
       var selectedPage = this.value;
       if (selectedPage) {
          window.location.href = selectedPage;
       }
    });
 });