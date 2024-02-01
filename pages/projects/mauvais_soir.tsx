/* eslint-disable react/no-unescaped-entities */
// pages/projects/[projectId].tsx
import Head from 'next/head';
import Image from 'next/image';
import '../../src/app/globals.css';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const ProjectDetail = () => {
  const [isFirstImageExpanded, setIsFirstImageExpanded] = useState(false);
  const [isSecondImageExpanded, setIsSecondImageExpanded] = useState(false);
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const handleFirstImageClick = () => {
    setIsFirstImageExpanded(!isFirstImageExpanded);
  };

  const handleSecondImageClick = () => {
    setIsSecondImageExpanded(!isSecondImageExpanded);
  };

  const handleVideoClick = () => {
    setIsVideoExpanded(!isVideoExpanded);
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
    <div className="min-h-screen bg-purple-50">
      <Head>
        <title> Mauvais Soir | Hector Ménétrier</title>
      </Head>
      <div className="relative h-96 bg-black">
        <video autoPlay loop muted playsInline className="h-full w-full">
          <source src="/mauvais_soir.webm" type="video/webm" />
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
        <div className=" mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg border-2 border-purple-300/50">
          <h1 className="text-4xl font-bold mb-4 text-black">"Mauvais Soir" ("Bad Evening" in french)</h1>
          <p className="text-gray-600">
            Here, i'll talk about my monthly video series about my life. I started this series in January 2022, and I'm still doing it today.
            <br/>
             I release a new ~1min video every month, showing what i filmed with my phone during that month with some music, and I try to make it look good.
            <br/>
            I'm not a professional video editor, but I really enjoy doing it. I'm also learning a lot about video editing and it is a great way to keep memories of my life.
          </p>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Technologies Used</h2>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Premiere Pro */}
            <Image src="/premierepro-logo.svg" alt="Adobe Premiere Pro Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Adobe Premiere Pro</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for After Effects */}
            <Image src="/aftereffects-logo.svg" alt="Adobe After Effects Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Adobe After Effects</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Sony Vegas Pro */}
            <Image src="/svp-logo.svg" alt="Sony Vegas Pro Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Sony Vegas Pro (was using this before Premiere Pro)</p>
          </div>
          <div className="flex items-center mb-2 text-gray-600">
            {/* Logo for Instagram */}
            <Image src="/instagram-logo.svg" alt="Instagram Logo" width={8} height={8} className="w-8 h-8 mr-2" />
            <p>Instagram</p>
          </div>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Derush</h2>
          <p className="text-gray-600">
            The first step is to derush all the videos I filmed during the month. I use Adobe Premiere Pro for that. I watch all the videos and I select the best parts. It usually takes me twice the time of the videos to derush it. For example, if I filmed 10 minutes of videos, it will take me 20 minutes to derush it. 
          </p>
          <div
            className={`relative cursor-pointer overflow-hidden ${isFirstImageExpanded ? 'h-full' : 'h-32'}`}
            onClick={handleFirstImageClick}
          >
            <Image src="/pp-before.png" alt="Premiere Pro Screen" width={1920} height={1080} className="flex items-center" />
          

          {!isFirstImageExpanded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-purple-200">Click to view the full image</p>
              </div>
            )}
          {isFirstImageExpanded && (
            <p className="text-purple-600 mt-2">
              This is the screen of my timelime before derushing. I have 18 minutes of videos, and I will select the best parts to make a 1 minute video.
            </p>
          )}
          </div>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Time to edit</h2>
          <p className="text-gray-600">
            Once I have all the videos I want to use, I start editing. I still use Adobe Premiere Pro for that. I add music, transitions, effects, and I try to make it look good. I usually spend 1 hour max editing a video.
            <br/>
            I also add subtitles to the video, usually the lyrics from the music playing. Premiere Pro has a feature that automatically generates subtitles, so it's pretty easy to sync (but i always have to rewrite the lyrics because it's not always accurate).
            <br/>

          </p>
          <div
            className={`relative cursor-pointer overflow-hidden ${isSecondImageExpanded ? 'h-full' : 'h-32'}`}
            onClick={handleSecondImageClick}
          >
            <Image src="/pp-after.png" alt="Premiere Pro Screen" width={1920} height={1080} className="flex items-center" />
          
          {!isSecondImageExpanded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <p className="text-purple-200">Click to view the full image</p>
            </div>
          )}
          {isSecondImageExpanded && (
            <p className="text-purple-600 mt-2">
              Here we have the final montage of the video. As you can see, it's now 1 minute long!
            </p>
          )}
          </div>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Gimmicks</h2>
          <p className="text-gray-600">
            I have some gimmicks to every video. I add a "Mauvais Soir" tag at the end of the videos that I made with Adobe After Effects. I'm not a pro at After Effects, but I'm satisfied with it.
            <br/>
            There is also someone different (a friend) shouting the current month (in french) in every video. This is often the only time there is the sound of someone talking in the video, anything else is just footage synced with the music.
            <br/>
            The very begginning of the video is always the same, a transparent text of the current month on a black background. I am able to use this as a thumbnail for the video on Instagram and the consistancy looks great on my profile page.
          </p>
          <br/>
          <div className="relative h-96 bg-black">
            <video autoPlay loop muted playsInline className="h-full w-full">
              <source src="/mauvais_soir_tag.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Upload</h2>
          <p className="text-gray-600">
            Once the video is ready, I upload it to my Instagram account.
            <br/>
            Before doing so, I ask my friends showing in the video if they are okay with me posting it. I also ask them if they want to be tagged in the video.
            <br/>
            I don't do it for the views, I do it for the memories. That's why my account is private and I don't use hashtags. I'm sure I will enjoy watching these videos in a few years! ☺️
          </p>
        </div>

        <div className="mt-8 container mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Example : Final Product for September 2023!</h2>
          <p className="text-gray-600 mb-4">
            Enjoy the highlights of September 2023, my first month in Canada. I hope you find it interesting!
          </p>
          <div className="flex justify-center items-center">
          <video controls playsInline className='size-1/5'>
            <source src="/mauvais_soir_septembre_2023.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>

        <br/>
      </div>
    </div>
    </div>
  );
};

export default ProjectDetail;
