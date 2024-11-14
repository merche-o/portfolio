export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Olivier Mercher</h1>
          <p className="text-xl text-gray-600">Senior Mobile Developer</p>
          <p className="text-gray-500 mt-2">Seoul • +821025092425</p>
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700">
            Innovative and results-driven Mobile and Technical Project Manager
            with extensive experience in leading development and implementation
            of mobile applications and technology solutions. Proven track record
            of managing cross-functional teams, delivering high-impact projects,
            and improving user experiences. Skilled in iOS development, project
            coordination, client management, and technical troubleshooting.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-bold">Applotto</h3>
              <p className="text-gray-600">
                Lead Developer • January 2024 – July 2024
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
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-bold">Ballbolt</h3>
              <p className="text-gray-600">Lead Developer • October 2023</p>
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
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-bold">Nomadher</h3>
              <p className="text-gray-600">
                Fullstack Developer • January 2023 – July 2023
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
                  The app received multiple awards from Google and was
                  highlighted by the Apple Store.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-bold">Innosonian</h3>
              <p className="text-gray-600">
                Technical Project Manager • October 2018 – September 2021
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Spearheaded the development of an iOS application for
                  monitoring CPR manikin vital signals.
                </li>
                <li>
                  Led the frontend/mobile development within a 10-person
                  engineering team.
                </li>
                <li>
                  Achieved significant milestones, including partnerships with
                  the American Red Cross.
                </li>
                <li>
                  Adapted to COVID-19 by developing a web platform using React.
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-bold">Ubudu Asia</h3>
              <p className="text-gray-600">
                Technical Project Manager • June 2016 – September 2018
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>
                  Managed all technical aspects of indoor localization projects
                  across Asia.
                </li>
                <li>
                  Led key projects including an award-winning AR indoor location
                  app.
                </li>
                <li>
                  Coordinated with international teams and managed client
                  relationships.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "iOS Development",
              "Swift",
              "SwiftUI/Combine",
              "C++",
              "React Native",
              "React",
              "Flutter",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-medium w-20">French:</span>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium w-20">English:</span>
              <span className="text-yellow-500">★★★★☆</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium w-20">Korean:</span>
              <span className="text-yellow-500">★★☆☆☆</span>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">EPITECH, Paris</h3>
              <p className="text-gray-600">
                Master in Information Technology • September 2010 – January 2016
              </p>
              <p className="mt-2 text-gray-700">
                Renowned programming school in Europe, innovative way to learn
                programming through projects. Followed courses in C/C++
                programming, 2D/3D graphics, system administration, and Unix
                systems.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
