export interface Executive {
  image: string;
  name: string;
  post: string;
  history: string[];
}

export const executives: Executive[] = [
  {
    image: "/agency/team/ceo.png",
    name: "David Kim",
    post: "CEO",
    history: [
      "Big-Data Analytics Visionary",
      "Former Director of AI·IoT·Big-Data Strategy",
      "Research Engineer, High-Performance Analytics",
      "Industry Advisory Committee Member",
    ],
  },
  {
    image: "/agency/team/cto.png",
    name: "Shaziab",
    post: "CTO",
    history: [
      "M.S. in Computer Science, AI & Smart System Design",
      "Former Senior AI Researcher at Huawei Smart Devices",
      "7+ Years of Experience in AI Systems, Drones & Unmanned Vehicles",
      "Specialized in Advanced Innovation, Smart Technologies & Autonomous Solutions",
      "Award of olympiad in Engineering",
    ],
  },
  {
    image: "/agency/team/cto2.png",
    name: "T. Khan",
    post: "CTO",
    history: [
      "Ph.D. in Machine Learning & Autonomous Devices, Trinity College Dublin",
      "Former Senior Software Engineer at Google, Poland",
      "Former Researcher at Tesla, Germany",
      "6+ Years of Experience in AI & Autonomous Systems Research",
    ],
  },
  {
    image: "/agency/team/cso.png",
    name: "Jacob C",
    post: "COO",
    history: [
      "Founder & Operator with hands-on engineering roots",                                                                                                            
      "Led AI R&D consulting & delivery across multiple enterprise clients",                                                                                           
      "Designed and shipped production-grade tax automation platforms",                                                                                                
      "Bridges technical execution and business strategy as a builder-turned-operator",                                                                                
      "Specializes in translating complex AI systems into scalable business solutions"
    ],
  },
];

export const team = [
  { image: "/agency/team/manager.jpeg", name: "Mina J", post: "Manager" },
  { image: "/agency/team/designer.jpeg", name: "Zoe C", post: "Designer" },
  { image: "/agency/team/marketer.jpeg", name: "Didar S", post: "Marketer" },
  {
    image: "/agency/team/developer.jpeg",
    name: "Imran",
    post: "Head Developer",
  },
  {
    image: "/agency/team/developer2.jpeg",
    name: "Hamad",
    post: "Head Developer",
  },
];
