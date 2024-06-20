
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".fa-bars");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("show-nav");
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Function to show a specific slide
    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        slidesContainer.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
    }

    // Function to go to the next slide
    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    // Function to go to the previous slide
    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    // Set up interval for automatic slide changes
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Add event listeners for navigation buttons
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
});

document.getElementById('prev').addEventListener('click', function() {
    document.getElementById('post-wrapper').scrollBy({
        left: -200, // Adjust to match your post width
        behavior: 'smooth'
    });
});

document.getElementById('next').addEventListener('click', function() {
    document.getElementById('post-wrapper').scrollBy({
        left: 200, // Adjust to match your post width
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    const posts = {
        1: {
            title: 'Post 1',
            image: '1.JPG',
            text: 'Lorema aihfs;fsvoshvspvsahvsvhspvv'
        },
        2: {
            title: 'Post 2',
            image: 'image2.jpg',
            text: 'This is the full content of Post 2.'
        },
        3: {
            title: 'Post 3',
            image: 'image3.jpg',
            text: 'This is the full content of Post 3.'
        },
        4: {
            title: 'Post 4',
            image: 'image4.jpg',
            text: 'This is the full content of Post 4.'
        },
        5: {
            title: 'Post 5',
            image: 'image5.jpg',
            text: 'This is the full content of Post 5.'
        }
    };

    const post = posts[postId];
    if (post) {
        document.getElementById('post-title').textContent = post.title;
        document.getElementById('post-image').src = post.image;
        document.getElementById('post-text').textContent = post.text;
    } else {
        document.getElementById('post-title').textContent = 'Post not found';
        document.getElementById('post-image').style.display = 'none';
        document.getElementById('post-text').textContent = 'The post you are looking for does not exist.';
    }
});
