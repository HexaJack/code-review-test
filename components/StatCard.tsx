interface StatCardProps {
  icon: string;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
};

export default StatCard;
