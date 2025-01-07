import React from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Mainpage from "./pages/mainpage";
import data from "./components/data";
import Navbar from "./components/Navbar";
import EventPage from "./pages/eventpage";
import { useState, useEffect, lazy, Suspense } from "react";

const Detailpage = lazy(() => import("./pages/detailpage"));
const CartPage = lazy(() => import("./pages/CartPage"));
function App() {
	useEffect(() => {
		if (localStorage.getItem("watched") === null) {
			localStorage.setItem("watched", JSON.stringify([]));
		}
	}, []);

	let [shoes, setShoes] = useState(data);
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />

			<Routes>
				<Route
					path="/cart"
					element={
						<Suspense fallback={<div>로오디잉</div>}>
							<CartPage />
						</Suspense>
					}
				/>
				<Route path="/detail/:id" element={<Detailpage shoes={shoes} />} />
				<Route
					path="/"
					element={
						<Suspense fallback={<div>로오디잉</div>}>
							<Mainpage shoes={shoes} setShoes={setShoes} />
						</Suspense>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route
					path="*"
					element={<div className="text-black">없는 페이지 입니다.</div>}
				/>
				<Route path="/event" element={<EventPage />}>
					<Route
						path="one"
						element={
							<div className="text-black text-center font-thin">
								첫 주문시 양배추즙 서비스
							</div>
						}
					/>
					<Route
						path="two"
						element={
							<div className="text-black text-center font-thin">
								생일기념 쿠폰 받기
							</div>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

function About() {
	return (
		<div>
			<h4>회사정보임</h4>
		</div>
	);
}

export default App;
