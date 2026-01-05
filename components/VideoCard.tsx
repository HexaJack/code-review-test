interface VideoCardProps {
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  link: string;
}

const VideoCard = ({ title, thumbnail, views, duration, link }: VideoCardProps) => {
  return (
    <a
      href={link}
      className="group block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          조회수 {views}
        </p>
      </div>
    </a>
  );
};

export default VideoCard;
