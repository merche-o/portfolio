"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Projects from "./projects";
export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/profile.png"
              alt="Profile Image"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <motion.h1
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Olivier Mercher
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Senior Lead Mobile Developer
          </motion.p>
          <p className="text-gray-500 mt-2">Remote • Seoul • +821025092425</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://linkedin.com/in/omercher"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/merche-o"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </header>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Dynamic Lead mobile developer with a strong background in leading
            the development and implementation of cross-platform applications.
            Proven ability to manage cross-functional teams, deliver impactful
            projects, and enhance user experiences. Expertise in project
            coordination, client management, and technical troubleshooting.
          </motion.p>
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Projects />
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
          <div className="space-y-6">
            <motion.div
              className="border-l-2 border-gray-200 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold">Applotto</h3>
              <p className="text-gray-600">
                Lead Developer • January 2024 - now
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Spearheaded the development of the MVP application using
                  Flutter for the frontend and Supabase for the backend.
                </li>
                <li>
                  Sole developer in a 5-person team, responsible for the
                  complete technical execution of the project.
                </li>
                <li>
                  Implemented CI/CD pipelines with Codemagic to enhance
                  development efficiency.
                </li>
                <li>
                  Successfully launched the MVP, crucial in securing funding for
                  full development.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="border-l-2 border-gray-200 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="font-bold">Ballbolt</h3>
              <p className="text-gray-600">Lead Developer • October 2023 - now</p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Developed and launched a mobile application using React
                  Native, achieving over 300 users within one month.
                </li>
                <li>
                  Led the project from development through deployment, handling
                  all technical aspects and optimizing the app for performance.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="border-l-2 border-gray-200 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="font-bold">Nomadher</h3>
              <p className="text-gray-600">
                Fullstack Developer • January 2023 - July 2023
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Developed and optimized a mobile application using React
                  Native, focused on connecting women travelers for tips and
                  companionship.
                </li>
                <li>
                  Implemented key features including search and matching
                  functionality, and enhanced app performance.
                </li>
                <li>
                  Utilized Redux for state management and integrated GitHub
                  Actions for CI/CD pipelines.
                </li>
                <li>
                  Contributed to the application’s success, achieving over 300
                  users within one month of release.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="border-l-2 border-gray-200 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="font-bold">Innosonian</h3>
              <p className="text-gray-600">
                Technical Project Manager • October 2018 - September 2021
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Spearheaded the development of an iOS application for
                  monitoring CPR manikin vital signals, ensuring accurate
                  real-time feedback for proper CPR technique.
                </li>
                <li>
                  Utilized native iOS development tools, including Swift and
                  SwiftUI, and integrated CoreBluetooth for manikin
                  connectivity.
                </li>
                <li>
                  Led the frontend/mobile development within a 10-person
                  engineering team, managing all aspects of the app&apos;s
                  interface and user experience.
                </li>
                <li>
                  Achieved significant milestones, including partnerships with
                  the American Red Cross and deployments in hospitals and
                  universities across the US and Europe.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="border-l-2 border-gray-200 pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="font-bold">Ubudu Asia</h3>
              <p className="text-gray-600">
                Technical Project Manager • June 2016 - September 2018
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Managed all technical aspects of indoor localization projects
                  across Asia, utilizing proprietary devices such as iBeacon and
                  ultra-wide band technologies.
                </li>
                <li>
                  Led key projects including an award-winning AR indoor location
                  app developed in collaboration with Hong Kong&apos;s MTR and
                  Madame Tussauds.
                </li>
                <li>
                  Coordinated with international teams based in France, Poland,
                  and Hong Kong, overseeing technical implementation on the Hong
                  Kong side.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Flutter",
              "Supabase",
              "iOS Development",
              "Swift",
              "SwiftUI/Combine",
              "React Native",
              "React",
              "C++",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium w-20">French:</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium w-20">English:</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium w-20">Korean:</span>
              <span className="text-yellow-500">★★☆☆☆</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">EPITECH, Paris</h3>
              <p className="text-gray-600">
                Master in Information Technology • September 2010 - January 2016
              </p>
              <p className="mt-2 text-gray-700">
                Renowned programming school in Europe, innovative way to learn
                programming through projects. Followed courses in C/C++
                programming, 2D/3D graphics, system administration, and Unix
                systems.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
