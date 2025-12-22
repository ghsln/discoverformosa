const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const home = document.querySelector('.home');
let currentSlide = 0;
let slideInterval;

function sliderNav(manual) {
    clearInterval(slideInterval);
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    currentSlide = manual;
    startAutoSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderNav(currentSlide);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000); 
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

startAutoSlide();

home.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

home.addEventListener('mouseleave', () => {
    startAutoSlide();
});

new Swiper('.card-wrapper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const activitiesLink = document.querySelector(".activities-link");
    const actBox = document.querySelector(".act-box");
    const contactLink = document.querySelector(".contact-link");
    const conBox = document.querySelector(".con-box");
    const whereLink = document.querySelector(".where-link");
    const whereBox = document.querySelector(".where-box");
    const travelLink = document.querySelector(".travel-link");
    const travelBox = document.querySelector(".travel-box");
    const content1 = document.querySelector(".travel-content-1");
    const content2 = document.querySelector(".travel-content-2");
    const content3 = document.querySelector(".travel-content-3");
    const pill1 = document.querySelector(".pill-1");
    const pill2 = document.querySelector(".pill-2");
    const pill3 = document.querySelector(".pill-3");

    activitiesLink.addEventListener("mouseenter", () => {
        actBox.style.display = "block";
        conBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });

    activitiesLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!actBox.matches(":hover")) {
                actBox.style.display = "none";
            }
        }, 100);
    });

    actBox.addEventListener("mouseleave", () => {
        actBox.style.display = "none";
    });

    actBox.addEventListener("mouseenter", () => {
        actBox.style.display = "block";
        conBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });

    contactLink.addEventListener("mouseenter", () => {
        conBox.style.display = "block";
        actBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });

    contactLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!conBox.matches(":hover")) {
                conBox.style.display = "none";
            }
        }, 100);
    });

    conBox.addEventListener("mouseleave", () => {
        conBox.style.display = "none";
    });

    conBox.addEventListener("mouseenter", () => {
        conBox.style.display = "block";
        actBox.style.display = "none";
        whereBox.style.display = "none";
        travelBox.style.display = "none";
    });
    
    whereLink.addEventListener("mouseenter", () => {
        whereBox.style.display = "block";
        actBox.style.display = "none";
        conBox.style.display = "none";
        travelBox.style.display = "none";
    });

    whereLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!whereBox.matches(":hover")) {
                whereBox.style.display = "none";
            }
        }, 100);
    });

    whereBox.addEventListener("mouseleave", () => {
        whereBox.style.display = "none";
    });

    whereBox.addEventListener("mouseenter", () => {
        whereBox.style.display = "block";
        actBox.style.display = "none";
        conBox.style.display = "none";
        travelBox.style.display = "none";
    });

    function hideOtherMenus() {
        actBox.style.display = "none";
        conBox.style.display = "none";
        whereBox.style.display = "none";
    }

    function hideOtherMenus() {
        actBox.style.display = "none";
        conBox.style.display = "none";
        whereBox.style.display = "none";
    }

    function hideAllTravelContent() {
        content1.style.display = "none";
        content2.style.display = "none";
        content3.style.display = "none";
    }

    travelLink.addEventListener("mouseenter", () => {
        travelBox.style.display = "block";
        hideOtherMenus();
        hideAllTravelContent();     
        content1.style.display = "flex"; 
    });

    travelLink.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!travelBox.matches(":hover")) {
                travelBox.style.display = "none";
            }
        }, 100);
    });

    travelBox.addEventListener("mouseenter", () => {
        travelBox.style.display = "block";
        hideOtherMenus();
    });

    travelBox.addEventListener("mouseleave", () => {
        travelBox.style.display = "none";
    });

    pill1.addEventListener("mouseenter", () => {
        hideAllTravelContent();
        content1.style.display = "flex";
    });

    pill2.addEventListener("mouseenter", () => {
        hideAllTravelContent();
        content2.style.display = "flex";
    });

    pill3.addEventListener("mouseenter", () => {
        hideAllTravelContent();
        content3.style.display = "flex";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navItems = document.querySelector('.navigation-items');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('active');
            menuToggle.innerHTML = navItems.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    const navLinks = document.querySelectorAll('.navigation-items a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navItems.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
});

const defaultComments = [
    {name: "Alexa", text: "Where do you go in Taipei?"},
    {name: "Cheryl", text: "Is Xiao Long Bao good? Has anyone ever tried?"},
    {name: "Hubert", text: "Taipei 101 is really high."},
    {name: "David", text: "Kaohsiung is so serene, I want to go there again."},
    {name: "Clayton", text: "Night markets in Taiwan are the best."},
    {name: "Melinda", text: "It's very cold in winter, you should wear puffed jackets."},
];

function createCommentCard(name, text, imgSrc=null) {
    const card = document.createElement("div");
    card.className = "comment-card";

    let imgHTML = imgSrc ? `<img src="${imgSrc}" alt="uploaded image">` : "";

    card.innerHTML = `
        <div class="comment-header"><strong>${name}</strong></div>
        <div class="comment-body">${text}</div>
        ${imgHTML}
        <div class="comment-actions">
            <button class="like-btn">👍 Like</button>
            <button class="reply-btn">💬 Reply</button>
        </div>
        <div class="reply-box">
            <textarea placeholder="Write a reply..."></textarea>
            <button class="send-reply">Reply</button>
        </div>
        <div class="reply-list"></div>
    `;


    const likeBtn = card.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => {
        if(likeBtn.textContent.includes("Liked")){
            likeBtn.textContent = "👍 Like";
            likeBtn.style.color = "black";
        } else {
            likeBtn.textContent = "👍 Liked";
            likeBtn.style.color = "blue";
        }
    });


    const replyBtn = card.querySelector(".reply-btn");
    const replyBox = card.querySelector(".reply-box");
    replyBtn.addEventListener("click", () => {
        replyBox.style.display = replyBox.style.display === "flex" ? "none" : "flex";
    });


    const sendReplyBtn = card.querySelector(".send-reply");
    const replyList = card.querySelector(".reply-list");
    sendReplyBtn.addEventListener("click", () => {
        const replyText = replyBox.querySelector("textarea").value.trim();
        if(!replyText) return;

        const replyDiv = document.createElement("div");
        replyDiv.className = "reply-text";
        replyDiv.textContent = replyText;
        replyList.appendChild(replyDiv);
        replyBox.querySelector("textarea").value = "";
    });

    return card;
}


defaultComments.forEach(c => commentContainer.appendChild(createCommentCard(c.name, c.text)));


postBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const commentText = document.getElementById("commentText").value.trim();
    const fileInput = document.getElementById("commentImage");

    if(!username || !commentText){
        alert("Please enter your name and comment.");
        return;
    }

    if(fileInput.files && fileInput.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            commentContainer.prepend(createCommentCard(username, commentText, e.target.result));
        }
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        commentContainer.prepend(createCommentCard(username, commentText));
    }

    document.getElementById("username").value = "";
    document.getElementById("commentText").value = "";
    fileInput.value = "";
});