export default function FeatureCard({ title, description, icon }) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }