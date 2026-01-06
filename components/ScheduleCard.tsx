interface ScheduleItem {
  day: string;
  time: string;
  content: string;
  icon: string;
}

interface ScheduleCardProps {
  items: ScheduleItem[];
}

const ScheduleCard = ({ items }: ScheduleCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {item.day}
          </h4>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
            {item.time}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ScheduleCard;
