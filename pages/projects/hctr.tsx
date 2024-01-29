/* eslint-disable react/no-unescaped-entities */
// pages/projects/hctr.tsx
import Head from 'next/head';
import Image from 'next/image';
import '../../src/app/globals.css';
import { useState } from 'react';

const HctrPage = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <Head>
        <title>This Website | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/hctr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4 text-black">Creation of this Website</h1>
          <p className="text-gray-600">
            Welcome to this website! I created this website to showcase my projects and skills. As you can see, this website is very simple. I wanted to keep it simple and clean, so I decided to use a minimalist design. I made it without using any template or low-code/no-code tools. I hope you enjoy your visit!
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Technologies Used</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-600 flex items-center mb-2">
              <Image src="/typescript-logo.svg" alt="TypeScript Logo" width={16} height={16} className="w-8 h-8 mr-2" />
              TypeScript
            </li>
            <li className="text-gray-600 flex items-center mb-2">
              <Image src="/nextjs-logo.svg" alt="Next.js Logo" width={16} height={16} className="w-8 h-8 mr-2" />
              Next.js
            </li>
            <li className="text-gray-600 flex items-center mb-2">
              <Image src="/tailwindcss-logo.svg" alt="Tailwind CSS Logo" width={16} height={16} className="w-8 h-8 mr-2" />
              Tailwind CSS
            </li>
            <li className="text-gray-600 flex items-center mb-2">
              <Image src="/github-logo.svg" alt="Github Logo" width={16} height={16} className="w-8 h-8 mr-2" />
              Github
            </li>
            <li className="text-gray-600 flex items-center">
              <Image src="/blender-logo.png" alt="Blender Logo" width={16} height={16} className="w-8 h-8 mr-2" />
              Blender
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Development Process</h2>
          <p className="text-gray-600">
            The site is developed using Next.js, a React framework that makes it easy to build fast and efficient web applications. Styling is handled with Tailwind CSS, providing a utility-first approach to design.
            <br/>
            I never used these two before, so I had to learn them from scratch. I'm also writing in TypeScript, which I already knew because I had a few courses about it in Denmark. It is still a bit challenging but very interesting to work with.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">About the orbs</h2>
          <p className="text-gray-600">
            For this website, I wanted to create a unique design. I decided to create a 3D animation of rotating orbs with Blender. 
            I then exported the animation as a video and used it as a header for every page of the website.
            <br/>
            Every page has a different color, shape and animation (but always rotating anticlockwise) for the orbs, and the color will be used as a general CSS theme for the page (work in progress).
          </p>
          <div
            className={`relative cursor-pointer overflow-hidden ${isImageExpanded ? 'h-full' : 'h-32'}`}
            onClick={handleImageClick}
          >
            <Image src="/blender_screen.png" alt="Blender Logo" width={1920} height={1080} className="flex items-center" />
          </div>
          {!isImageExpanded && (
            <p className="text-blue-500 cursor-pointer mt-2" onClick={handleImageClick}>
              Click to view the full image
            </p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">Deployment Process</h2>
          <p className="text-gray-600">
            This website is a constant work in progress and is getting regular updates. I manage my source code on Github with regular commits.
            <br/>
            The website is hosted on Github Pages. I'm using Github Actions to automatically deploy the website when I push to the main branch. 
            <br/>
            I use a custom domain name (hctr.store) that I bought on Amen.fr. If you still wonder why I chose this domain name, it's because it's my name without the vowels! 
          </p>
        </div>

      </div>
    </div>
  );
};

export default HctrPage;
