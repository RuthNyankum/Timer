// import React, { useState, useEffect } from 'react';
// import bgImage from '../../assets/images/doc4.jpg';
// import '../../CountdownTimer.css'; // Importing the CSS

// const CountdownTimer = () => {
//   const [time, setTime] = useState(60); // Set countdown time in seconds
//   const [isActive, setIsActive] = useState(false);
//   const [inputMinutes, setInputMinutes] = useState(1); // Minutes input
//   const [inputSeconds, setInputSeconds] = useState(0); // Seconds input

//   useEffect(() => {
//     let interval = null;

//     if (isActive && time > 0) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (time === 0) {
//       clearInterval(interval);
//       alert('Time is up!');
//     }

//     return () => clearInterval(interval);
//   }, [isActive, time]);

//   const startTimer = () => {
//     setIsActive(true);
//   };

//   const resetTimer = () => {
//     setIsActive(false);
//     setTime(inputMinutes * 60 + inputSeconds); // Reset to custom input time
//   };

//   // Calculate minutes and seconds
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;

//   return (
//     <div
//       className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <h1 className="text-3xl font-bold mb-4 text-white">Countdown Timer</h1>

//       {/* Input for setting the time */}
//       <div className="flex mb-4">
//         <input
//           type="number"
//           value={inputMinutes}
//           onChange={(e) => setInputMinutes(Number(e.target.value))}
//           className="text-black w-16 text-center p-2 rounded mr-2"
//           placeholder="Minutes"
//           min="0"
//         />
//         <span className="text-white text-2xl">:</span>
//         <input
//           type="number"
//           value={inputSeconds}
//           onChange={(e) => setInputSeconds(Number(e.target.value))}
//           className="text-black w-16 text-center p-2 rounded ml-2"
//           placeholder="Seconds"
//           min="0"
//         />
//       </div>

//       {/* Display time in MM:SS format */}
//       <div className="text-6xl font-mono mb-4 text-white">
//         {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//       </div>

//       {/* Hourglass representation */}
//       <div className="hourglass">
//         <div
//           className="sand-top"
//           style={{ animationDuration: `${time}s` }}
//         ></div>
//         <div className="sand-bottom"></div>
//       </div>

//       <div>
//         <button
//           onClick={startTimer}
//           className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Start
//         </button>
//         <button
//           onClick={resetTimer}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;

import React, { useState, useEffect } from 'react';
import bgImage from '../../assets/images/doc4.jpg';

const CountdownTimer = () => {
  const [time, setTime] = useState(60); // Set countdown time in seconds
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(1); // Minutes input
  const [inputSeconds, setInputSeconds] = useState(0); // Seconds input

  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      alert('Time is up!');
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(inputMinutes * 60 + inputSeconds); // Reset to custom input time
  };

  // Calculate minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-gray-800"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-5xl font-bold mb-4 text-white">Countdown Timer</h1>

      {/* Input for setting the time */}
      <div className="flex mb-4">
        <input
          type="number"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Number(e.target.value))}
          className="text-black w-20 text-center p-2 rounded mr-2"
          placeholder="Minutes"
          min="0"
        />
        <span className="text-white text-2xl">:</span>
        <input
          type="number"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(Number(e.target.value))}
          className="text-black w-20 text-center p-2 rounded ml-2"
          placeholder="Seconds"
          min="0"
        />
      </div>

      {/* Display time in MM:SS format */}
      <div className="text-8xl font-mono mb-4 text-white">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>

      <div>
        <button
          onClick={startTimer}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Start
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
