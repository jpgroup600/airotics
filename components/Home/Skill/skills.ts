export type Skill = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
};

export const skills: Skill[] = [
  {
    id: "01",
    title: "Beauty",
    description:
      "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
    imgUrl: "/home/skill/bento3.webp",
  },
  {
    id: "02",
    title: "Thought",
    description:
      "As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.",
    imgUrl: "/home/skill/creative-web-design.webp",
  },
  {
    id: "03",
    title: "Impact",
    description:
      "Designing tailor made solutions that resonate with your customers and drives them to act.",
    imgUrl: "/home/skill/back-end.webp",
  },
];
