import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Mainpage({ shoes, setShoes }) {
	let [pussy, setPussy] = useState(2);
	const handleData = (newData) => {
		// 새로운 데이터에 img 필드를 동적으로 추가
		const updatedData = newData.map((item) => ({
			...item,
			img: `https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`,
		}));
		setShoes((prevShoes) => [...prevShoes, ...updatedData]);
	};
	return (
		<>
			{/* Hero Section (대문) */}
			<div className="bg-gray-100 py-16">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold bg-black py-3 text-white rounded-2xl mb-4">
						신발의 새로운 기준
					</h1>
					<p className="text-xl text-gray-600 mb-8">
						최고의 품질, 최상의 스타일을 만나보세요
					</p>
				</div>
			</div>{" "}
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
										<div className="w-full h-64 overflow-hidden">
											<img
												alt="Product Image"
												className="w-full h-full object-cover"
												src={a.img}
											/>
										</div>
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
			<div className="flex justify-center">
				{" "}
				<button
					className=" 
					 w-16 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors
					"
					onClick={() => {
						axios
							.get(`https://codingapple1.github.io/shop/data${pussy}.json`)
							.then((result) => {
								console.log(result.data);
								handleData(result.data);
								setPussy((pussy += 1));
							})
							.catch((error) => {
								if (pussy > 3) {
									alert("데이터가 더 이상 없습니다.");
									return;
								}
								console.log("실패함 ㅅㄱ", error);
							});
					}}
				>
					버튼
				</button>
			</div>
		</>
	);
}
