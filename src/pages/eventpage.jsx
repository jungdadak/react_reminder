import { Outlet } from 'react-router-dom';

export default function EventPage() {
  return (
    <>
      <div className="m-auto text-black text-center font-bold">
        오늘의 이벤트
      </div>
      <Outlet />
    </>
  );
}
