document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetID);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});