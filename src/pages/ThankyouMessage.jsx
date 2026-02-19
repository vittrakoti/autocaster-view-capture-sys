// capture-sys/src/pages/ThankyouMessage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ThankyouMessage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ThankyouMessage() {
  const [done, setDone] = useState(false);

  // Trigger step-2 after circle animation
  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      {/* Icon Area */}
      <div className="relative mb-6">

        {/* Sparkles */}
        <img
          src="/images/icons/sparkles.svg"
          alt=""
          className={`${styles.sparkle} ${done ? styles.sparkleShow : ""}`}
        />

        {/* Circle + Check */}
        <div
          className={`${styles.circleWrapper} ${
            done ? styles.shadowShow : ""
          }`}
        >
          <svg className={styles.circleSvg} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              className={styles.circleBg}
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              className={styles.circleAnim}
            />
          </svg>

          <FontAwesomeIcon
            icon={faCheck}
            className={`${styles.checkIcon} ${
              done ? styles.checkShow : ""
            }`}
          />
        </div>
      </div>

      {/* Message */}
      <div
        className={`${styles.message} ${
          done ? styles.messageShow : ""
        } text-center px-4`}
      >
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          撮影完了
        </h1>

        <h2 className="text-blue-500 text-3xl font-bold mb-4 mt-6">
          AutoCaster View
        </h2>

        <p className="text-slate-600 font-medium mb-2">
          ご利用いただき
        </p>

        <p className="text-slate-800 font-bold text-lg">
          ありがとうございました
        </p>
      </div>

      {/* Back link */}
      <div className="mt-10">
        <Link
          to="/"
          className="text-sm text-slate-400 font-medium hover:underline"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}