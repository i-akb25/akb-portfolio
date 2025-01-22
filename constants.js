export const METADATA = {
  author: "ANURAG ARYAN",
  title: "AKB | ANURAG ARYAN",
  description:
    "Anurag Aryan is a Fullstack Developer focused on developing sleek, high-performance web applications that deliver exceptional user experiences through modern design and intuitive interfaces.",
  siteUrl: "https://i-akb25.github.io/about-me/",
  twitterHandle: "@i_official_akb",
  keywords: [
    "ANURAG ARYAN",
    "Frontend Engineer",
    "Backend Developer",
    "Electrical Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://drive.google.com/file/d/19igMMuLflryfeVHlZKrmx0c6868toD31/view?usp=sharing",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Crafting sleek and smart web solutions.",
  "Turning web ideas into interactive realities.",
  "From concept to code, I bring visions to life.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:anuragaryanofficial@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anurag-aryan-563233261",
  },
  {
    name: "github",
    url: "https://github.com/i-akb25",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/ace_akb/",
  },
  {
    name: "twitter",
    url: "https://x.com/i_official_akb",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "vite",
    "figma",
    "java",
    "python",
    "tensorflow"
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "tailwindcss",
    "bootstrap",
    "webrtc",
    "socket.io",
    "gsap",
    "express"
  ],
  databases: ["mysql", "mongodb", "firebase",],
  other: ["git", "githubb", "raspberry-pi", "matlab", "arduino", "canva"],
};

export const PROJECTS = [
  {
    name: "Accord",
    image: "/projects/accord.jpg",
    blurImage: "/projects/blur/accord-blur.jpg",
    description: "Accord the gaming UI using ReactJS + Tailwind CSS + GSAP 🎮",
    gradient: ["#F14658", "#DC2537"],
    url: "https://accordgaming.netlify.app/",
    tech: ["react", "gsap", "tailwindcss"],
  },
  {
    name: "Adhayan",
    image: "/projects/adhayan.jpg",
    blurImage: "/projects/blur/adhayan-blur.jpg",
    description: "An E-classroom using ReactJS + NodeJS + Socket.IO + WebRTC + MongoDB 🏫",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://e-learning-adhayan.vercel.app/",
    tech: ["webrtc", "react", "nodejs", "mongodb", "socket.io"],
  },
  {
    name: "Automated Drone Delivery System",
    image: "/projects/pidrone.png",
    blurImage: "/projects/blur/pidrone-blur.jpg",
    description: "The Automated Drone Delivery System is designed to autonomously deliver parcels to a target location and return to the launch point using Resberry Pi + Pixhawk 🚁",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/i-akb25/AUTOMATED_DRONE_DELIVERY",
    tech: ["python", "raspberry-pi", ],
  },
  {
    name: "ARDUCOPTER",
    image: "/projects/quadcopter.jpg",
    blurImage: "/projects/blur/quadcopter-blur.jpg",
    description: "Arducopter an auto-leveling Arduino Uno-based quadcopter using Arduino 🚁",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/i-akb25/ARDUCOPTER",
    tech: ["arduino"],
  },
  {
    name: "Make a Wish ❤️",
    image: "/projects/makeawish.jpg",
    blurImage: "/projects/blur/makeawish-blur.jpg",
    description:
      "Make-A-Wish is a special project built to express the deepest emotions using ReactJS + NodeJS 💌",
    gradient: ["#000066", "#6699FF"],
    url: "https://love-is-wish.vercel.app/",
    tech: ["react", "nodejs", "css"],
  },
  {
    name: "Safar Awaits",
    image: "/projects/safarawaits.png",
    blurImage: "/projects/blur/safarawaits.png",
    description:
      "The one stop solution for Unwinding in Unforgettable Destinations using ReactJS + NodeJS",
    gradient: ["#000066", "#6699FF"],
    url: "https://safar-awaits.netlify.app/",
    tech: ["react", "JS", "css"],
  },
  {
    name: "Ink Stain",
    image: "/projects/inkstain.jpg",
    blurImage: "/projects/blur/inkstain-blur.jpg",
    description: "Ink-Stain Website Where Words Leave Their Mark using ReactJS + Tailwind CSS + NodeJS + MongoDB + Tailwind CSS 🖋️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/i-akb25/ink-stain",
    tech: ["react", "nodejs", "tailwindcss", "mongodb"],
  },
  {
    name: "Saath Safar",
    image: "/projects/saathsafar.jpg",
    blurImage: "/projects/blur/saathsafar-blur.jpg",
    description: "A  travel agency website designed for ultimate peace using HTML + CSS + JS 🗺️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://travel-kappa-swart.vercel.app/",
    tech: ["JS", "html", "css"],
  },
  {
    name: "Carbon Footprint Tracker",
    image: "/projects/carbon.jpg",
    blurImage: "/projects/blur/carbon-blur.jpg",
    description: "A Tracker that aims to promote awareness of environmental impact and encourage sustainable living using HTML + CSS + JS 🏭",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://i-akb25.github.io/carbonfootprint/",
    tech: ["JS", "html", "css"],
  },
  {
    name: "Solar System",
    image: "/projects/solarsystem.jpg",
    blurImage: "/projects/blur/solarsystem-blur.jpg",
    description:
      "SolarSystem, a captivating and visually stunning representation using React News Application using HTML + CSS + JS 🌌",
    gradient: ["#000066", "#6699FF"],
    url: "https://i-akb25.github.io/solar-system/",
    tech: ["JS", "html", "css"],
  },
];

export const WORK_CONTENTS = {
  TRAINEE: [
    {
      title: "NBPDCL",
      description:
        "North Bihar Power Distribution Company Limited is a public sector undertaking (PSU) controlled by the Government of Bihar.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Industrial Trainee
        </div>
      ),
    },
    {
      title: "Learnings",
      description:
        "Developed a comprehensive understanding about operation and maintenance, troubleshooting of electrical equipments, protective devices, and control system focusing on 33/11KV power grid substation system",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Mastering the Heart of Electrical Systems
        </div>
      ),
    },
    {
      title: "Observation",
      description:
        "This knowledge extended to troubleshooting techniques, enabling me to identify and resolve issues effectively within complex electrical systems. My expertise grew in recognizing the critical role of protective devices and control systems, which are vital for maintaining system integrity and ensuring the safety of both equipment and personnel.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Ensuring Reliability and Safety
        </div>
      ),
    },
    {
      title: "Outcomes",
      description:
        "I specialized in the 33/11KV power grid substation system, gaining insights into the management, control, and protection of high-voltage substations. This hands-on experience helped me understand how to optimize performance, minimize downtime, and ensure the reliability of the power supply.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Unlocking the Secrets of Electrical Systems
        </div>
      ),
    },
  ],
  ACADEMICS: [
    {
      title: "NIT-PATNA",
      description:
        " I'm an Electrical Engineer with a robust foundation in both traditional electrical engineering and cutting-edge technologies. Proficient in web development, I want to bring a unique blend of technical expertise and creative problem-solving to my every project.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          ELECTRICAL ENGINEERING
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "My technical skills encompass a wide range of tools and technologies including ReactJS, NodeJS, MongoDB, Arduino, and MATLAB, among others. I have worked on several self-learning projects, such as the development of website in hackathons, automations, a quadcopter design, and various IoT-based projects like the Obstacle Avoiding Bot and Solar-Powered Electric Vehicle. These projects have provided me with hands-on experience in both hardware and software, enhancing my proficiency in system integration and full-stack development.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          WEB DEVELOPER and AUTOMATION
        </div>
      ),
    },
    {
      title: "Contributions",
      description:
        "Beyond academics, I have actively contributed to the TESLA Club at NIT Patna, taking on leadership roles in the technical and design domains. I have organized events and workshops, and supported my team on various projects. These experiences have helped me develop strong leadership, communication, and teamwork skills, all of which are essential for thriving in collaborative environments and driving innovations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Leading with Purpose, Creating Together
        </div>
      ),
    },
    {
      title: "Passion ",
      description:
        "Beyond my technical work, I am passionate about painting, content writing, sketching, and traveling. These creative outlets allow me to express my ideas and emotions through art and words. Painting and sketching help me bring my imagination to life, while content writing enables me to connect with others through storytelling. Traveling inspires me with new perspectives and experiences, enriching both my creativity and personal growth.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Exploring the World Beyond Technology
        </div>
      ),
    }
  ],
  // INKSTAIN: [
  //   {
  //     title: "Inkstain",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Creative",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Content Writting
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
