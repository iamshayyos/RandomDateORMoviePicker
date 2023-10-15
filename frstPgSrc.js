const destinationSelect = document.getElementById("select");
const redirectButton = document.getElementById("redirectButton");

 // Add an event listener to the button
 redirectButton.addEventListener("click", function() {
    // Get the selected option's value
    const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
    const selectedValue = selectedOption.value;

    // Redirect to the selected URL
    if (selectedValue) {
        window.location.href = selectedValue;
    }
});