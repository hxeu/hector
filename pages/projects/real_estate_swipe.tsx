// pages/projects/real_estate_swipe.tsx
import Head from 'next/head';
import '../../src/app/globals.css';

const ProjectDetail = () => {


  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title> Real Estate Swipe | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/real_estate_swipe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        {/* Ajoutez ici d'autres sections de détails du projet si nécessaire */}
      </div>
  );
};

export default ProjectDetail;
