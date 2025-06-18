export type WorkDetail =
  | {
      heading: string;
      description: string;
      imgSrc: string;
      isPlayActive: true;
      videoSrc: string;
    }
  | {
      heading: string;
      description: string;
      imgSrc: string;
      isPlayActive: false;
    };

export type Work = {
  heading: string;
  subheading: string;
  description: string;
  imgSrc: string;
  gradient: { to: string; from: string };
  marqueeColor: string;
  details: WorkDetail[];
};

export const works: Work[] = [
  {
    heading: "tech",
    subheading: "Everyday Life with Robots",
    description:
      "We are preparing for a world where robots naturally blend into our daily lives. A grand experiment to accelerate this future has begun at 1784. Naver's robotics, autonomous driving, AI, 5G, and cloud technologies are being integrated with cutting-edge infrastructure. The world's first robot-friendly building – Certified by the Smart City Association, 2022.",
    imgSrc: "/home/work/tech-main-1.jpg",
    marqueeColor: "#ffffff",
    gradient: { to: "#7427ff", from: "#002aff" },
    details: [
      {
        heading: "clova facesign",
        description:
          "A variety of daily support services, all managed through a single app.",
        imgSrc: "/home/work/tech-detail-1-1.jpg",
        isPlayActive: true,
        videoSrc: "/",
      },
      {
        heading: "work occa",
        description:
          "Control your work environment anytime, anywhere in the building via mobile.",
        imgSrc: "/home/work/tech-detail-1-2.jpg",
        isPlayActive: false,
      },
      {
        heading: "robotic design",
        description:
          "Each floor is equipped with a separate ventilation system.",
        imgSrc: "/home/work/tech-detail-1-3.jpg",
        isPlayActive: false,
      },
      {
        heading: "naver care",
        description:
          "Consultations were carried out with infectious disease specialists and industrial engineering experts.",
        imgSrc: "/home/work/tech-detail-1-4.jpg",
        isPlayActive: true,
        videoSrc: "/",
      },
    ],
  },
  {
    heading: "new normal",
    subheading: "Designed Differently from the Start",
    description:
      "We are creating spaces where everyone can work safely, even in a post-pandemic world, through a sustainable and standardized system.",
    imgSrc: "/home/work/new-normal-main-1.jpg",
    marqueeColor: "#000000",
    gradient: { to: "#d6fe51", from: "#68d840" },
    details: [
      {
        heading: "normal robot",
        description: "Healthcare services enhanced by Naver’s technology.",
        imgSrc: "/home/work/new-normal-detail-1-1.jpg",
        isPlayActive: false,
      },
      {
        heading: "cleaning bot",
        description:
          "From Robot Delivery and Food Orders to Parking Location Checks",
        imgSrc: "/home/work/new-normal-detail-1-2.jpg",
        isPlayActive: false,
      },
      {
        heading: "replace human",
        description: "Lighting, temperature, and ventilation",
        imgSrc: "/home/work/new-normal-detail-1-3.jpg",
        isPlayActive: false,
      },
      {
        heading: "naver bot",
        description: "To prevent infection",
        imgSrc: "/home/work/new-normal-detail-1-4.jpg",
        isPlayActive: false,
      },
    ],
  },
];
