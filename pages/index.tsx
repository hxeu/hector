// index.tsx
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';
import '../src/app/globals.css';
import ProjectsList from '../components/ProjectsList';

export default function Page() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimateContent(true);
    }
  }, [inView]);

  const projects = [
    { id: 'hctr', title: 'My Website (hctr.store) 💻', description: 'How did I make this? 👨‍💻', date: '01/2024'},
    { id: 'mauvais_soir', title: '"Mauvais Soir" 🌓', description: 'My monthly video series about my life! 🎥', date: '01/2022 - Today' },
    { id: 'real_estate_swipe', title: 'Danish Real Estate App 🏢', description: 'Learn more about a school project I did in Denmark. 📱', date: '06/2023' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <Head>
        <title>Home | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/main.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        ref={ref}
        className={`${
          animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-opacity duration-1000 ease-in-out transform`}
      >
        <br />
        <br />
        <div className="relative z-10 text-center p-8">
          <h1 className="text-black text-5xl font-mono font-bold mb-2 tracking-tight">Hector Ménétrier</h1>
          <p className="text-gray-500">CS Student in France 🇫🇷, Denmark 🇩🇰 and Canada 🇨🇦</p>
        </div>

        <div className="text-center p-4 text-gray-400">
          Soon to be Double Computer Science Graduate 🇫🇷 - 🇨🇦 - URCA-UQAC - Graduating in August 2024
        </div>

        {/* Section des projets */}
        <div className="mt-8 mx-5">
          <h2 className="text-3xl font-semibold mb-4 text-center font-mono text-black">My work :</h2>
          <ProjectsList projects={projects} />
          <br/>
        </div>
      </div>
    </div>
  );
}
