document.getElementById('career-apply-button').addEventListener('click', function() {
  var careerForm = document.getElementById('career-form');

  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = careerForm.scrollHeight;

  if (careerForm.getAttribute('data-collapsed') === 'true') {
    // have the element transition to the height of its inner content
    careerForm.style.height = sectionHeight + 'px';

    // mark the section as "not collapsed"
    careerForm.setAttribute('data-collapsed', 'false');

    // mark Aria toggle button expanded as true
    document.querySelector('.career-apply-button').setAttribute('aria-expanded', 'true');

    // set data-collapsed to false
    careerForm.setAttribute('data-collapsed', 'false');

  } else {

    // temporarily disable all css transitions
    var elementTransition = careerForm.style.transition;
    careerForm.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      careerForm.style.height = sectionHeight + 'px';
      careerForm.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        careerForm.style.height = 0 + 'px';
      });
    });

    // mark the section as "collapsed"
    careerForm.setAttribute('data-collapsed', 'true');

    // mark Aria toggle button expanded as false
    document.querySelector('.career-apply-button').setAttribute('aria-expanded', 'false');
  }
});
