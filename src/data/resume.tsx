import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fajar Anggito Abimanyu",
  initials: "Abimanyu",
  url: "https://fangbim.vercel.app",
  location: "Lamongan, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer.",
  summary:
    "Informatics graduate with a strong focus on web development. Skilled in creating responsive, user-friendly websites using both front-end and back-end technologies. Passionate about optimizing performance and enhancing user experience. Ready to apply technical skills and creativity to drive successful web projects.",
  avatarUrl: "/me.JPG",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "SQL",
    "Tensorflow",
    "Flutter",
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
      X: {
        name: "Behance",
        url: "https://www.behance.net/fangbim",
        icon: Icons.behance,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@bim126",
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
    }
  ],
  projects: [
    {
      title: "Hiragana Learning App (Final Year Project)",
      href: "https://chatcollect.com",
      dates: "Feb 2024 - Jul 2024",
      active: true,
      description:
        "The project involves developing a Hiragana learning application that uses TensorFlow-based AI models for an interactive educational experience. It focuses on optimizing various architectures to achieve high accuracy in recognizing and teaching Hiragana characters, aiming to enhance the user’s learning through adaptive techniques.  ",
      technologies: [
        "Python",
        "Flutter",
        "Tensorflow",
        "Node.js",
        "Anaconda",
      ],
      links: [
        {
          type: "Source",
          href: "https://chatcollect.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ckfbdnekepdbtwtbbalm.supabase.co/storage/v1/object/sign/portfolio/video-project/hiraganaApp.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vdmlkZW8tcHJvamVjdC9oaXJhZ2FuYUFwcC5tcDQiLCJpYXQiOjE3Mjc4NTIzMTgsImV4cCI6MTc1OTM4ODMxOH0.AHsCzpAF41YBpYyRG_jSZcs8prN3RTkGfcVthxB913I&t=2024-10-02T06%3A58%3A38.428Z",
    },
    {
      title: "MosqueKu",
      href: "https://magicui.design",
      dates: "Jan 2023 - Present",
      active: true,
      description:
        "Mosque Ku is a comprehensive web platform designed to serve as a one-stop resource for Muslims seeking prayer schedules, daily supplications, dhikr, and Islamic learning materials. The platform also features a community section for charitable contributions, encouraging a sense of togetherness and sharing.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Material Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://mosqueku.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fangbim/mosqueku",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://ckfbdnekepdbtwtbbalm.supabase.co/storage/v1/object/sign/portfolio/video-project/mosquekuWebsite.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vdmlkZW8tcHJvamVjdC9tb3NxdWVrdVdlYnNpdGUubXA0IiwiaWF0IjoxNzI4MDMxNzMzLCJleHAiOjE3NTk1Njc3MzN9.WPyqrCLunv0J6xDtigD6n0d3xXUHSzR3T-6HFoiH5Wc&t=2024-10-04T08%3A48%3A53.694Z",
    }
  ],
} as const;
