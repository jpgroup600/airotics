export type List = {
  heading: string;
  techs: string[];
  description: string;
  videoSrc: string;
};

export const lists: List[] = [
  {
    heading: "Technology & innovation",
    techs: [
      "AI solutions",
      "Cloud architecture",
      "Data analytics",
      "IoT integration",
      "Blockchain",
    ],
    description:
      "Building intelligent systems where innovation meets efficiency, driving growth and unlocking competitive advantage with every solution.",
    videoSrc: "/home/services/0.mp4",
  },
  {
    heading: "Digital transformation",
    techs: ["Strategy consulting", "Process automation", "System integration"],
    description:
      "It all begins with transformation. We use strategic insights to modernize or revolutionize your operations, from your infrastructure to your workflows.",
    videoSrc: "/home/services/1.mp4",
  },
  {
    heading: "Enterprise solutions",
    techs: ["Platform development", "Custom software", "Technical support"],
    description:
      "Creating powerful enterprise platforms and applications that capture attention, inspire confidence and accelerate business growth.",
    videoSrc: "/home/services/2.mp4",
  },
];
