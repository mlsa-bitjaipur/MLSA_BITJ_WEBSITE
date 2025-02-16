const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const cursor = document.querySelector(".cursor1");

document.addEventListener("mousemove", (event) => {
  cursor.style.left = event.x + "px";
  cursor.style.top = event.y + "px";
});

gsap.to(".navBar", {
  y: -100,
  duration: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".page2",
    endTrigger: ".page5",
    start: "top top",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".page2Div", {
  y: -100,
  scale: 0.8,
  borderRadius: "50px",
  scrollTrigger: {
    trigger: ".page2",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.to(".page1scaleInc", {
  scale: 1.2,
  scrollTrigger: {
    trigger: ".page2",
    end: "top 30%",
    scrub: 2,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const cursor = document.getElementById("cursor");

  tabs.forEach((tab) => {
    tab.addEventListener("mouseenter", () => {
      const rect = tab.getBoundingClientRect();
      const parentRect = tab.parentElement.getBoundingClientRect();

      cursor.style.width = `${rect.width}px`;
      cursor.style.left = `${rect.left - parentRect.left}px`;
      cursor.style.opacity = "1";
    });
  });

  document.getElementById("tabs").addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });
});

Shery.mouseFollower({
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.textAnimate(".text-target", {
  style: 2,
  y: 10,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.makeMagnet(".magnet-target", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = document.querySelector(".mySwiper");

  Object.assign(swiper, {
    slidesPerView: 3,
    breakpoints: {
      768: { slidesPerView: 3 },
      480: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
  });

  swiper.initialize();
});

const PROJECTS = document.querySelectorAll(".PROJECTS");
const cursor1 = document.querySelector(".cursor1");
PROJECTS.forEach((element) => {
  const image = element.getAttribute("data-image");
  element.addEventListener("mouseenter", () => {
    cursor1.style.height = "40px";
    cursor1.style.width = "40px";
    cursor1.style.borderRadius = "0";
    cursor1.style.backgroundImage = `url(${image})`;
    cursor1.style.mixBlendMode = "normal";
    cursor1.style.backgroundImage;
  });
  element.addEventListener("mouseleave", () => {
    cursor1.style.height = "30px";
    cursor1.style.width = "30px";
    cursor1.style.borderRadius = "50%";
    cursor1.style.backgroundImage = ``;
    cursor1.style.mixBlendMode = "difference";
  });
});

handleCloseButtonclick = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "none";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "initial";
};

handlesidebarButton = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "initial";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "none";
};

if (window.innerWidth > 600) {
  Shery.mouseFollower({
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

const profiles = [
  {
    name: "Manalika Agarwal",
    img: "./Public/pfp's/Manalika Agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/manalika-agarwal-139b4b236/",
    instagram: "https://www.instagram.com/manalika__/",
    github: "https://github.com/manalikaagarwal/manalikaagarwal",
  },
  {
    name: "Manisha Parwani",
    img: "./Public/pfp's/manisha parwani.jpg",
    linkedin: "https://linkedin.com/in/manisha-parwani-223453284",
    instagram:
      "https://www.instagram.com/manishaparwanii?igsh=MTM4cDkycDA2amx5MA==",
    github: "https://github.com/manisha160505",
  },
  {
    name: "Aariya Mishra",
    img: "./Public/pfp's/aariya mishra.jpg",
    linkedin: "https://www.linkedin.com/in/aariya-mishra-0ba301294/",
    instagram: "",
    github: "https://github.com/Aariya6",
  },
  {
    name: "Daksh Gupta",
    img: "./Public/pfp's/daksh gupta.jpg",
    linkedin: "https://www.linkedin.com/in/dg-guptadaksh/",
    instagram: "https://www.instagram.com/dg_guptadaksh/",
    github: "https://github.com/dg-guptadaksh",
  },
  {
    name: "Apoorva Singh",
    img: "./Public/pfp's/apoorva singh.jpg",
    linkedin: "https://www.linkedin.com/in/apoorva-singh-ab8113292/",
    instagram: "https://www.instagram.com/apoorvasingh__04/",
    github: "https://github.com/Apoorva0004",
  },
  {
    name: "Astitva Savarn",
    img: "./Public/pfp's/astitva savarn.jpg",
    linkedin: "https://www.linkedin.com/in/astitva-savarn-340251233/",
    instagram: "https://www.instagram.com/astitvasavarn/",
    github: "",
  },
  {
    name: "Aditya Agarwal",
    img: "./Public/pfp's/aditya agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/aditya-agarwal-652859269/",
    instagram: "https://www.instagram.com/aaditya_agg/",
    github: "https://github.com/aditya1202p",
  },
  {
    name: "Priyanshu Raj",
    img: "./Public/pfp's/priyanshu raj.jpg",
    linkedin: "https://www.linkedin.com/in/priyanshu-raj-89608b291/",
    instagram: "https://www.instagram.com/mr_.priyanshu01/",
    github: "https://github.com/Priyanshu01raj01",
  },
  {
    name: "Shubh Gupta",
    img: "./Public/pfp's/shubh gupta.jpg",
    linkedin: "https://www.linkedin.com/in/shubh-gupta-084989274/",
    instagram: "https://www.instagram.com/shubhgupta219/",
    github: "https://github.com/shubhGupta62",
  },
  {
    name: "Yatharth Kaushik",
    img: "./Public/pfp's/yatharth kaushik.jpg",
    linkedin: "https://www.linkedin.com/in/yatharth-kaushik-0633a4290/",
    instagram: "https://www.instagram.com/k.yatharth.k/",
    github: "https://github.com/Yatharth4005",
  },
  {
    name: "Anisha Agarwal",
    img: "./Public/pfp's/anisha agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/anisha-agarwal-100b642a7/",
    instagram: "https://www.instagram.com/anisha_agarwal17/",
    github: "",
  },
  {
    name: "Harshwardhan Singh Kumawat",
    img: "./Public/pfp's/harshwardhan singh.jpg",
    linkedin:
      "https://www.linkedin.com/in/harshwardhan-singh-kumawat-414744311/",
    instagram: "https://www.instagram.com/harshhwardhan__/",
    github: "https://github.com/Harshwrdhn",
  },
  {
    name: "Kanishk Upadhyay",
    img: "./Public/pfp's/kanishk upadhyay.jpg",
    linkedin: "https://www.linkedin.com/in/kanishk-upadhyay-9a665628a/",
    instagram: "https://www.instagram.com/_kanishk_upadhyay/",
    github: "",
  },
  {
    name: "Manasvi Singh",
    img: "./Public/pfp's/manasvi singh.jpg",
    linkedin: "https://www.linkedin.com/in/manasvi-singh-97b509287/",
    instagram: "https://www.instagram.com/yours_vanya",
    github: "https://github.com/Manasvisingh12",
  },
];

const swiperContainer = document.querySelector(".mySwiper");

profiles.forEach((profile) => {
  const slide = document.createElement("swiper-slide");
  slide.classList.add("relative");
  slide.innerHTML = `
    <img src="${profile.img}" alt="${
    profile.name
  }" loading="lazy" class="PROJECTS swiper-lazy" />
    <div class="absolute bottom-0 right-0 left-0 z-50 h-[7vw] max-sm:h-[30vw] flex justify-center items-center gap-0">
      ${
        profile.instagram
          ? `<a href="${profile.instagram}" target="_blank"><i class="ri-instagram-line text-[3vw] text-white max-sm:text-[15vw]"></i></a>`
          : ""
      }
      ${
        profile.linkedin
          ? `<a href="${profile.linkedin}" target="_blank"><i class="ri-linkedin-fill text-[3vw] text-white max-sm:text-[15vw]"></i></a>`
          : ""
      }
      ${
        profile.github
          ? `<a href="${profile.github}" target="_blank"><i class="ri-github-fill text-[3vw] text-white max-sm:text-[15vw]"></i></a>`
          : ""
      }
    </div>
  `;
  swiperContainer.appendChild(slide);
});

console.log("made by vansh nagar");
