function initializeNavigation() {
    let toggleButtons = document.querySelectorAll('.dropdown-toggle');
    let dropdownMenus = document.querySelectorAll('.dropdown-menu');

    toggleButtons.forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function (event) {
            let parentLi = dropdownToggle.parentElement.parentElement;
            let dropdownMenu = parentLi.querySelector('.dropdown-menu');

            // Close all dropdown menus and remove the open class from their corresponding toggle
            toggleButtons.forEach(toggle => {
                if (toggle !== dropdownToggle) {
                    toggle.classList.remove('open');
                    let parentLi = toggle.parentElement.parentElement;
                    let otherDropdownMenu = parentLi.querySelector('.dropdown-menu');
                    otherDropdownMenu.classList.remove('open');
                }
            });

            // Toggle the open class for the clicked dropdown-toggle and dropdown-menu
            dropdownToggle.classList.toggle('open');
            dropdownMenu.classList.toggle('open');
        });
    });

    // Close dropdown menus when clicking outside of the navigation
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target)) {
            dropdownMenus.forEach(menu => {
                menu.classList.remove('open');
            });

            toggleButtons.forEach(toggle => {
                toggle.classList.remove('open');
            });
        }
    });

    let nav = document.querySelector('.navigation');
    let Toggle = document.querySelector('.toggle');
    let Overlay = document.querySelector('.overlay');
    let isNavOpen = false; // Variable to track the toggle state
    let closeTimeout; // Variable to store the timeout

    Toggle.addEventListener('click', function (event) {
        isNavOpen = !isNavOpen; // Toggle the state

        nav.classList.toggle('open');
        Toggle.classList.toggle('open');
        Overlay.classList.toggle('open');
        toggleButtons.forEach(dropdownToggle => {
            dropdownToggle.classList.remove('open');
        });
        dropdownMenus.forEach(dropdownToggle => {
            dropdownToggle.classList.remove('open');
        });

        // Clear the previous timeout if it exists
        clearTimeout(closeTimeout);

        // Set overflow to hidden immediately when closing
        if (!isNavOpen) {
            nav.style.overflow = 'hidden';
        } else {
            // Add a delay of 400 milliseconds before setting overflow to visible when opening
            closeTimeout = setTimeout(function () {
                nav.style.overflow = 'visible';
            }, 400);
        }
    });
}

// Call the function to initialize the navigation when the page loads
window.addEventListener('load', initializeNavigation);

