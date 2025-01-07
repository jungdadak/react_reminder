import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from '../store.js';
import { DecreaseCount, IncreaseCount } from '../models/DataSlice';
export default function CartPage() {
  let state = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let state2 = useSelector((state) => state.user);
  let handleIncrease = (a) => {
    dispatch(IncreaseCount({ id: a, num: 1 }));
  };
  let handleDecrease = (a) => {
    dispatch(DecreaseCount({ id: a, num: 1 }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-700 p-3 sm:p-4 text-center">
          🛍️ Black cow Thanks {state2.name} , {state2.age}yrs old
        </h1>
        <button
          onClick={() => {
            dispatch(changeAge());
          }}
        >
          +
        </button>

        {/* Desktop Table View */}
        <div className="hidden sm:block">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
              <tr>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  상품명
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  수량
                </th>
                <th
                  scope="col"
                  className="px-4 sm:px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                >
                  변경하기
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {state.map((a, i) => (
                <tr key={i} className="hover:bg-gray-100 transition-colors">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {a.id}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {a.name}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {a.count}
                  </td>
                  <td className="flex justify-center gap-3 px-4 sm:px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => {
                        handleIncrease(a.id);
                      }}
                      className="text-blue-600 bg-white border-1 border-cyan-300 w-10 h-10 flex items-center justify-center hover:text-red-800"
                    >
                      +
                    </button>

                    <button
                      onClick={() => {
                        handleDecrease(a.id);
                      }}
                      className="text-red-600 bg-white border-1 hover:border-red-600 border-orange-300 w-10 h-10 flex items-center justify-center hover:text-red-800"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {state.map((a, i) => (
            <div
              key={i}
              className="p-4 hover:bg-gray-50 border-b border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  {a.id}
                </span>
                <button
                  onClick={() => {
                    handleIncrease(a.id);
                  }}
                  className="text-blue-600 bg-white border-1 border-cyan-300 w-10 h-10 flex items-center justify-center hover:text-red-800"
                >
                  +
                </button>

                <button
                  onClick={() => {
                    handleDecrease(a.id);
                  }}
                  className="text-red-600 bg-white border-1 hover:border-red-600 border-orange-300 w-10 h-10 flex items-center justify-center hover:text-red-800"
                >
                  -
                </button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800">{a.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">수량:</span>
                  <span className="font-medium text-gray-800">{a.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 flex justify-end">
          <button className="w-full sm:w-auto px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
