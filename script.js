//contact page
function send(){
    document.getElementById('contactForm').reset();
    alert("Thank you for reaching out! We'll get back to you soon.");
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        const links = document.querySelectorAll('nav ul li a');
    
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetUrl = this.getAttribute('href');
    
                document.body.classList.add('fade-out');
    
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 300);
            });
        });
    
        document.body.classList.add('fade-in');
    });
    