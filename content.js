
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



    // Makes Barthelomew shake when clicked

        bartholomew.addEventListener("click", function() {
        bartholomew.classList.remove("shake");
        void bartholomew.offsetWidth;       
        bartholomew.classList.add("shake");
    });

    // Auto disappear after 5 seconds

    setTimeout(function() {
        if (document.getElementById("bartholomew")) {
            bartholomew.style.transition = "all 0.9s ease";
            bartholomew.style.opacity = "0";
            bartholomew.style.transform = "translate(-50%, -50%) scale(0.7)";

            
            //Removes Barthelmoew if isnt clicked
            
            setTimeout(function() {
                bartholomew.remove();
            }, 900);
        }
    }, 5000);
}

//Calling function

showBartholomew();
  