document.getElementById(".more").addEventListener("click", function() {
    var morepage = document.getElementById("morepage");
    
    if (morepage.style.display === "none") {
        morepage.style.display = "block"; 
        this.innerText = "Show Less";
    } else {
        morepage.style.display = "none"; 
        this.innerText = "Learn More";    }
});
