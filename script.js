// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'flex';
        }
    });
}

// Counter Animation
const counters = document.querySelectorAll('.counter');
if (counters.length > 0) {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
}

// Country Card Click
const countryCards = document.querySelectorAll('.country-card');
if (countryCards.length > 0) {
    countryCards.forEach(card => {
        card.addEventListener('click', () => {
            const country = card.getAttribute('data-country');
            if (country) {
                sessionStorage.setItem('selectedCountry', country);
                window.location.href = 'scrapyards.html';
            }
        });
        
        const btn = card.querySelector('.btn-country');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const country = card.getAttribute('data-country');
                if (country) {
                    sessionStorage.setItem('selectedCountry', country);
                    window.location.href = 'scrapyards.html';
                }
            });
        }
    });
}

// Brand Card Click
const brandCards = document.querySelectorAll('.brand-card');
if (brandCards.length > 0) {
    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const brand = card.getAttribute('data-brand');
            if (brand) {
                sessionStorage.setItem('selectedBrand', brand);
                window.location.href = 'parts.html';
            }
        });
    });
}

// Search Functionality
const searchBtn = document.getElementById('searchBtn');
const brandInput = document.getElementById('brandSearch');
const partInput = document.getElementById('partSearch');
const countrySelect = document.getElementById('countrySelect');

if (searchBtn) {
    function performSearch() {
        const brand = brandInput ? brandInput.value.trim() : '';
        const part = partInput ? partInput.value.trim() : '';
        const country = countrySelect ? countrySelect.value : 'all';
        
        if (brand || part) {
            sessionStorage.setItem('searchQuery', JSON.stringify({ brand, part, country }));
            window.location.href = 'parts.html?search=true';
        } else {
            alert('Please enter a luxury car brand or part to search.');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    if (brandInput) {
        brandInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    }
    if (partInput) {
        partInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') performSearch(); });
    }
}

// Popular Search Links
const popularLinks = document.querySelectorAll('.popular-searches a');
popularLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const brand = link.getAttribute('data-brand');
        if (brandInput) brandInput.value = brand;
        if (searchBtn) searchBtn.click();
    });
});
// Form submission handlers
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

const listForm = document.getElementById('listForm');
if (listForm) {
    listForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your application! We will review it and contact you within 48 hours.');
        listForm.reset();
    });
}