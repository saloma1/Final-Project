const section = document.querySelector('.lazy-section');

const observer = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting) {
    fetch('partners.html')
        .then(res => res.text())
        .then(html => section.innerHTML = html);
}
});

observer.observe(section);
section.classList.add('lazy-loaded');