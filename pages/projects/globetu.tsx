/* eslint-disable react/no-unescaped-entities */
// pages/projects/globetu.tsx 
import Head from "next/head";
import Image from "next/image";
import "../../src/app/globals.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const RESPage = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateContent(true);
    }
  }, [inView]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-red-50">
      <Head>
        <title>Glob'Étu | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/ORBROUGE.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        ref={ref}
        className={`${
          animateContent
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-opacity duration-1000 ease-in-out transform`}
      >
        <div className="mx-5">
          <div className=" mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg border-2 border-red-300/50">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Glob'Étu : Our simple solution for exchange students
            </h1>
            <p className="text-gray-600">
              In this report, our team of seven members worked on a project
              known as "Glob’Étu." Our objective was to develop an application
              to assist French students in organizing and streamlining their
              experiences studying abroad.
            </p>
          </div>

          <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Technologies Used
            </h2>
            <div className="flex items-center mb-2 text-gray-600">
              {/* Logo for Figma */}
              <Image
                src="/figma-logo.svg"
                alt="Figma Logo"
                width={8}
                height={8}
                className="w-8 h-8 mr-2"
              />
              <p>Figma</p>
            </div>
            <div className="flex items-center mb-2 text-gray-600">
              {/* Logo for Asana */}
              <Image
                src="/trello-logo.svg"
                alt="Trello Logo"
                width={8}
                height={8}
                className="w-8 h-8 mr-2"
              />
              <p>Trello</p>
            </div>
          </div>

          <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Project Overview
            </h2>
            <p className="text-gray-600">
              Glob’Étu is an innovative digital platform designed to streamline
              the process of studying abroad. The platform addresses the
              challenges faced by students in accessing centralized information
              and managing administrative tasks related to international
              mobility. By combining user-centric design with cutting-edge
              technology, Glob’Étu provides a comprehensive solution to make
              academic mobility more accessible and efficient.
            </p>
          </div>

          <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Key Features
            </h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                <strong>Centralized Information Hub:</strong> Comprehensive
                database of universities, programs, scholarships, housing
                options, and required documentation.
              </li>
              <li>
                <strong>Personalized User Experience:</strong> Tailored
                recommendations and organizational tools based on user profiles,
                preferences, and needs.
              </li>
              <li>
                <strong>Community-Driven Insights:</strong> Peer reviews and
                shared experiences to guide users in making informed decisions.
              </li>
              <li>
                <strong>Institutional Dashboard:</strong> A dedicated interface
                for universities to share mobility opportunities and partnership
                details.
              </li>
            </ul>
          </div>

          <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Design Process
            </h2>
            <p className="text-gray-600">
              The project followed an <strong>Agile methodology</strong>, with
              iterative sprints and user feedback shaping the prototype.
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>
                <strong>Collaborative Design:</strong> The team used{" "}
                <strong>Figma</strong> for wireframing and creating interactive
                user interface designs.
              </li>
              <li>
                <strong>Task Management:</strong> Tools like{" "}
                <strong>Trello</strong> helped organize tasks, plan sprints, and
                track progress.
              </li>
              <li>
                <strong>User Testing:</strong> Conducted usability testing
                sessions to refine the prototype and enhance the user
                experience.
              </li>
            </ul>
          </div>

          <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Challenges & Learnings
            </h2>
            <p className="text-gray-600">
              One of the main challenges was gathering sufficient information
              from French universities to design realistic features.
              <br />
              Time constraints limited the project scope to wireframes and a
              conceptual prototype, but this enabled the team to focus on
              refining core functionalities.
              <br />
              Working in a multidisciplinary team fostered collaboration,
              adaptability, and a deeper understanding of Agile practices.
            </p>
          </div>

          <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Future Potential
            </h2>
            <p className="text-gray-600">
              While the current prototype focuses on the French student exchange
              process, the project has significant potential for growth and
              scalability. Possible future enhancements include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>
                <strong>Mobile Application:</strong> Developing a mobile app to
                provide students with on-the-go accessibility and convenience.
              </li>
              <li>
                <strong>AI Integration:</strong> Introducing advanced AI
                algorithms for personalized recommendations and automated
                processing of documents.
              </li>
              <li>
                <strong>Global Expansion:</strong> Adapting the platform to
                support academic mobility worldwide, covering universities and
                programs in various countries.
              </li>
            </ul>
          </div>

          <br />
        </div>
      </div>
    </div>
  );
};

export default RESPage;
