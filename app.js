const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
        perspective(1000px)
        rotateX(${-(y - rect.height / 2) / 15}deg)
        rotateY(${(x - rect.width / 2) / 15}deg)
        translateY(-10px)
      `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "none";
  });
});

const scrollNotice = document.getElementById("scrollNotice");

function showNotification() {
  scrollNotice.classList.add("show");
  setTimeout(() => {
    scrollNotice.classList.remove("show");
  }, 5000);
}

setInterval(() => {
  if (window.scrollY < 100) {
    showNotification();
  }
}, 4500);

//Color background social links active//

const socialLinks = document.querySelector(".social-links");
const igLink = document.querySelector(".social-ig a");
const githubLink = document.querySelector(".social-github a");
const nglLink = document.querySelector(".social-ngl a");

igLink.addEventListener("mouseover", () => {
  socialLinks.style.transition = "background 0.5s ease";
  socialLinks.style.background =
    "linear-gradient(45deg, #fd5949, #d6249f, #285aeb)";
});
igLink.addEventListener("mouseout", () => {
  socialLinks.style.transition = "background 0.5s ease";
  socialLinks.style.background = "rgb(238, 230, 230)";
});

githubLink.addEventListener("mouseover", () => {
  socialLinks.style.transition = "background 0.5s ease";
  socialLinks.style.background = "#181717";
});
githubLink.addEventListener("mouseout", () => {
  socialLinks.style.transition = "background 0.5s ease";
  socialLinks.style.background = "rgb(238, 230, 230)";
});

nglLink.addEventListener("mouseover", () => {
  socialLinks.style.transition = "background 0.5s ease";
  socialLinks.style.background = "linear-gradient(45deg, #fd7600, #e10707)";
});
nglLink.addEventListener("mouseout", () => {
  socialLinks.style.transition = "background 0.5s ease";
  socialLinks.style.background = "rgb(238, 230, 230)";
});

//delaylink//
[igLink, githubLink, nglLink].forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetURL = link.getAttribute("href");

    link.style.transform = "scale(1.3)";
    link.style.transition = "transform 0.3s ease";

    setTimeout(() => {
      window.location.href = targetURL;
    }, 1050);
  });
});
