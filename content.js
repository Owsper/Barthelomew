
// Function for bartholomew popup with fade in and fade out effects
function showBartholomew() {

    // Remove existing teddy if any
    if (document.getElementById("bartholomew")) {
        document.getElementById("bartholomew").remove();
    }

    // Create bartholomew element
    const bartholomew = document.createElement("div");
    bartholomew.id = "bartholomew";
    bartholomew.innerHTML = "🧸";

    // Display in the center of the screen
    document.body.appendChild(bartholomew);

    // Short delay
    setTimeout(function() {
        bartholomew.classList.add("show");
    }, 10);


    // Removes bartholomew after 5 seconds with fade out
    setTimeout(function() {

        bartholomew.style.transition = "all 0.8s ease";
        bartholomew.style.opacity = "0";
        bartholomew.style.transform = "translate(-50%, -50%) scale(0.6)";

        // Completely remove from page after fade out
        setTimeout(function() {
            bartholomew.remove();
        }, 800);

    }, 5000); 
}

// Calling function
showBartholomew();