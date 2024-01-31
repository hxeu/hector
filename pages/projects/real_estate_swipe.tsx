/* eslint-disable react/no-unescaped-entities */
// pages/projects/real_estate_swipe.tsx
import Head from 'next/head';
import Image from 'next/image';
import '../../src/app/globals.css';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
    <div className="min-h-screen relative overflow-hidden bg-orange-50">
      <Head>
        <title>Real Estate Swipe | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/real_estate_swipe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        ref={ref}
        className={`${
          animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-opacity duration-1000 ease-in-out transform`}
      >

      <div className="mx-5">
        <div className=" mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg border-2 border-orange-300/50">
          <h1 className="text-4xl font-bold mb-4 text-black">Real Estate Swipe : Our housing solution for students</h1>
          <p className="text-gray-600">
            During my stay in Denmark in 2023, I had a school project in team to create an innovative solution to a known problem. We decided to create a mobile application to help (international) students find housing because we struggled too!
            <br/>
            We called it "Real Estate Swipe".
          </p>
        </div>
      
        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Technologies Used</h2>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for React Native */}
            <Image src="/reactnative-logo.svg" alt="React Native Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>React Native</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Expo */}
            <Image src="/expo-logo.svg" alt="Expo Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Expo</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Figma */}
            <Image src="/figma-logo.svg" alt="Figma Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Figma</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Github */}
            <Image src="/github-logo.svg" alt="Github Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Github</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Asana */}
            <Image src="/asana-logo.svg" alt="Asana Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Asana</p>
          </div>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Process flow</h2>
          <p className="text-gray-600">
            The team was composed of 5 people. A German Global Business Engineering student, a Spanish Mechanical Engineering (and Design) student and three French Software Engineering students (including me).
            <br/>
            I won't talk about the process for the Business part or the Design part, but I'll talk about the process for the Software part.
            <br/>
            We used Asana to organize our tasks and Github for our code.
            
          </p>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Designing our App</h2>
          <p className="text-gray-600">
            We used Figma to design our app. We started by creating a moodboard to get inspiration for the design of our app. We then created a prototype of our app with the different screens and the different functionalities.
            <br/>
            A main feature we wanted to implement was the "swipe" feature. We wanted to make it easy for students to find housing by swiping left or right on the different housing offers.
            <br/>
            We also had a logo for our app made by our design student.
          </p>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Time to code</h2>
          <p className="text-gray-600">
            We used React Native to develop our app and Expo to test our app on our phones. I had to learn React Native from scratch, but I already knew React, so it was not too hard to learn.
            <br/>
            We had a lot of fun developing this app, and we learned a lot about React Native and mobile development.
            <br/>
            We had a lot of issues with Expo, but we managed to fix them.
          </p>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">In depth</h2>
          <p className="text-gray-600 mb-4">
            Learn more about our project by reading our Software development report, illustred by screenshots (fully written in English) :
          </p>
          <iframe
            src="/SPR_Software_part.pdf"
            width="100%"
            height="500px"
            title="Document PDF">
          </iframe>
        </div>
        <br/>
      </div>
      </div>
    </div>
  );
}

export default RESPage;