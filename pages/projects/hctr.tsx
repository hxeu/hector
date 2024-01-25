// pages/projects/hctr.tsx
import Head from 'next/head';
import '../../src/app/globals.css';

const ProjectDetail = () => {


  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <Head>
        <title>This website | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/hctr.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        </div>
  );
}

export default ProjectDetail;
