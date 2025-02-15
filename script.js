// This JavaScript file can be used for extra effects or interactions if needed
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  
  // Adding a focus effect when the user clicks the search input field
  searchInput.addEventListener('focus', function() {
    this.style.borderColor = '#00bcd4';
    this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.6)';
  });

  // Resetting the focus effect when the input field loses focus
  searchInput.addEventListener('blur', function() {
    this.style.borderColor = '#fff';
    this.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.3)';
  });
});
