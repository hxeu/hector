// pages/projects/hctr.tsx
import Head from 'next/head';
import '../../src/app/globals.css';

const HctrPage = () => {
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
      <div className="container mx-auto p-8">
        {/* Section: Introduction */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4">Creation of this Website</h1>
          <p className="text-gray-600">
            Welcome to this website! I created this website to showcase my projects and skills. I also wanted to learn more about Next.js and Tailwind CSS. I hope you enjoy your visit!
          </p>
        </div>
        {/* Section: Technologies Used */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <ul className="list-disc pl-4">
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        {/* Section: Development Process */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Development Process</h2>
          <p className="text-gray-600">
            The site was developed using Next.js, a React framework that makes it easy to build fast and efficient web applications. Styling is handled with Tailwind CSS, providing a utility-first approach to design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HctrPage;
