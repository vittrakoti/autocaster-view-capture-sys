import { Link, useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa6";

export default function StripeService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      {/* Card */}
      <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-6 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
            <FaCreditCard className="text-white text-xl" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-lg font-bold text-slate-800 mb-2">
          お支払い確認
        </h2>

        {/* Message */}
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          お支払いを確定しますか？
          <br />
          確定後、写真をダウンロードできます。
        </p>

        {/* Confirm Button */}
        <Link
          to="/photo-download"
          className="
            block w-full
            bg-green-500 text-white
            py-2.5 rounded-md
            font-semibold
            mb-4
            hover:bg-green-600
            transition
          "
        >
          確定
        </Link>

        {/* Cancel */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          キャンセル
        </button>

      </div>
    </div>
  );
}