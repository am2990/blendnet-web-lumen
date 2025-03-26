
import React from 'react';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title = "YouTube video player" }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeEmbed;
