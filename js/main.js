// Utility function to escape HTML
function escapeHtml(text) {
  if (!text) return "";
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Initialize the portfolio
document.addEventListener("DOMContentLoaded", function () {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderContact();
  initFilters();
});

// Render Hero Section
function renderHero() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const hero = siteData.hero;
  heroSection.innerHTML = `
    <div class="hero-container">
      <div class="hero-left">
        <div class="hero-profile">
          <div class="profile-image-container">
            <img src="${hero.profileImage}" alt="${escapeHtml(hero.name)}" class="profile-image">
          </div>
        </div>
      </div>
      <div class="hero-right">
        <h1>${escapeHtml(hero.name)}</h1>
        <p class="hero-title">${escapeHtml(hero.title)}</p>
        <p class="hero-bio">${escapeHtml(hero.description)}</p>
      </div>
    </div>
  `;
}

// Render About Section
function renderAbout() {
  const overviewSection = document.getElementById("overview");
  if (!overviewSection) return;

  const aboutBlocks = siteData.about
    .map((block) => {
      if (block.type === "list") {
        const items = Array.isArray(block.items) ? block.items : [];
        return `
        <ul>
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      `;
      }
      return `<p>${escapeHtml(block.text)}</p>`;
    })
    .join("");

  overviewSection.innerHTML = `
    <div class="section-container about-section">
      <div class="section-header">
        <h2>About Me</h2>
      </div>
      <div class="about-content">
        ${aboutBlocks}
      </div>
    </div>
  `;
}

// Render Skills Section
function renderSkills() {
  const skillsSection = document.getElementById("skills-section");
  if (!skillsSection) return;

  const skills = siteData.skills;
  if (!skills || skills.length === 0) {
    skillsSection.innerHTML = "";
    return;
  }

  const skillsHtml = skills
    .map((skill) => `<span class="skill-tag">${escapeHtml(skill)}</span>`)
    .join("");

  skillsSection.innerHTML = `
    <div class="section-container">
      <h2>Skills & Expertise</h2>
      <div class="skills-container">
        ${skillsHtml}
      </div>
    </div>
  `;
}

// Render Projects Section
function renderProjects() {
  const projectsSection = document.getElementById("projects-section");
  if (!projectsSection) return;

  const projects = siteData.projects;
  if (!projects || projects.length === 0) {
    projectsSection.innerHTML = `
      <div class="section-container">
        <h2>Projects</h2>
        <p style="text-align: center; color: var(--color-text-muted);">No projects yet</p>
      </div>
    `;
    return;
  }

  const projectsHtml = projects
    .map((project, index) => {
      const thumbnailSrc = project.thumbnail || "";
      const thumbnailHtml = thumbnailSrc
        ? `<img src="${thumbnailSrc}" alt="${escapeHtml(project.title)} thumbnail" />`
        : '<div class="project-image-placeholder">📱</div>';

      const tagHtml = (project.tags || [])
        .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
        .join("");

      const hasGallery = (project.images || []).length > 0;
      const previewHint = hasGallery
        ? `<div class="project-card-hint">Preview images</div>`
        : "";

      return `
      <div class="project-card" data-project-index="${index}">
        <div class="project-image">
          ${thumbnailHtml}
        </div>
        ${previewHint}
        <div class="project-content">
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <div class="project-tech">
            ${tagHtml}
          </div>
        </div>
        <div class="project-card-footer">
          <button type="button" class="btn btn-secondary view-project-btn" data-project-index="${index}">View Project</button>
        </div>
      </div>
    `;
    })
    .join("");

  projectsSection.innerHTML = `
    <div class="section-container">
      <h2>Projects</h2>
      <div class="projects-carousel">
        <button type="button" class="carousel-arrow carousel-arrow-left" aria-label="Previous project">‹</button>
        <div class="projects-grid">
          ${projectsHtml}
        </div>
        <button type="button" class="carousel-arrow carousel-arrow-right" aria-label="Next project">›</button>
      </div>
    </div>
  `;

  attachProjectCarouselControls();
  createProjectPreviewModal();
  attachProjectCardPreview();
}

function attachProjectCarouselControls() {
  const carousel = document.querySelector(".projects-carousel .projects-grid");
  const prevButton = document.querySelector(
    ".projects-carousel .carousel-arrow-left",
  );
  const nextButton = document.querySelector(
    ".projects-carousel .carousel-arrow-right",
  );
  if (!carousel || !prevButton || !nextButton) return;

  const scrollAmount = carousel.clientWidth * 0.8;

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  const startDrag = (event) => {
    isDragging = true;
    startX = event.type.includes("touch")
      ? event.touches[0].pageX
      : event.pageX;
    scrollStart = carousel.scrollLeft;
    carousel.classList.add("dragging");
  };

  const onDrag = (event) => {
    if (!isDragging) return;
    const x = event.type.includes("touch")
      ? event.touches[0].pageX
      : event.pageX;
    const delta = startX - x;
    carousel.scrollLeft = scrollStart + delta;
  };

  const endDrag = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", startDrag);
  carousel.addEventListener("touchstart", startDrag, { passive: true });
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag, { passive: true });
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);
}

function createProjectPreviewModal() {
  if (document.getElementById("project-modal")) return;

  const modalHtml = `
    <div id="project-modal" class="project-modal hidden" aria-hidden="true">
      <div class="project-modal-backdrop"></div>
      <div class="project-modal-inner" role="dialog" aria-modal="true">
        <button type="button" class="project-modal-close" aria-label="Close preview">×</button>
        <div class="project-modal-body">
          <div class="project-modal-header">
            <h3 class="project-modal-title"></h3>
            <p class="project-modal-subtitle"></p>
          </div>
          <div class="project-preview-main">
            <button type="button" class="preview-arrow preview-arrow-left" aria-label="Previous image">‹</button>
            <img class="project-preview-image" src="" alt="" />
            <button type="button" class="preview-arrow preview-arrow-right" aria-label="Next image">›</button>
          </div>
          <p class="project-preview-caption"></p>
          <div class="project-full-description"></div>
          <div class="project-preview-thumbnails"></div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);

  const modal = document.getElementById("project-modal");
  const closeButton = modal.querySelector(".project-modal-close");
  const leftArrow = modal.querySelector(".preview-arrow-left");
  const rightArrow = modal.querySelector(".preview-arrow-right");

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeProjectPreview();
  });

  leftArrow.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showPreviewArrow(-1);
  });

  rightArrow.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    showPreviewArrow(1);
  });

  modal
    .querySelector(".project-modal-backdrop")
    .addEventListener("click", closeProjectPreview);
  modal
    .querySelector(".project-modal-inner")
    .addEventListener("click", (event) => {
      event.stopPropagation();
    });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeProjectPreview();
    }
  });
}

function showPreviewArrow(direction) {
  const modal = document.getElementById("project-modal");
  if (!modal || modal.classList.contains("hidden")) return;

  const projectIndex = Number(modal.dataset.projectIndex || 0);
  const currentImageIndex = Number(modal.dataset.currentImageIndex || 0);
  const project = siteData.projects[projectIndex];
  if (!project) return;

  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.thumbnail
        ? [{ src: project.thumbnail, description: project.title }]
        : [];
  if (images.length === 0) return;

  const nextIndex =
    (currentImageIndex + direction + images.length) % images.length;
  setPreviewImage(project, nextIndex);
}

function attachProjectCardPreview() {
  const buttons = document.querySelectorAll(".view-project-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const projectIndex = Number(button.dataset.projectIndex);
      openProjectPreview(projectIndex);
    });
  });
}

function openProjectPreview(projectIndex) {
  const project = siteData.projects[projectIndex];
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const titleElement = modal.querySelector(".project-modal-title");
  const subtitleElement = modal.querySelector(".project-modal-subtitle");
  const imageElement = modal.querySelector(".project-preview-image");
  const thumbnailsElement = modal.querySelector(".project-preview-thumbnails");
  const fullDescriptionElement = modal.querySelector(
    ".project-full-description",
  );

  titleElement.textContent = project.title;
  subtitleElement.textContent = project.tags ? project.tags.join(" · ") : "";
  fullDescriptionElement.textContent = project.description;

  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.thumbnail
        ? [{ src: project.thumbnail, description: project.title }]
        : [];
  if (images.length === 0 && project.thumbnail) {
    images.push({ src: project.thumbnail, description: project.title });
  }

  thumbnailsElement.innerHTML = images
    .map(
      (img, imageIndex) => `
        <button type="button" class="preview-thumb ${imageIndex === 0 ? "active" : ""}" data-image-index="${imageIndex}">
          <img src="${img.src}" alt="${escapeHtml(img.description || project.title)}" />
        </button>
      `,
    )
    .join("");

  modal.dataset.projectIndex = String(projectIndex);
  modal.dataset.currentImageIndex = "0";
  setPreviewImage(project, 0);

  const arrows = modal.querySelectorAll(".preview-arrow");
  arrows.forEach((arrow) => {
    arrow.style.display = images.length > 1 ? "grid" : "none";
  });

  thumbnailsElement.querySelectorAll(".preview-thumb").forEach((button) => {
    button.addEventListener("click", () => {
      const imageIndex = Number(button.dataset.imageIndex);
      setPreviewImage(project, imageIndex);
    });
  });

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function setPreviewImage(project, imageIndex) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  const imageElement = modal.querySelector(".project-preview-image");
  const captionElement = modal.querySelector(".project-preview-caption");
  const thumbButtons = modal.querySelectorAll(".preview-thumb");

  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.thumbnail
        ? [{ src: project.thumbnail, description: project.title }]
        : [];
  const image = images[imageIndex] ||
    images[0] || { src: project.thumbnail || "", description: project.title };
  imageElement.src = image.src;
  imageElement.alt = image.description || project.title;
  captionElement.textContent =
    image.description || project.description || project.title;
  modal.dataset.currentImageIndex = String(imageIndex);

  thumbButtons.forEach((button, index) => {
    button.classList.toggle("active", index === imageIndex);
  });
}

function closeProjectPreview() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

// Render Contact Section
function renderContact() {
  const contactSection = document.getElementById("contact");
  if (!contactSection) return;

  const contact = siteData.contact;
  contactSection.innerHTML = `
    <div class="contact-section">
      <h2>Let's Work Together</h2>
      <div class="contact-info">
        <div class="contact-item">
          📧 <a href="mailto:${contact.email}">${escapeHtml(contact.email)}</a>
        </div>
        ${contact.github ? `<div class="contact-item">🔗 <a href="${contact.github}" target="_blank">GitHub</a></div>` : ""}
        ${contact.linkedin ? `<div class="contact-item">🔗 <a href="${contact.linkedin}" target="_blank">LinkedIn</a></div>` : ""}
      </div>
      <div class="contact-cta">
        <a href="mailto:${contact.email}" class="btn btn-primary">Send Email</a>
      </div>
    </div>
  `;
}

// Initialize Filters (if needed, but since no filters in data, maybe remove)
function initFilters() {
  // No filters for now, as per user's structure
}
