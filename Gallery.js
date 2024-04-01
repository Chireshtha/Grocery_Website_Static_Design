// Get all filter buttons
var filterButtons = document.querySelectorAll('.list');

// Get all gallery items
var items = document.querySelectorAll('.itembox');

// Add click event listeners to filter buttons
filterButtons.forEach(function(button) {
  button.addEventListener('click', filterGallery);
});

// Filter gallery
function filterGallery(event) {
  // Remove 'active' class from all filter buttons
  filterButtons.forEach(function(button) {
    button.classList.remove('active');
  });

  // Add 'active' class to the clicked filter button
  event.target.classList.add('active');

  // Get the category from the clicked filter button
  var category = event.target.getAttribute('data-filter');
  
  // Loop through all items
  items.forEach(function(item) {
    // If the category is 'All' or the item has the specified category, display the item
    if (category === 'All' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      // If the item does not have the specified category, hide the item
      item.style.display = 'none';
    }
  });
}
