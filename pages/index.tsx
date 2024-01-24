// page.tsx
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../src/app/globals.css';
import Head from 'next/head';


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
      <br/>
      <br/>
      <div className="relative z-10 text-center p-8 text-white">
        
        <h1 className="text-black text-5xl font-mono font-bold mb-2">Hector Ménétrier</h1>
        <p className="text-gray-500">CS Student in France 🇫🇷, Denmark 🇩🇰 and Canada 🇨🇦</p>
      </div>

    
      <br/>
      <br/>

        <footer className="text-center p-4 text-gray-300">
          Soon to be Double Degree in CS 🇫🇷 🇨🇦 - URCA-UQAC - Graduating in August 2024
        </footer>

        
      </div>
    </div>
  );
}
