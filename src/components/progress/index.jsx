import { useEffect, useState } from "react";
import './index.css';

function Progress({ radius = 0, value = 50 }) {
  const [dashoffset, setDashoffset] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(0);

  useEffect(() => {
    const CIRCUMFERENCE = 2 * Math.PI * radius;
    const progress = value / (1.11 * 100);

    setDashoffset(CIRCUMFERENCE * (1 - progress));
    setStrokeDasharray(CIRCUMFERENCE);
  }, [radius, value])

  return (
    <div className="progress__container">
      <svg className="progress" width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="linearColors" x1="1" y1="0" x2="0" y2="1">
            <stop offset="5%" stop-color="#48FEBC"></stop>
            <stop offset="25%" stop-color="#48FEBC"></stop>
            <stop offset="40%" stop-color="#48FEBC"></stop>
            <stop offset="60%" stop-color="#E2FFA7"></stop>
            <stop offset="80%" stop-color="#E2FFA7"></stop>
            <stop offset="100%" stop-color="#E2FFA7"></stop>
          </linearGradient>
        </defs>
        <circle className="progress__meter" cx="60" cy="60" r="54" stroke-width="12" />
        <circle className="progress__value" style={{ strokeDashoffset: dashoffset, strokeDasharray: strokeDasharray }}
                cx="60" cy="60" r="54"
                stroke-width="12"
                stroke="url(#linearColors)" />
      </svg>
    </div>
  )
}

export default Progress;