import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Detailpage({ shoes }) {
  let [count, setCount] = useState(0);
  let [stockAlert, setStockAlert] = useState(true);
  let { id } = useParams();
  let shoe = shoes.find((x) => {
    return x.id === Number(id);
  });

  const [input, setInput] = useState('');
  const [showWarning, setShowWarning] = useState(false); // 경고 메시지 표시 상태 추가

  useEffect(() => {
    let a = setTimeout(() => {
      setStockAlert(false);
    }, 2000);
    console.log(2);
    return () => {
      console.log(1);
      clearTimeout(a);
    };
  }, [count]);

  // input 값 검사를 위한 useEffect
  useEffect(() => {
    if (input !== '') {
      setShowWarning(isNaN(input));
    }
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {stockAlert === true ? (
        <div className="flex items-center justify-center bg-yellow-200 h-14 text-center text-black">
          재고가 얼마 남지 않았습니다.
        </div>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 이미지 섹션 */}
        <div className="relative group">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(shoe.id) + 1
            }.jpg`}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            alt="상품 이미지"
          />
        </div>

        {/* 상품 정보 섹션 */}
        <div className="space-y-6 p-4">
          <h4 className="text-3xl font-bold text-gray-900">{shoe.title}</h4>
          <p className="text-gray-600 text-lg leading-relaxed">
            {shoe.content}
          </p>
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
            <span className="text-2xl font-bold text-gray-900">
              {shoe.price}
            </span>
            <span className="text-sm text-green-600">무료배송</span>
          </div>

          <div
            className={`w-full h-10 flex justify-center items-center
            ${
              !showWarning
                ? 'invisible'
                : 'bg-red-200 rounded-md text-red-600 font-semibold'
            }`}
          >
            수량은 숫자로만 입력해 주세요 !!
          </div>

          <input
            value={input}
            onChange={handleInputChange}
            placeholder="수량을 입력해 주세요"
            className="placeholder-gray-500 placeholder-text-sm text-sm text-center text-black
              w-full p-1 rounded-md bg-white border-2 border-blue-300"
          />
          <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            주문하기
          </button>

          {/* 추가 정보 */}
          <div className="mt-8 space-y-2 text-sm text-gray-500">
            <p className="flex items-center">
              <span className="w-24">재고</span>
              <span>남은 수량: 5개</span>
            </p>
            <p className="flex items-center">
              <span className="w-24">배송</span>
              <span>일반택배</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
