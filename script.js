const toggleButton = document.getElementById("langToggle");

// Set initial language based on localStorage or default to "dv"
document.documentElement.lang = localStorage.getItem("lang") || "dv";
toggleButton.textContent = document.documentElement.lang === "dv" ? "Switch to English" : "ދިވެހިބަސް އަކުން";

// Add event listener for language toggle
toggleButton.addEventListener("click", () => {
    const newLang = document.documentElement.lang === "dv" ? "en" : "dv";
    document.documentElement.lang = newLang;
    localStorage.setItem("lang", newLang); // Save preference to localStorage
    toggleButton.textContent = newLang === "dv" ? "Switch to English" : "ދިވެހިބަސް އަކުން"; // Update button text
});