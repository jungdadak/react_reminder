import { Link } from 'react-router-dom';

export default function Mainpage({ shoes }) {
  return (
    <>
      {/* Hero Section (대문) */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold bg-black py-3 rounded-2xl mb-4">
            신발의 새로운 기준
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            최고의 품질, 최상의 스타일을 만나보세요
          </p>
        </div>
      </div>{' '}
      {/* Product Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          {shoes.map((a, i) => {
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-4 text-black text-center text-3xl font-bold">
                  {a.title}
                </div>
                <div className="p-4">
                  <Link to={`/detail/${a.id}`}>
                    <img
                      alt="{a.title}"
                      className="w-full h-auto object-cover"
                      src={a.img}
                    />
                  </Link>
                  <h4 className="text-xl text-black font-semibold mt-4 mb-2">
                    {a.content}
                  </h4>
                  <p className="text-gray-600">{a.price}</p>
                  <div className="mt-4">
                    <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition-colors">
                      구매하기
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
