
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => { // IntersectionObserver observes the viewport for intersections with elements
        entries.forEach(entry => { // foreach entry (html element that is observed) call the function on it
            if (entry.isIntersecting) { // isIntersecting checks for intersection with viewport
                entry.target.classList.add('is-visible'); // adds class to change styling
                observer.unobserve(entry.target); // makes sure the animation wont happen again if the element goes out of viewport
            }
        });
    }, {
        threshold: 0.5 // sets the % of element it takes to trigger function
    });

    // tells observer to start observing each of the elements
    elements.forEach(element => {
        observer.observe(element);
    });

    // gets toggle button
    const toggleButton = document.getElementById('theme-toggle');

    // gets current theme from local storage
    const currentTheme = localStorage.getItem('theme');

    // applies dark mode if it is selected by adding the css class to the body element
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // listens for click
    toggleButton.addEventListener('click', () => {
        // sets theme to dark mode on click
        document.body.classList.toggle('dark-mode');
        let theme = 'light';

        // sets the current theme and puts the theme in local storage
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
});


