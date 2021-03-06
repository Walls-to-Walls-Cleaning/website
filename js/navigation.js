// Fixed Nav Menu on Scroll
window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('.site-header').classList.add('fixed');
  } else {
    document.querySelector('.site-header').classList.remove('fixed');
  }
});

// Main nav toggler for mobile devices
document.querySelector('.responsive-menu-icon').addEventListener('click', function(e) {
  var navigation = document.querySelector('.menu');

  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = navigation.scrollHeight;

  if (navigation.getAttribute('data-collapsed') === 'true') {
    // have the element transition to the height of its inner content
    navigation.style.height = sectionHeight + 'px';

    // mark the section as "not collapsed"
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

    // mark the section as "collapsed"
    navigation.setAttribute('data-collapsed', 'true');

    // mark Aria toggle button expanded as false
    document.querySelector('.responsive-menu-icon').setAttribute('aria-expanded', 'false');
  }
});


// Sub-menu toggler (desktop)
// Sub-menu toggler (desktop)
document.querySelectorAll('.sub-menu-toggle').forEach(function(toggler) {
  toggler.addEventListener('click', function(event) {

    // In this repo the toggler chevron is before the `a` link.
    // It requires the chaining of `nextElementSibling` to get the sub-menu
    var subNavigation = toggler.nextElementSibling.nextElementSibling;

    if (subNavigation.getAttribute('data-collapsed') === 'true') {
      // Add class expanded to .sub-menu
      subNavigation.className += ' expanded';

      // Add class expanded to .sub-menu-toggle
      toggler.className += ' expanded';

      // mark Aria toggle button expanded as true
      toggler.setAttribute('aria-expanded', 'true');

      // set data-collapsed to false
      subNavigation.setAttribute('data-collapsed', 'false');

    } else {

      // Remove expanded class from .sub-menu
      subNavigation.classList.remove('expanded');

      // Remove expanded class from .sub-menu-toggler
      toggler.classList.remove('expanded');

      // mark the section as collapsed
      subNavigation.setAttribute('data-collapsed', 'true');

      // mark Aria toggle button expanded as false
      toggler.setAttribute('aria-expanded', 'false');
    }
  });
});
