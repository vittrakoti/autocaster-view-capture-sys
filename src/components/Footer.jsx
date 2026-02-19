import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-100">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-slate-700">
        <Link to="/policies" className="hover:underline">
          ポリシー
        </Link>

        <Link to="/help" aria-label="Help">
          <FontAwesomeIcon icon={faCircleQuestion} className="text-lg" />
        </Link>
      </div>
    </footer>
  );
}
