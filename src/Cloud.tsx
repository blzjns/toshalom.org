import { useEffect, useState } from "react";

function getRandomIntInRange(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Cloud() {
  const [pos, setPos] = useState<number[]>([0, 0]);
  const seed = getRandomIntInRange(0, 100);
  useEffect(() => {
    setPos([getRandomIntInRange(-25, 50), getRandomIntInRange(-25, 50)]);
  }, []);
  return (
    <div>
      <div
        style={{ top: `${pos[0]}vh`, left: `${pos[0]}vw` }}
        className="cloud"
        id="cloud-back"
      ></div>
      {/* <div style={{top: "-15vh", left: "5vw"}} className="cloud" id="cloud-mid"></div> */}
      <div
        style={{ top: `${pos[0]}vh`, left: `${pos[0]}vw` }}
        className="cloud"
        id="cloud-front"
      ></div>

      <svg width="0" height="0">
        <filter id="filter-back">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="4"
            seed={seed}
          />
          <feDisplacementMap in="SourceGraphic" scale="170" />
        </filter>
        <filter id="filter-mid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed={seed}
          />
          <feDisplacementMap in="SourceGraphic" scale="150" />
        </filter>
        <filter id="filter-front">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed={seed}
          />
          <feDisplacementMap in="SourceGraphic" scale="100" />
        </filter>
      </svg>
    </div>
  );
}
