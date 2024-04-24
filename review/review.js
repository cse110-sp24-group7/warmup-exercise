document.addEventListener('DOMContentLoaded', () => {
    const reviewContainers = document.querySelectorAll('.review-container');
  
    reviewContainers.forEach(container => {
      const score = parseInt(container.getAttribute('emotion-score'), 10);
      const stars = container.querySelectorAll('.star');
  
      // Loop through each star and color it yellow if it's less than or equal to the score
      stars.forEach((star, index) => {
        if (index < score) {
          star.classList.add('yellow');
        }
      });
    });
    
    // Animate Button
    const loadReviewsBtn = document.getElementById('loadReviewsBtn');
    const reviewsWrapper = document.querySelector('.reviews-wrapper');
    loadReviewsBtn.addEventListener('click', () => {
        // Add the class that changes the opacity and position
        reviewsWrapper.classList.add('reviews-visible');
    });
});