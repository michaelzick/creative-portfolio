export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  duration: string;
  team: string;
  client: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  images: string[];
  process: { phase: string; description: string }[];
}

export const projectsData: Record<string, Project> = {
  "aura-ecommerce": {
    id: "aura-ecommerce",
    title: "Aura E-Commerce",
    subtitle: "Sustainable Fashion Platform",
    role: "UX/UI Design & Frontend",
    year: "2025",
    duration: "4 months",
    team: "3 designers, 2 developers",
    client: "Aura Fashion Co.",
    heroImage: "https://images.unsplash.com/photo-1760008486593-a85315610136?q=80&w=2400&auto=format&fit=crop",
    overview: "A comprehensive redesign for a modern sustainable fashion brand. The goal was to create an immersive, minimalist shopping experience that highlights the organic textures of the clothing while maintaining a frictionless checkout flow.",
    challenge: "The existing platform suffered from high cart abandonment rates and poor mobile conversion. Users found the navigation confusing and the checkout process too lengthy.",
    solution: "We implemented a streamlined single-page checkout, introduced immersive product galleries with zoom functionality, and created a sustainable materials filter that aligns with the brand's eco-conscious values.",
    results: [
      { metric: "42%", label: "Increase in mobile conversions" },
      { metric: "28%", label: "Reduction in cart abandonment" },
      { metric: "3.2x", label: "Increase in average session duration" }
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
    ],
    process: [
      {
        phase: "Discovery",
        description: "Conducted user interviews with 15 sustainable fashion shoppers and analyzed competitor platforms to identify pain points."
      },
      {
        phase: "Strategy",
        description: "Defined key user journeys and prioritized features based on business impact and user needs."
      },
      {
        phase: "Design",
        description: "Created high-fidelity prototypes with extensive micro-interactions and responsive breakpoints."
      },
      {
        phase: "Development",
        description: "Built the frontend using React and Tailwind CSS, ensuring pixel-perfect implementation."
      }
    ]
  },
  "fintech-dashboard": {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    subtitle: "Financial Analytics Platform",
    role: "Product Design",
    year: "2024",
    duration: "6 months",
    team: "2 designers, 5 developers",
    client: "Nexus Financial",
    heroImage: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?q=80&w=2400&auto=format&fit=crop",
    overview: "An intuitive web application dashboard for a new financial technology startup. Focused on data visualization, ensuring complex analytics are presented in a clean, digestible format without overwhelming the user.",
    challenge: "Financial data is inherently complex. Users needed to understand portfolio performance, risk metrics, and market trends at a glance without feeling overwhelmed by numbers.",
    solution: "Designed a modular dashboard with customizable widgets, implemented progressive disclosure for detailed metrics, and created an intuitive color-coded system for quick data comprehension.",
    results: [
      { metric: "89%", label: "User satisfaction score" },
      { metric: "65%", label: "Faster task completion" },
      { metric: "4.8/5", label: "App store rating" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b91d7a?q=80&w=2000&auto=format&fit=crop"
    ],
    process: [
      {
        phase: "Research",
        description: "Shadowed 10 financial analysts and conducted usability testing on existing tools."
      },
      {
        phase: "Information Architecture",
        description: "Organized complex data hierarchies and defined clear navigation patterns."
      },
      {
        phase: "Visual Design",
        description: "Developed a design system with data visualization components and accessibility standards."
      },
      {
        phase: "Iteration",
        description: "Conducted 3 rounds of user testing and refined interactions based on feedback."
      }
    ]
  },
  "nexus-mobile-app": {
    id: "nexus-mobile-app",
    title: "Nexus Mobile App",
    subtitle: "Productivity & Task Management",
    role: "Lead Interface Designer",
    year: "2023",
    duration: "5 months",
    team: "4 designers, 6 developers",
    client: "Nexus Labs",
    heroImage: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?q=80&w=2400&auto=format&fit=crop",
    overview: "A productivity application designed to seamlessly blend task management with calendar integrations. The interface relies heavily on micro-interactions and a calming monochromatic color palette.",
    challenge: "Users were juggling multiple apps for tasks, calendar, and notes. The challenge was to create a unified experience without adding cognitive load.",
    solution: "Designed a contextual interface that adapts based on time of day and user behavior. Introduced smart suggestions and gesture-based interactions for quick task management.",
    results: [
      { metric: "2.1M", label: "Downloads in first month" },
      { metric: "4.9/5", label: "User rating" },
      { metric: "47%", label: "Daily active users" }
    ],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
    ],
    process: [
      {
        phase: "Concept",
        description: "Explored interaction patterns and conducted competitive analysis of productivity apps."
      },
      {
        phase: "Prototyping",
        description: "Built interactive prototypes to test gesture interactions and micro-animations."
      },
      {
        phase: "Design System",
        description: "Created a comprehensive component library with dark mode and accessibility features."
      },
      {
        phase: "Launch",
        description: "Collaborated with marketing on App Store presence and onboarding experience."
      }
    ]
  }
};
