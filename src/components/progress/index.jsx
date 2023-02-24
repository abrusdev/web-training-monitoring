import { useEffect, useState } from "react";
import './index.css';

function Progress({ value = 50 }) {
  const radius = 68;

  const [dashoffset, setDashoffset] = useState(0);
  const [strokeDasharray, setStrokeDasharray] = useState(0);

  useEffect(() => {
    const CIRCUMFERENCE = 2 * Math.PI * radius;
    const progress = value / 100;

    setDashoffset(CIRCUMFERENCE * (1 - progress));
    setStrokeDasharray(CIRCUMFERENCE);
  }, [radius, value])

  return (
    <div className="progress__container">
      <svg className="progress" width='150' height='150' viewBox="0 0 150 150">
        <defs>
          <linearGradient id="linearColors" x1="1" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#48FEBC"></stop>
            <stop offset="25%" stopColor="#48FEBC"></stop>
            <stop offset="40%" stopColor="#48FEBC"></stop>
            <stop offset="60%" stopColor="#E2FFA7"></stop>
            <stop offset="80%" stopColor="#E2FFA7"></stop>
            <stop offset="100%" stopColor="#E2FFA7"></stop>
          </linearGradient>
        </defs>
        <circle className="progress__meter" cx="75" cy="75" r="68" strokeWidth="12" />
        <circle className="progress__value" style={{ strokeDashoffset: dashoffset, strokeDasharray: strokeDasharray }}
                cx="75" cy="75" r="68"
                strokeWidth="12"
                stroke="url(#linearColors)" />
      </svg>

      <p className="progress__label">{value}%</p>
    </div>
  )
}

export default Progress;