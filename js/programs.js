// Program Filter
function filterPrograms() {
  const searchInput = document.getElementById("program-search");
  const ageFilter = document.getElementById("age-filter");
  const programItems = document.getElementsByClassName("program-item");
  
  const searchTerm = searchInput.value.toLowerCase();
  const ageValue = ageFilter.value;
  
  for (let i = 0; i < programItems.length; i++) {
    const item = programItems[i];
    const itemId = item.id;
    const itemText = item.textContent.toLowerCase();
    
    // Skip filtering if all is selected or if the current item matches the filter
    const ageMatch = ageValue === "all" || itemId === ageValue;
    const searchMatch = searchTerm === "" || itemText.includes(searchTerm);
    
    if (ageMatch && searchMatch) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}

// Initialize image modals
document.addEventListener("DOMContentLoaded", function() {
  // Handle program image clicks
  const thumbnails = document.querySelectorAll(".program-gallery-thumbs img");
  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function() {
      const mainImg = this.closest(".program-gallery").querySelector(".program-main-img img");
      mainImg.src = this.src;
    });
  });
});