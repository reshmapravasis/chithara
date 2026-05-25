document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('header.html?v=' + new Date().getTime())
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Set active class based on current URL
            let currentPath = window.location.pathname;
            let page = currentPath.split("/").pop();
            
            if (page === '' || page === 'index.html') {
                document.getElementById('nav-home')?.classList.add('active');
            } else if (page === 'about.html') {
                document.getElementById('nav-about')?.classList.add('active');
            } else if (page === 'services.html') {
                document.getElementById('nav-services')?.classList.add('active');
            } else if (page === 'gallery.html') {
                document.getElementById('nav-gallery')?.classList.add('active');
            } else if (page === 'contact.html') {
                document.getElementById('nav-contact')?.classList.add('active');
            }

            // Mobile menu event listener
            document.getElementById('mobile-menu').addEventListener('click', function() {
                document.querySelector('.nav-links').classList.toggle('active');
            });
        });

    // Load Footer
    fetch('footer.html?v=' + new Date().getTime())
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
