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
      "Organized admin and CRM support for busy businesses and growing teams.",
  },

  // ABOUT SECTION - After hero
  about: [
    {
      type: "paragraph",
      text: "I'm a Virtual Assistant with a background in Computer Engineering and hands-on experience in data management, workflow organization, and system support. During my OJT and academic projects, I worked with tools like Salesforce, Google Workspace, and Asana to manage records, organize tasks, and improve data clarity.",
    },
    {
      type: "paragraph",
      text: "I've also worked on data-focused projects involving dataset organization and comparison for AI-based systems, which strengthened my attention to detail and ability to handle information efficiently.",
    },
    {
      type: "list",
      items: [
        "Reliable communication and task management",
        "Organized and structured workflows",
        "Strong attention to detail in data handling",
        "Familiarity with CRM and productivity tools",
      ],
    },
    {
      type: "paragraph",
      text: "I aim to provide dependable support, accurate work, and organized systems that help businesses operate more efficiently.",
    },
  ],

  // SKILLS SECTION - After about
  skills: [
    "Google Docs",
    "Google Sheets",
    "Google Calendar",
    "Trello",
    "Monday.com",
    "Asana",
    "Data Entry",
    "Email Management",
    "Data Management",
    "Workflow Automation",
    "Project Management",
    "Salesforece CRM",
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
      thumbnail: "images/Lead2.png",
      images: [
        {
          src: "images/Lead1.png",
          description: "Dashboard view of lead tracking system",
        },
        {
          src: "images/Lead2.png",
          description: "Built a sales CRM and reporting dashboard in Google Sheets with dynamic charts, lead tracking workflows, conditional formatting, and performance analytics to monitor lead conversion and sales activity.",
        },
         {
          src: "images/Lead3.png",
          description: "Implemented conditional formatting workflows to automatically categorize leads by sales status, improving visibility and helping prioritize follow-ups within the CRM pipeline.",
        },
        {
          src: "images/Lead4.png",
          description: "Developed dropdown-based CRM input systems for organized and error-free lead management.",
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
          src: "images/project-task1.png",
          description: "Designed and organized a centralized Executive Task Management System in Asana using categorized task sections such as Urgent Tasks, Today’s Tasks, This Week, and Waiting/Follow-up. Implemented task categorization, due dates, assignee tracking, and workflow organization to improve productivity and daily operations management.",
        },
        {
          src: "images/project-task2.png",
          description: "Created a Kanban-style workflow board in Asana to visually manage task progress from urgent priorities to completed tasks. Added subtasks, deadlines, and progress tracking to streamline executive support operations, improve task visibility, and maintain organized workflows.",
        },
        {
          src: "images/project-task3.png",
          description: "Configured workflow automation inside Asana to automatically move tasks between sections based on status updates and workflow conditions. This automation reduced manual task management, improved efficiency, and ensured smoother project tracking processes.",
        },
        {
          src: "images/project-task4.png",
          description: "Built detailed task templates with assigned users, due dates, descriptions, dependencies, subtasks, and attachments to ensure clear communication and accountability. This setup supports efficient task execution, collaboration, and follow-up management within executive operations.",
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
      thumbnail: "images/Ai2.png",
      images: [
        {
          src: "images/Ai1.png",
          description: "Developed a comparative dataset system for evaluating heart sound results between traditional stethoscope assessments and an AI-powered stethoscope model. The system compares patient heartbeat data, murmur detection, heart rate analysis, AI certainty scores, and risk classification to support faster and more data-driven cardiac screening.",
        },
        {
          src: "images/Ai2.png",
          description: "Created a visual analytics dashboard to evaluate the performance of the AI stethoscope against traditional heart examination methods. The dashboard includes a confusion matrix, heartbeat comparison chart, and risk-level distribution analysis to measure AI prediction accuracy, detect abnormalities, and visualize patient risk trends.",
        },
        {
          src: "images/Ai3.png",
          description: "Developed a lung sound comparison system that evaluates respiratory data captured from traditional stethoscope assessments and an AI-powered stethoscope model. The dataset includes breathing rate (BRPM), chest recording locations, crackles and wheezes detection, AI certainty scores, and patient risk classification to assist in respiratory condition analysis and early abnormality detection.",
        },
        {
          src: "images/Ai4.png",
          description: "Created a comparative visualization chart to analyze differences between actual breathing rate measurements and AI-generated breathing rate predictions. This chart helps evaluate the consistency and performance of the AI stethoscope system in detecting respiratory patterns and supporting lung health assessment.",
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
          src: "images/Google Calendar1.png",
          description: "Designed and managed a structured executive scheduling system using Google Calendar with time-blocking strategies for deep work, client meetings, team syncs, email management, breaks, and daily wrap-ups. Organized recurring schedules to improve productivity, task prioritization, and time management efficiency.",
        },
        {
          src: "images/Google Calendar2.png",
          description: "Configured recurring client meetings in Google Calendar with Google Meet integration, automated notifications, guest management, timezone settings, and detailed meeting agendas. This setup supports streamlined communication, meeting coordination, and professional calendar administration.",
        },
        {
          src: "images/Google Calendar3.png",
          description: "Implemented recurring deep work scheduling blocks to support focused productivity and minimize distractions during critical work hours. Used calendar categorization and structured scheduling techniques to maintain workflow consistency and improve daily efficiency.",
        },
        {
          src: "images/Google Calendar4.png",
          description: "Managed professional meeting schedules with integrated Google Meet links, attendee coordination, reminders, and meeting notes. The calendar workflow ensures organized communication, efficient collaboration, and clear scheduling visibility for clients and internal teams.",
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
