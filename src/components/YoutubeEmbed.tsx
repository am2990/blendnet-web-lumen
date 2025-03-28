
import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title = "YouTube video player" }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  );
};

export default YoutubeEmbed;
