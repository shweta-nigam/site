import properPoll from "../assets/properpoll.mp4";
import foodieHub from "../assets/foodieHub.mp4";

export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  github: string;
  live: string;
  video?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Proper-Poll - Real-Time Polling Platform",
    description:
      "Proper-Poll is a modern full-stack real-time polling and survey platform that allows users to create interactive polls, collect live responses, and analyze results through dynamic dashboards. The platform features secure authentication, Google OAuth integration, real-time updates with Socket.IO, and a scalable modular backend architecture.",
    techStack: [
      "React 19 + TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT Authentication",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Zod Validation",
    ],
    features: [
      "🗳️ Create and manage dynamic real-time polls and surveys",
      "⚡ Live poll interactions and instant updates using Socket.IO",
      "📊 Interactive analytics dashboard with response visualization charts",
      "🔐 Secure JWT authentication with Google OAuth integration",
      "📱 Responsive modern UI built with Tailwind CSS and Framer Motion",
      "✅ Robust backend validation and modular API architecture using Zod",
    ],
    github: "https://github.com/shweta-nigam/proper-poll-app",
    live: "https://proper-poll.quest",
    video: properPoll,
  },
  {
    id: 3,
    title: "foodieHub - Food Delivery Mobile App",
    description:
      "A modern food delivery mobile application UI built with React Native and Expo Router. foodieHub focuses on delivering a smooth and scalable mobile experience with authentication flow, onboarding screens, drawer navigation, reusable UI components, and responsive layouts. The app is designed with clean architecture and modern mobile-first UI principles.",
    techStack: [
      "React Native",
      "Expo SDK 55",
      "TypeScript",
      "Expo Router",
      "React Navigation",
      "Context API",
      "React Native Safe Area Context",
    ],
    features: [
      "🍔 Modern and responsive food delivery mobile UI",
      "🔐 Authentication flow with onboarding & login screens",
      "🧭 Drawer navigation and bottom tab navigation setup",
      "📱 Reusable components with scalable folder structure",
      "⚡ Built using Expo Router with TypeScript support",
      "🎨 Clean mobile-first design with responsive layouts",
      "🛒 Multiple app screens including Home, Orders, Search & Profile",
    ],
    github: "https://github.com/shweta-nigam/Food-Delivery-App",
    live: "https://github.com/shweta-nigam/Food-Delivery-App",
    video: foodieHub,
  },
];