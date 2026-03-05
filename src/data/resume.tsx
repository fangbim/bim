import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fajar Anggito Abimanyu",
  initials: "Abimanyu",
  url: "https://fangbim.vercel.app",
  location: "Lamongan, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Software Engineer.",
  summary:
    "Informatics graduate with a strong focus on web development. Skilled in creating responsive, user-friendly websites using both front-end and back-end technologies. Passionate about optimizing performance and enhancing user experience. Ready to apply technical skills and creativity to drive successful web projects.",
  avatarUrl: "/me.JPG",
  skills: [
    // Frontend
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Flutter",
    "Figma",

    // Backend
    "Node.js",
    ".NET",
    "Laravel",
    "PHP",
    "Java",
    "Python",

    // Database
    "Postgres",
    "SQL",

    // Machine Learning / AI
    "Tensorflow",

    // Tools & OS
    "Git",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fang.bim891@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fangbim",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fajar-anggito-abimanyu/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/fangbim",
        icon: Icons.behance,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@fajaranggitoabimanyu870",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT. Sarana Karya Solusindo",
      href: "https://atomic.finance",
      badges: [],
      location: "Sidoarjo",
      title: "IT Developer",
      logoUrl: "/bandell.png",
      start: "Sept 2025",
      end: "Present",
      description:
        "Working as an IT Developer responsible for developing and maintaining internal systems to support operational workflows, including web and mobile applications for Smart Lighting (PJU) monitoring. Contributing to backend API development, server maintenance, and system performance monitoring while also supporting IoT device integration, RTU configuration, commissioning, and troubleshooting. Actively involved in SIM management systems, communication protocol analysis using Wireshark, and ensuring reliable system deployment for field operations.",
    },
    {
      company: "Dana Pensiun Semen Gresik",
      href: "https://atomic.finance",
      badges: [],
      location: "Gresik",
      title: "Web Developer Intern",
      logoUrl: "/dpsg.png",
      start: "Sept 2023",
      end: "Sept 2023",
      description:
        "Migrated a legacy desktop system to a modern web-based platform using Laravel, enhancing performance, accessibility, and user experience. Configured and deployed the website on a server, ensuring smooth deployment, while setting up PostgreSQL for improved data management and system reliability.",
    },
  ],
  education: [
    {
      school: "Universitas Internasional Semen Indonesia",
      href: "https://uisi.ac.id/",
      degree: "Bachelor of Informatics",
      logoUrl: "/uisi.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "PJU Pintar Mobile App",
      href: "https://github.com/fangbim/pju-pintar",
      dates: "Sept 2025 - Present",
      active: true,
      description:
        "PJU Pintar is a mobile application designed to monitor and manage street lighting systems. It provides real-time data on energy consumption, operational status, and maintenance schedules. The app allows users to report issues, track repairs, and optimize energy usage for improved efficiency and sustainability.",
      technologies: ["Flutter", "MySQL", "Laravel API", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/fangbim/pju-pintar",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/pjupintar.png",
      video: "",
    },
    {
      title: "POTAS - Portal Satu Pintu BANDELL",
      href: "https://github.com/fangbim/potas",
      dates: "Sept 2025 - Present",
      active: true,
      description:
        "POTAS is a web-based application that serves as a single portal for managing various administrative tasks within BANDELL. It streamlines processes such as employee management, document handling, and workflow automation, improving overall operational efficiency and user experience.",

      technologies: ["Laravel", "MySQL", "TailwindCSS", "DaisyUI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/fangbim/potas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/project/potas.png",
      video: "",
    },
    {
      title: "Auto Invoice",
      href: "https://github.com/fangbim/autoinvoice",
      dates: "Aug 2025",
      active: true,
      description:
        "AutoInvoice is a customer management and automated invoicing application built with Laravel. It allows users to add customer data, generate PDF invoices, and send them via email either manually or automatically on a monthly schedule. Leveraging Job Queues and Redis, the system processes invoice sending in the background for improved performance and efficiency. The built-in Scheduler ensures invoices are delivered on time without manual intervention.",
      technologies: ["Laravel", "Redis", "Mailtrap", "DOMPDF"],
      links: [
        {
          type: "Source",
          href: "https://github.com/fangbim/autoinvoice",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project/autoinvoice.mp4",
    },
    {
      title: "WBook",
      href: "https://wbook.vercel.app/",
      dates: "Jun 2025 - Jul 2025",
      active: true,
      description:
        "WBook is a personal digital bookshelf application that allows users to manage their book collection easily. It features interactive Flashcards to help users memorize key points from books, and a Quote feature to save and revisit favorite passages. Built with Next.js and Supabase, it offers real-time data handling, user authentication, and a smooth, responsive experience.",
      technologies: ["Next.js", "Supabase"],
      links: [
        {
          type: "Website",
          href: "https://wbook.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fangbim/wbook",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project/wbook.mp4",
    },
    {
      title: "Hiragana Learning App (Final Year Project)",
      href: "https://github.com/fangbim/learn_hiragana_app",
      dates: "Feb 2024 - Jul 2024",
      active: true,
      description:
        "The project involves developing a Hiragana learning application that uses TensorFlow-based AI models for an interactive educational experience. It focuses on optimizing various architectures to achieve high accuracy in recognizing and teaching Hiragana characters, aiming to enhance the user’s learning through adaptive techniques.  ",
      technologies: ["Python", "Flutter", "Tensorflow", "Node.js", "Anaconda"],
      links: [
        {
          type: "Source",
          href: "https://github.com/fangbim/learn_hiragana_app",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source (API)",
          href: "https://github.com/fangbim/kosakata-hiragana-api",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://repository.uisi.ac.id/6650/",
          icon: <Icons.paper className="size-3" />,
        },
      ],
      image: "",
      video: "/project/hiraganaApp.mp4",
    },
    {
      title: "MosqueHub",
      href: "https://mosquehub.vercel.app/",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Mosque Hub is a comprehensive web platform designed to serve as a one-stop resource for Muslims seeking prayer schedules, daily supplications, dhikr, and Islamic learning materials. The platform also features a community section for charitable contributions, encouraging a sense of togetherness and sharing.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Material Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://mosquehub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fangbim/mosquehub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/project/mosquehub.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hand Gesture Recognition App",
      dates: "23 January 2024",
      subject: "Deep Learning",
      description:
        "Developed a website that can detect hand gestures from users by uploading photos, videos, or recording directly, utilizing deep learning models.",
      image:
        "https://uisi-masterpiece.sgp1.digitaloceanspaces.com/karya/ltrPsj8jDb2LoQNppHc4pkBwy3XbU5CmFlXcE5kB.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/fangbim/fp-dl-hand-gesture",
        },
        {
          title: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=DkovlGRWavQ",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://fpdl112024.vercel.app/",
        },
      ],
    },
    {
      title: "Logo & UI Adventure App",
      dates: "Oktober 2023",
      subject: "Project P2MW",
      description:
        "Designed the logo and user interface for the Adventure app, focusing on creating a modern, adventurous brand identity and an intuitive UI. The design aimed to enhance user experience with easy navigation and visually engaging elements.",
      image: "https://vrtour.my.id/img/logo/logo.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://vrtour.my.id",
        },
        {
          title: "Behance",
          icon: <Icons.behance className="h-4 w-4" />,
          href: "https://www.behance.net/gallery/209592591/Adventure-UI-Logo",
        },
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://uisi.ac.id/read/tim-adventure-mahasiswa-uisi-lolos-p2mw-2023",
        },
      ],
    },
    {
      title: "EZ Trip App",
      dates: "23 January 2023",
      subject: "Pemrograman Mobile",
      description:
        "EZ TRIP is designed to make it easier for travelers to manage their time and access various information about their destinations, such as destination descriptions, accommodations, galleries, and guides.",
      image:
        "https://uisi-masterpiece.sgp1.digitaloceanspaces.com/karya/vaQvwPegQn7LXVn9GPlVVetHn7jFyv7TsHR0UF2Y.jpeg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/fangbim/ez-trip-app",
        },
        {
          title: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=2S1FhawDRpk",
        },
      ],
    },
    {
      title: "Website LMG Sneaker's",
      dates: "3 July 2022",
      subject: "Pemrograman Web",
      description:
        "LMG Sneakers is an online shoe store website that sells various sneaker brand products. On this website, users can log in to purchase items, and admin users can add products.",
      image:
        "https://uisi-masterpiece.sgp1.digitaloceanspaces.com/karya/dm3pJryyX78zqfWc4Oghb0TYpkdDEgZ0gKzZmhuJ.png",
      links: [
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://masterpiece.uisi.ac.id/karya/website-lmg-sneakers",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/fangbim/GnG-Sneakers",
        },
      ],
    },
  ],
} as const;
