interface TechItem {
  name: string;
  color: string;
  icon: string;
}

interface TechBadgeProps {
  items: TechItem[];
}

const TechBadge = ({ items }: TechBadgeProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.color} px-5 py-3 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-transform duration-200 cursor-default`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-semibold text-white">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechBadge;
