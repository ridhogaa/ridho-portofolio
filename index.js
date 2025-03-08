document.addEventListener("DOMContentLoaded", () => {
  // Hamburger Menu Logic
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuBtn.classList.toggle("text-white");
  });

  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("text-white");
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
      mobileMenu.classList.add("hidden");
      menuBtn.classList.remove("text-white");
    });
  });

  // Populate Data
  function populateData() {
    // Personal Info
    document.getElementById("profile-photo").src = portfolioData.personal.photo;
    document.getElementById("name").textContent = portfolioData.personal.name;
    document.getElementById("title").textContent = portfolioData.personal.title;

    // Contact Info
    document.getElementById("email").textContent = portfolioData.personal.email;
    document.getElementById("phone").textContent = portfolioData.personal.phone;
    document.getElementById("github").textContent =
      portfolioData.personal.github;
    document.getElementById(
      "email-btn"
    ).href = `mailto:${portfolioData.personal.email}`;
    document.getElementById(
      "linkedin-btn"
    ).href = `https://${portfolioData.personal.linkedin}`;
    document.getElementById(
      "github-link"
    ).href = `https://${portfolioData.personal.github}`;
    document.getElementById(
      "linkedin-link"
    ).href = `https://${portfolioData.personal.linkedin}`;

    // About Section
    document.getElementById("about-text").textContent =
      portfolioData.personal.about;

    // Education
    const educationContainer = document.getElementById("education-container");
    portfolioData.education.forEach((edu) => {
      educationContainer.innerHTML += `
                <div class="border-l-2 border-blue-500 pl-4 mb-4">
                    <h4 class="font-semibold">${edu.institution}</h4>
                    <p class="text-sm text-slate-400">${edu.degree}</p>
                    <p class="text-sm text-slate-400">${edu.gpa}</p>
                    <p class="text-sm text-slate-400">${edu.startDate} - ${edu.endDate}</p>
                </div>`;
    });

    // Experience
    const experienceContainer = document.getElementById("experience-container");
    portfolioData.experience.forEach((exp) => {
      experienceContainer.innerHTML += `
                <div class="bg-slate-800/50 p-6 rounded-xl card-hover" data-aos="fade-up">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-xl font-semibold">${
                              exp.position
                            }</h3>
                            <div class="flex items-center space-x-2 mt-2">
                                <span class="text-blue-400">${
                                  exp.company
                                }</span>
                                <span class="text-slate-400 text-sm">• ${
                                  exp.type
                                }</span>
                                <span class="text-slate-400 text-sm">• ${
                                  exp.location
                                }</span>
                            </div>
                            ${
                              exp.description
                                ? `<p class="mt-2 text-blue-200 italic">${exp.description}</p>`
                                : ""
                            }
                        </div>
                        <span class="text-sm text-slate-400 shrink-0">${
                          exp.startDate
                        } - ${exp.endDate}</span>
                    </div>
                    <ul class="list-disc list-inside space-y-2 text-slate-300">
                        ${exp.responsibilities
                          .map((resp) => `<li>${resp}</li>`)
                          .join("")}
                    </ul>
                </div>`;
    });

    // Projects
    const projectsContainer = document.getElementById("projects-container");
    portfolioData.projects.forEach((project) => {
      projectsContainer.innerHTML += `
                <div class="bg-slate-800/50 p-6 rounded-xl card-hover" data-aos="fade-up">
                    <img src="${project.image}" alt="${
        project.name
      }" class="w-full h-48 object-cover rounded-lg mb-4">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-semibold">${project.name}</h3>
                        <span class="text-sm text-blue-400">${
                          project.year
                        }</span>
                    </div>
                    <p class="text-slate-300 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies
                          .map(
                            (tech) => `
                            <span class="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">${tech}</span>
                        `
                          )
                          .join("")}
                    </div>
                </div>`;
    });

    // Skills
    const skillsContainer = document.getElementById("skills-container");
    portfolioData.skills.forEach((skill) => {
      skillsContainer.innerHTML += `
                <div class="bg-slate-800/50 p-4 rounded-xl text-center card-hover" data-aos="fade-up">
                    <i class="${skill.icon} text-3xl mb-2 text-blue-400"></i>
                    <p class="text-slate-300">${skill.name}</p>
                </div>`;
    });
  }

  populateData();

  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });

  // Update copyright year automatically
  const copyright = document.getElementById("copyright");
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} Ridho Gymnastiar Al Rasyid. All rights reserved.`;

  // EmailJS Integration (Ganti dengan konfigurasi Anda)
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Ganti dengan service ID dan template ID dari EmailJS
    emailjs.sendForm("service_id", "template_id", e.target).then(
      () => {
        alert("Message sent successfully!");
        form.reset();
      },
      (error) => {
        alert("Error sending message: " + error.text);
      }
    );
  });
});
