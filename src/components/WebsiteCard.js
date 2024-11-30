// src/components/WebsiteCard.js
export default function WebsiteCard({ website }) {
  console.log("web", website);
  return (
    <div className="bg-white shadow-md rounded-lg p-5 m-3">
      <h2 className="text-2xl font-bold mb-2">{website.name}</h2>
      <p className="text-gray-700 mb-2">{website.description}</p>
      <p className="text-sm text-blck-600 mb-2">
        <strong>Specialization:</strong> {website.specialization}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Rating:</strong> {website.rating} ★ ({website.reviews} reviews)
      </p>
      <a
        href={website.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-3 inline-block"
      >
        Visit Website →
      </a>
    </div>
  );
}
