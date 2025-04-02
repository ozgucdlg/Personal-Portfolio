// Certificate data
const certificates = [
    {
        title: "Learning Kubernetes",
        issuer: "LinkedIn",
        date: "2025",
        image: "/assets/kubernetes.png",
        link: "https://www.linkedin.com/learning/certificates/be7415a19fb59626569f745bc7a0ede8d43d5a30e242ee0db78c10a0d96e6e77"
    },
    {
        title: "Cloud Goverance Concepts: Tolls and Requirements",
        issuer: "Microsoft",
        date: "2024",
        image: "/assets/microsoft.png",
        link: "https://www.linkedin.com/learning/certificates/3b24f3b0586ae0f75db6417478f3879f0889e5d426761611cef004037dd4d829?trk=share_certificate"
    },
    {
        title: "Git Essential Training",
        issuer: "LinkedIn",
        date: "2025",
        image: "/assets/git.png",
        link: "https://www.linkedin.com/learning/certificates/4087d73656e6c856375c806a761d3aaa94f7c41052806f79e95801a6971cf3ca"
    },
    {
        title: "Microsoft Copilot: The Art of Prompt Writing",
        issuer: "LinkedIn",
        date: "February/2025",
        image: "/assets/copilot.png",
        link: "https://www.linkedin.com/learning/certificates/71e9ea8a2bed8861d0c6950f7c77d0a4fa01aa0ff0a8f2ec451ff88a06dc9175"
    },
    {
        title: "Cert Prep: PMI Agile Certifies Practitioner (PMI-ACP)®",
        issuer: "LinkedIn",
        date: "March/2025",
        image: "/assets/pmi.jpg",
        link: "https://www.linkedin.com/learning/certificates/3dd757d726d45cd702ca274b32eb3997c250c3974ebb99b8cfee90594e64f1e2?trk=share_certificate"
    },
   
    // Add more certificates as needed
];

// Create and append certificate cards
function createCertificateCards() {
    const container = document.getElementById('certificatesContainer');
    
    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        
        card.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
            <div class="certificate-info">
                <h3 class="certificate-title">${cert.title}</h3>
                <p class="certificate-issuer">Issued by ${cert.issuer}</p>
                <p class="certificate-date">Earned: ${cert.date}</p>
                <a href="${cert.link}" target="_blank" class="certificate-link">Verify Certificate</a>
            </div>
        `;

        // Add click event for modal
        card.querySelector('.certificate-image').addEventListener('click', () => {
            openModal(cert.image, cert.title);
        });

        container.appendChild(card);
    });
}

// Modal functionality
function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal when clicking the close button or outside the modal
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    return modal;
}

function openModal(imageSrc, imageAlt) {
    const modal = document.querySelector('.modal') || createModal();
    const modalImage = modal.querySelector('.modal-image');
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.style.display = 'block';
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createCertificateCards();
}); 