import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
  };

  const projects = [
    {
      title: "Ball Bolt",
      description: `Ball Bolt is an innovative digital soccer training app designed
        for young soccer enthusiasts. It combines high-quality materials
        with a mobile training app, allowing users to train anytime,
        anywhere. I contributed to the development of the app's user
        interface and integrated advanced training modules.`,
      link: "https://www.ballbolt.kr/",
      image: "/images/ballbolt.png",
    },
    {
      title: "Applotto",
      description: `Applotto is a cash prize instant-win mobile gaming platform. I led
        the development of the frontend using modern web technologies,
        ensuring a seamless and engaging user experience. The project
        involved integrating secure payment gateways and real-time game
        updates.`,
      link: "https://www.applotto.co/",
      image: "/images/applotto.png",
    },
    {
      title: "NomadHer",
      description: `NomadHer is a community-driven app for female solo travelers. I
        worked on enhancing the app's social features, allowing users
        to connect and share travel experiences. The project focused on
        creating a safe and inclusive environment for women travelers.`,
      link: "https://www.nomadher.com/",
      image: "/images/nomadher.png",
    },
    {
      title: "Innosonian",
      description: `Innosonian is a leader in CPR training solutions. I contributed to
        the development of their online training platform, which provides
        interactive and comprehensive CPR training modules. The project
        aimed to improve accessibility and engagement in life-saving skills
        education.`,
      link: "https://innosonian.global/",
      image: "/images/innosonian.png",
    },
  ];

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <header className="mb-12">
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Recent Projects
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            A showcase of my recent work and contributions.
          </motion.p>
        </header>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-4  mx-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              style={{ height: "750px" }}
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {project.title}
              </a>
            </motion.div>
          ))}
        </Slider>
      </main>
    </div>
  );
}
