// ============================================
// PORTFOLIO DATA CONFIGURATION
// Edit this file to update your portfolio content
// ============================================

const siteData = {
  // HERO SECTION - Top of the page
  hero: {
    profileImage: "images/profile.png",
    name: "John Andrie S. Dignadice",
    title: "Virtual Assistant (Admin & CRM Support)",
    description:
      "I help businesses stay organized, responsive, and on track by handling administrative and CRM tasks that take up your time.",
  },

  // ABOUT SECTION - After hero
  about: [
    {
      type: "paragraph",
      text: "I'm a Virtual Assistant with a background in Computer Engineering and hands-on experience in data management, workflow organization, and system support. During my OJT and academic projects, I worked with tools like Salesforce, Google Workspace, and Asana to manage records, organize tasks, and improve data clarity.",
    },
    {
      type: "paragraph",
      text: "I've also worked on data-focused projects, including organizing and comparing datasets for an AI-based system, which strengthened my attention to detail and accuracy when handling information.",
    },
    {
      type: "list",
      items: [
        "Reliability and clear communication",
        "Structured workflows and organization",
        "Attention to detail in data management",
        "CRM and productivity tool proficiency",
      ],
    },
    {
      type: "paragraph",
      text: "I focus on reliability, clear communication, and structured workflows so you can focus on higher-priority tasks.",
    },
  ],

  // SKILLS SECTION - After about
  skills: [
    "Google Workspace",
    "Microsoft Excel",
    "Asana",
    "Data Entry",
    "Email Management",
    "Data Management",
    "Workflow Automation",
    "Project Management",
  ],

  // PROJECTS SECTION - After skills
  projects: [
    {
      title: "Smart Stethoscope System",
      description:
        "Designed and developed the frontend interface of an AI-powered stethoscope system using Vite, React, and TypeScript. Built a clean and responsive UI for displaying analyzed heart/lung sound results, ensuring clear data visualization and usability. Implemented component-based architecture, state handling, and dynamic rendering of diagnostic outputs. Focused on performance, readability, and user-friendly interaction for medical data interpretation.",
      tags: ["React", "TypeScript", "Data Visualization"],
      thumbnail: "images/project-stethoscope.png",
      images: [
        {
          src: "images/project-stethoscope.png",
          description: "Home Dashboard Interface",
        },
        {
          src: "images/project-stethoscope2.png",
          description: "Heart Analysis Interface",
        },
        {
          src: "images/project-stethoscope3.png",
          description: "Lung Analysis Interface",
        },
        {
          src: "images/project-stethoscope4.png",
          description: "Session History for the past recordings",
        },
        {
          src: "images/project-stethoscope5.png",
          description:
            "The Details Tab of each recording for more detailed information",
        },
        // Add more images here as needed, e.g.:
        // {
        //   src: "images/project-stethoscope-2.jpg",
        //   description: "Detailed waveform visualization"
        // }
      ],
    },
    {
      title: "CRM Lead Tracker",
      description:
        "Organized and managed 100+ lead entries with structured tracking and filtering. Implemented automated workflows and dashboards for improved efficiency.",
      tags: ["Google Sheets", "Salesforce", "Data Management"],
      thumbnail: "images/project-crm.jpg",
      images: [
        {
          src: "images/project-crm.jpg",
          description: "Dashboard view of lead tracking system",
        },
      ],
    },
    {
      title: "Task Management System",
      description:
        "Built a structured task management system using Asana to simulate real executive assistant workflows. The system includes task prioritization, deadline tracking, follow-up management, and workflow automation using rules to move completed tasks automatically. Organized 20+ administrative tasks across multiple stages to improve efficiency, visibility, and task tracking. This project demonstrates my ability to manage schedules, handle administrative operations, and optimize workflows for productivity.",
      tags: ["Asana", "Workflow Automation", "Project Management"],
      thumbnail: "images/project-task.png",
      images: [
        {
          src: "images/project-task.png",
          description: "Task board with priority indicators",
        },
      ],
    },
    {
      title: "AI Stethoscope Data Processing and Comparative Analysis",
      description:
        "Handled data preparation and analysis for an AI-based stethoscope thesis project. Cleaned and organized system-generated results to ensure accuracy and consistency. Created structured comparison tables between traditional stethoscope findings and AI-generated outputs to evaluate performance and reliability. Presented data in a clear, tabular format to support analysis, reporting, and decision-making.",
      tags: [
        "Google Sheets",
        "Data Cleaning",
        "Data Entry",
        "Graph & Table Creation",
      ],
      thumbnail: "images/Aientry.png",
      images: [
        {
          src: "images/project-task.png",
          description: "Task board with priority indicators",
        },
      ],
    },
     {
      title: "Executive Schedule Management",
      description:
        "Created a structured weekly schedule using Google Calendar to simulate executive support. Implemented time blocking for meetings, deep work, and administrative tasks to improve productivity and organization. Added detailed event descriptions, participant coordination, and automated reminders to ensure efficient scheduling. Applied recurring events to maintain consistency and reduce manual workload while avoiding scheduling conflicts.",
      tags: ["Google Calendar", "Scheduling", "Administrative Support"],
      thumbnail: "images/Google Calendar1.png",
      images: [
        {
          src: "images/project-task.png",
          description: "Task board with priority indicators",
        },
      ],
    },
  ],

  // CONTACT SECTION - Bottom of the page
  contact: {
    email: "johnandrie.dignadice06@gmail.com",
    github: "https://github.com/your-profile",
    linkedin: "www.linkedin.com/in/john-andrie-dignadice-41a390331",
  },
};
