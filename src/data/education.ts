export type Education = {
  school: string;
  degree: string;
  period?: string;
  description?: string;
};

export const education: Education[] = [
  {
    school: "EPITECH — European Institute of Technology",
    degree: "Master's degree in Expert in Information Technology",
    period: "Paris, France",
    description:
      "Renowned programming school in Europe, innovative project-based approach to learning programming.",
  },
  {
    school: "Keimyung University",
    degree: "Exchange year — Game and Mobile contents",
    period: "Daegu, South Korea",
  },
];
