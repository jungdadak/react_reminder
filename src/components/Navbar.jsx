import { Link } from 'react-router-dom';
import axios from 'axios';
// import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
export default function Navbar() {
  // let [nowuser, setNowuser] = useState('안녕하세요');
  // useEffect(() => {
  //   axios
  //     .get('https://codingapple1.github.io/userdata.json')
  //     .then((result) => setNowuser(result.data.name));
  // }, []);

  let result = useQuery(['작명'], () => {
    return (
      axios
        .get('https://codingapple1.github.io/userdata.json')
        .then((result) => {
          console.log('데이터내놩');
          return result.data;
        }),
      { staleTime: 1000 } // 1초간은 캐시된 데이터를 사용하고, 그 이후에는 다시 요청을 보냄
      // 끌 수 있음
      // 다른 컴포넌트에서 사용해도 같은 데이터를 사용함, props로 넘겨주지 않아도 됨
      //기존 성공 결과를 보여주고 ajax 요청을 보내서 새로운 데이터를 가져옴
    );
  });
  console.log('res:', result);
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
          <div className="">
            반가워요
            {result.error && '에러'}
            {result.isLoading && '로딩중'}
            {result.data && result.data.name}
          </div>
        </div>
      </div>
    </nav>
  );
}
