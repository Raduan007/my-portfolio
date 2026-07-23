export const projects = [
  {
    id: "gamecoins",
    title: "GameCoins",
    shortDescription:
      "A full-stack game top-up platform for purchasing gaming credits and digital products.",
    fullDescription:
      "GameCoins is a modern full-stack game top-up platform that allows users to purchase gaming credits, digital products, and top-up packages securely. The platform includes authentication, role-based access control, package management, payment workflows, admin dashboard, and responsive UI for seamless user experience.",
    image: "/assets/gamecoins.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "User Authentication",
      "Role-Based Authorization",
      "Game Management",
      "Top-up Package Management",
      "Admin Dashboard",
      "Responsive Design",
    ],
    challenges:
      "Managing authentication, role permissions, and deployment issues across Vercel and Render.",
    solution:
      "Implemented centralized authentication, JWT session management, protected routes, and optimized API handling.",
    futurePlans: "Introduce a real-time chat feature between players and a reward points system for loyal customers.",
    githubClient: "https://github.com/Raduan007/GameCoins-client",
    githubServer: "https://github.com/Raduan007/GameCoins-server",
    live: "https://game-coins-client-delta.vercel.app/",
  },
  {
    id: "tradehub",
    title: "TradeHub",
    shortDescription:
      "A full-stack second-hand marketplace for buying and selling used products.",
    fullDescription:
      "TradeHub enables users to list, browse, and purchase second-hand products securely. The platform provides seller management, product listings, authentication, and responsive user experience.",
    image: "/assets/tradehub.png",
    technologies: [
      "React",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    features: [
      "Product Listings",
      "User Authentication",
      "Seller Dashboard",
      "Product Search",
      "Responsive UI",
    ],
    challenges:
      "Creating a scalable marketplace structure with proper user roles and product management.",
    solution:
      "Built modular backend architecture and reusable frontend components.",
    futurePlans: "Implement an AI-based price suggestion tool for sellers and an advanced product recommendation engine.",
    githubClient: "https://github.com/Raduan007/TradeHub-client",
    githubServer: "https://github.com/Raduan007/tradehub-server",
    live: "https://trade-hub-client-pi.vercel.app/",
  },
  {
    id: "studynook",
    title: "StudyNook",
    shortDescription:
      "A modern study platform for organizing learning resources.",
    fullDescription:
      "StudyNook helps students manage notes, learning materials, and educational resources through an intuitive and responsive interface.",
    image: "/assets/studynook.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
    ],
    features: [
      "Resource Management",
      "Study Materials",
      "Responsive Design",
      "Modern UI",
    ],
    challenges:
      "Designing a clean learning experience with intuitive navigation.",
    solution:
      "Focused on user-centered design and component reusability.",
    futurePlans: "Add collaborative real-time study rooms and integration with popular calendar applications.",
    githubClient: "https://github.com/Raduan007/studynook-client",
    githubServer: "https://github.com/Raduan007/studynook-server",
    live: "https://studynook-client-ten.vercel.app/",
  }
];