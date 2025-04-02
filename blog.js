// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "How to use Postman more effective",
        excerpt: "In this article, I am going to show how to use Postman and we will look at a quick view of CRUD API endpoint usage.",
        category: "programming",
        date: "2023-08-06",
        image: "/assets/postman.jpg",
        readTime: "5 min read"
    },
    // Add more blog posts as needed
];

// Function to create blog post cards
function createBlogCard(post) {
    return `
        <div class="col-12 col-md-6 col-lg-4 blog-post" data-category="${post.category}">
            <div class="card blog-card">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <span class="badge bg-primary category-badge">${post.category}</span>
                <div class="card-body">
                   <a href="https://medium.com/@ozgucdalga/how-to-use-postman-more-effective-1a031d7a96d5"> 
                   <h5 class="card-title">${post.title}</h5>
                   </a>
                    <p class="card-text">${post.excerpt}</p>
                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                    <small class="text-muted">${post.date}</small>
                    <small class="text-muted">${post.readTime}</small>
                </div>
            </div>
        </div>
    `;
}

// Function to render blog posts
function renderBlogPosts(posts) {
    const blogPostsContainer = document.getElementById('blogPosts');
    blogPostsContainer.innerHTML = posts.map(post => createBlogCard(post)).join('');
}

// Filter posts by category
function filterPosts(category) {
    const filteredPosts = category === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === category);
    renderBlogPosts(filteredPosts);
}

// Search posts
function searchPosts(searchTerm) {
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderBlogPosts(filteredPosts);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    renderBlogPosts(blogPosts);

    // Category filter buttons
    const filterButtons = document.querySelectorAll('[data-category]');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            e.target.classList.add('active');
            // Filter posts
            filterPosts(e.target.dataset.category);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchPosts(e.target.value);
    });
}); 