
function showBartholomew() {

    // Checks for existing Bartholomew and removes it to prevent duplicates

    if (document.getElementById("bartholomew")) {
        document.getElementById("bartholomew").remove();
    }

    let clickCount = 0;

    // Create Bartholomew element

    const bartholomew = document.createElement("div");
    bartholomew.id = "bartholomew";
    bartholomew.innerHTML = "🧸";

    document.body.appendChild(bartholomew);

    // Appear with fade-in
    setTimeout(function() {
        bartholomew.classList.add("show");
    }, 10);

    // Single click listener

    bartholomew.addEventListener("click", function() {
        
        clickCount++;
        console.log("Clicked " + clickCount);

        // If clicked 4 or more times → Explode
        if (clickCount >= 4) {

            console.log("Explode!");
            bartholomew.classList.add("explode");
            bartholomew.style.transition = "all 0.9s ease";
            bartholomew.style.opacity = "0";
            bartholomew.style.transform = "translate(-50%, -50%) scale(1.7)";

            // Remove element after explosion animation
            setTimeout(function() {
                bartholomew.remove();
            }, 800);

            return;                    
        }

        // Normal clicks -> Shake
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

            setTimeout(function() {
                bartholomew.remove();
            }, 900);
        }
    }, 5000);
}

// Call function
showBartholomew();