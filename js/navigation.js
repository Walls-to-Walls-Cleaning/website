document.querySelector('.responsive-menu-icon').addEventListener('click', function(e) {
  var navigation = document.querySelector('.menu');

  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = navigation.scrollHeight;

  if(navigation.getAttribute('data-collapsed') === 'true') {
    // have the element transition to the height of its inner content
    navigation.style.height = sectionHeight + 'px';

    // mark the section as "currently not collapsed"
    navigation.setAttribute('data-collapsed', 'false');

    // mark Aria toggle button expanded as true
    document.querySelector('.responsive-menu-icon').setAttribute('aria-expanded', 'true');

    // set data-collapsed to false
    navigation.setAttribute('data-collapsed', 'false');
  } else {
    // temporarily disable all css transitions
    var elementTransition = navigation.style.transition;
    navigation.style.transition = '';

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      navigation.style.height = sectionHeight + 'px';
      navigation.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        navigation.style.height = 0 + 'px';
      });
    });

    // mark the section as "currently collapsed"
    navigation.setAttribute('data-collapsed', 'true');

    // mark Aria toggle button expanded as false
    document.querySelector('.responsive-menu-icon').setAttribute('aria-expanded', 'false');
  }
});
