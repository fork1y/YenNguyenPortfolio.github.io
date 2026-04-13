const projectDetails = {
  northrop: {
    title: "Northrop Grumman Collaboration Project UAV Subteam",
    role: "Systems Engineering Member (2023–2024) | Systems Engineering UAV/MRA Lead (2024–2025)",

    overview:
      "Led and coordinate system-level integration by guiding requirements, documentation, and cross-team collaboration to ensure all subsystems worked together successfully to complete the mission.",
    contributions: [
      "Developed systems engineering documentation for mission planning and design reviews",
      "Supported requirements definition, traceability, and subsystem alignment",
      "Contributed to compliance matrices, mission timelines, and architecture artifacts",
      "Assisted in subsystem integration and cross-team coordination",
      "Supported risk identification and mitigation planning",

    ],
    skills: "Requirements analysis, system-level thinking, technical documentation, risk analysis, mitigation planning, verification and validation",
    tools: "Systems engineering workflows (MBSE concepts, lifecycle processes), trade studies and decision matrices, technical documentation (compliance matrices, design reports, architecture diagrams), mission architecture modeling (OV-1, SV-1, SV-2, SV-4, Sequence Diagram, Use Case Diagram).",
    outcome:
      "Helped lead the systems engineering effort for the Multi-Role Aircraft (MRA) by organizing requirements, supporting subsystem integration, and preparing technical review material that connected vehicle-level work to the overall mission. My contribution focused on making sure design, verification, and documentation stayed aligned so the MRA could operate effectively as part of the full collaborative system. Below is an overview presentation of my work as a systems engineer for the MRA, featuring material presented during Preliminary Design Review (PDR) to Northrop Grumman reviewers.",
  presentationLink: "./pdf/NGCP_Overview.pdf",
    presentationLabel: "Open Project",
    gallery: [
      "./images/ngcp/demoday.jpg",
     "./images/ngcp/ngcp1.jpg",
      "./images/ngcp/UseCase.jpg",
     "./images/ngcp/ngcp3.jpeg",
     "./images/ngcp/ngcp4.jpg",
    "./images/ngcp/ngcp5.jpg",
    "./images/ngcp/ngcp6.jpg",
    ],
  },

  WaterTank: {
    title: "Water Tank Automation and Pentesting",
    role: "Senior Design Project | In Progress | December 2026",
    overview:
      "Built a small-scale water tank automation system that simulates a real industrial control system (ICS), with a focus on how cyberattacks can affect physical processes.",
    contributions: [
      "Designed and built a working water tank system using pumps, sensors, and a Raspberry Pi.",
      "Developed control logic to measure water levels and automatically manage pump operation.",
      "Integrated the system with a SCADA platform (Mango Automation) using Modbus communication.",
      "Set up a web-based interface to monitor system data and behavior.",
      "Created a cybersecurity test environment to simulate attacks on the system.",
      "Tested vulnerabilities through network scanning, replay attacks, and man-in-the-middle (MITM) scenarios.",

    ],
    tools: "Raspberry Pi, Python, HC-SR04 ultrasonic sensor, relay modules, DC pumps, Modbus TCP, Mango Automation (SCADA), Kali Linux, Nmap, Metasploit.",
    skills: "System design, troubleshooting, cybersecurity fundamentals, network analysis, problem-solving.",
    outcome:
      "Strengthened my understanding of automation systems, network communication, and security testing through hands-on penetration testing.",
      presentationLink: "./pdf/WaterTank.pdf",
      presentationLabel: "Open Project",
    },
};

const experienceDetails = {
    PolySec: {
    title: "PolySec Lab",
    role: "Researcher (Jan 2025 - )",
    overview:
      "Worked on VR eVTOL simulator research connected to physiological sensor data and explored how security issues can affect these systems, including data handling, vulnerabilities, and secure communication.",
    contributions: [
      "Worked with physiological sensor data and how it is processed and streamed.",
      "Explored security risks such as data interception and weak authentication.",
      "Looked into encryption, secure APIs, and protecting sensitive data.",
      "Helped analyze how system components connect (VR headset, sensors, software).",
    ],
    skills: "Cybersecurity fundamentals, vulnerability awareness, system thinking, research, Virtual Reality",
    tools: "Unity, VR simulation environments, Lab Streaming Layer (LSL), physiological sensors (BIOPAC), security analysis concepts, Meta Quest Headset",
    outcome:
      "Improved my understanding of formal research processes, system-level analysis, and communicating VR and security concepts through student outreach and teaching events.",
     presentationLink: "./pdf/VR_EEGResearch.pdf",
      presentationLabel: "Open Project",
      gallery: [
      "./images/polysec/polysec1.jpeg",
            "./images/polysec/polysec2.jpeg",

      
    ],
  },

  FlowMetric: {
    title: "FlowMetric Water Risk Management",
    role: "Project Assistant (Jun 2024 - Aug 2024)",
    overview:
      "Worked on water risk research, including market analysis, grant opportunities, and studying the financial impact of water-related challenges.",
    contributions: [
      "Conducted market research on the water management and climate risk space, analyzing competitors and industry trends.",
      "Researched grant opportunities related to water sustainability and green initiatives, helping identify funding options aligned with company goals.",
      "Contributed to a white paper on water-sensitive organizations in Vietnam, helping organize and present research findings.",
      "Supported outreach efforts by connecting with organizations such as USAID and exploring collaboration opportunities.",
    ],
    skills: "Research, data analysis, documentation, financial impact, communication, market analysis.",
    tools: "Excel, technical documentation, data organization workflows",
    outcome:
      "Helped me understand how environmental risks connect to business decisions, and how research, data, and outreach all play a role in real-world problem solving.",
    presentationLink: "./pdf/FMPresentation.pdf",
      presentationLabel: "Open Project",
  },

  kelloggWork: {
    title: "Kellogg West Conference Center and Hotel",
    role: "AV Assistant | Facilities (Oct 2022 - Mar 2024)",
    overview:
      "Setting up and running audio/visual equipment for events while also helping maintain hotel and guest room systems to keep everything working properly.",
    contributions: [
      "Prepared technical spaces and equipment before events and presentations.",
      "Managed microphones, speakers, and sound systems during live events.",
      "Helped with lighting setups when needed.",
      "Developed stronger professional communication in customer-facing settings.",
      "Assisted with maintenance and troubleshooting in hotel and guest rooms.",

    ],
    skills: "Technical support, teamwork, customer service, problem-solving, troubleshooting.",
    tools: "Projectors (Epson), microphones, speakers (JBL EON208P), cameras (Canon XA70), operational checklists.",
    outcome:
      "Learned how to handle real-time issues, stay organized, and keep systems running in both event and hotel environments.",
    gallery: [
      "./images/kellogg/kellogg1.jpeg",
       "./images/kellogg/kellogg2.jpeg",
             "./images/kellogg/kellogg3.jpeg",
  ],
}
};

const certificationDetails = {
  codepath: {
    title: "CodePath CYB101",
    role: "Cybersecurity Coursework",
    overview:
      "Focused on practical cybersecurity learning through guided labs, foundational concepts, and applied defensive security thinking.",
    contributions: [
      "Studied core cybersecurity principles and threat awareness.",
      "Practiced blue-team oriented thinking and technical analysis.",
      "Built familiarity with incident response concepts and defensive workflows.",
      "Strengthened understanding of security tools and real-world security scenarios.",
    ],
    skills: "Security fundamentals, threat detection, incident response, blue team concepts",
    gallery: [
      "./images/certificates/codepath-cyb101.png",
    ],
  },
  networkPlus: {
    title: "CompTIA Network+",
    role: "Certification In Progress",
    overview:
      "Developing stronger networking knowledge with emphasis on infrastructure, TCP/IP, troubleshooting, and secure system connectivity.",
    skills: "Networking fundamentals, TCP/IP, troubleshooting, secure connectivity",
    gallery: [
      "./images/certificates/network-plus.png",
    ],
  },
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const projectButtons = document.querySelectorAll(".project-button");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const imageLightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const resumeCard = document.querySelector(".resume-card");
const resumeModal = document.getElementById("resume-modal");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = document.querySelector(".theme-toggle-text");
const savedTheme = localStorage.getItem("portfolio-theme");
const detailCollections = {
  projects: projectDetails,
  experience: experienceDetails,
  certifications: certificationDetails,
};
let activeGalleryImages = [];
let activeGalleryTitle = "";
let activeGalleryIndex = 0;

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);

  if (themeToggleText) {
    themeToggleText.textContent = isDark ? "Light Mode" : "Dark Mode";
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }

  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
}

if (savedTheme === "dark") {
  setTheme("dark");
} else {
  setTheme("light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    setTheme(nextTheme);
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function openModal(collectionKey, itemKey) {
  const collection = detailCollections[collectionKey];
  const project = collection ? collection[itemKey] : null;

  if (!project) {
    return;
  }
  const presentationSection = project.presentationLink
    ? `
      <div>
        <h3>Presentation / Slides</h3>
        <a class="media-link" href="${project.presentationLink}" target="_blank" rel="noreferrer">
          ${project.presentationLabel || "Open Presentation"}
        </a>
      </div>
    `
    : "";

  const gallerySection =
    project.gallery && project.gallery.length
      ? `
        <div>
          <h3>Project Gallery</h3>
          <div class="modal-gallery">
              ${project.gallery
                .map(
                  (image, index) => `
                    <button
                      class="gallery-item"
                      type="button"
                      data-gallery-image="${image}"
                      data-gallery-index="${index}"
                    >
                      <img src="${image}" alt="${project.title} image ${index + 1}" />
                    </button>
                  `,
                )
                .join("")}
            </div>
        </div>
      `
      : "";

  modalTitle.textContent = project.title;
  modalContent.innerHTML = `
    <div class="modal-copy">
      <div>
        <p>${project.role}</p>
      </div>
      <div>
        <h3>Overview</h3>
        <p>${project.overview}</p>
      </div>
      <div>
        <h3>Key Contributions</h3>
        <ul>
          ${project.contributions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div>
        <h3>Skills</h3>
        <p>${project.skills}</p>
      </div>
      <div>
        <h3>Tools</h3>
        <p>${project.tools}</p>
      </div>
      <div>
        <h3>Outcome</h3>
        <p>${project.outcome}</p>
      </div>
      ${presentationSection}
      ${gallerySection}
    </div>
  `;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  activeGalleryImages = project.gallery || [];
  activeGalleryTitle = project.title;
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateLightboxView() {
  const currentImage = activeGalleryImages[activeGalleryIndex];

  if (!currentImage) {
    return;
  }

  lightboxImage.src = currentImage;
  lightboxImage.alt = `${activeGalleryTitle} image ${activeGalleryIndex + 1}`;
  lightboxPrev.disabled = activeGalleryImages.length <= 1;
  lightboxNext.disabled = activeGalleryImages.length <= 1;
}

function openLightbox(index) {
  if (!activeGalleryImages.length) {
    return;
  }

  activeGalleryIndex = index;
  updateLightboxView();
  imageLightbox.classList.remove("hidden");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  imageLightbox.classList.add("hidden");
  imageLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";

  if (!modal.classList.contains("hidden")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function openResumeModal() {
  resumeModal.classList.remove("hidden");
  resumeModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeResumeModal() {
  resumeModal.classList.add("hidden");
  resumeModal.setAttribute("aria-hidden", "true");

  if (!modal.classList.contains("hidden") || !imageLightbox.classList.contains("hidden")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function showNextImage(direction) {
  if (!activeGalleryImages.length) {
    return;
  }

  activeGalleryIndex =
    (activeGalleryIndex + direction + activeGalleryImages.length) % activeGalleryImages.length;
  updateLightboxView();
}

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.collection === "certifications") {
      const certification = certificationDetails[button.dataset.key];

      if (certification && certification.gallery && certification.gallery.length) {
        activeGalleryImages = certification.gallery;
        activeGalleryTitle = certification.title;
        openLightbox(0);
      }

      return;
    }

    openModal(button.dataset.collection, button.dataset.key);
  });
});

if (resumeCard) {
  resumeCard.addEventListener("click", (event) => {
    event.preventDefault();
    openResumeModal();
  });
}

modal.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLElement && target.dataset.closeModal === "true") {
    closeModal();
  }
});

modalContent.addEventListener("click", (event) => {
  const galleryButton = event.target instanceof Element
    ? event.target.closest("[data-gallery-index]")
    : null;

  if (!(galleryButton instanceof HTMLElement)) {
    return;
  }

  openLightbox(Number(galleryButton.dataset.galleryIndex));
});

imageLightbox.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLElement && target.dataset.closeLightbox === "true") {
    closeLightbox();
  }
});

resumeModal.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLElement && target.dataset.closeResume === "true") {
    closeResumeModal();
  }
});

lightboxPrev.addEventListener("click", () => {
  showNextImage(-1);
});

lightboxNext.addEventListener("click", () => {
  showNextImage(1);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resumeModal.classList.contains("hidden")) {
    closeResumeModal();
    return;
  }

  if (event.key === "Escape" && !imageLightbox.classList.contains("hidden")) {
    closeLightbox();
    return;
  }

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }

  if (event.key === "ArrowLeft" && !imageLightbox.classList.contains("hidden")) {
    showNextImage(-1);
  }

  if (event.key === "ArrowRight" && !imageLightbox.classList.contains("hidden")) {
    showNextImage(1);
  }
});
