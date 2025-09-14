'use client';

import { useState, useRef, useEffect } from 'react';

interface VideoIntroProps {
  onComplete: () => void;
}

const VideoIntro = ({ onComplete }: VideoIntroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Handle video loading
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        video.play().catch((error) => {
          console.error('Video play error:', error);
          setVideoError(true);
          // Auto-skip if video can't play
          setTimeout(() => onComplete(), 1000);
        });
      };

      // Handle video end
      const handleVideoEnd = () => {
        setIsVideoEnded(true);
        setTimeout(() => {
          onComplete();
        }, 500);
      };

      // Handle video error
      const handleError = () => {
        console.error('Video loading error');
        setVideoError(true);
        setTimeout(() => onComplete(), 1000);
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('ended', handleVideoEnd);
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('ended', handleVideoEnd);
        video.removeEventListener('error', handleError);
      };
    }
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 md:p-0">
      {/* Video Container */}
      <div className="relative w-full h-full md:w-full md:h-full flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-auto max-h-[70vh] md:max-w-full md:max-h-full md:object-contain object-contain"
          muted
          playsInline
          preload="auto"
        >
          <source src="/opening.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-4 md:top-8 md:right-8 bg-black bg-opacity-50 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-opacity-75 transition-all duration-300 text-xs md:text-sm"
        >
          Skip Intro
        </button>

        {/* Loading indicator for slower connections */}
        {!isVideoLoaded && !videoError && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
              <p className="text-gray-300">Loading...</p>
            </div>
          </div>
        )}

        {/* Error fallback */}
        {videoError && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-white text-center">
              <div className="text-red-500 text-6xl mb-4">⚠</div>
              <p className="text-gray-300">Loading main site...</p>
            </div>
          </div>
        )}
      </div>

      {/* Fade out effect when video ends */}
      {isVideoEnded && (
        <div className="absolute inset-0 bg-black animate-fadeIn"></div>
      )}
    </div>
  );
};

export default VideoIntro;