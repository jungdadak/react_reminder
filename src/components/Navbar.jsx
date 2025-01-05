import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">ShoeShop</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            홈
          </Link>
          <Link to="/detail" className="text-white hover:text-gray-300">
            상세페이지
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            어바웃
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-300">
            카트
          </Link>
        </div>
      </div>
    </nav>
  );
}
