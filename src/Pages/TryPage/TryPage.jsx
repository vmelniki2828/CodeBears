import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Генерация случайной позиции для точки
const getRandomPosition = () => ({
  x: (Math.random() * 2 - 1) * Math.random() * window.innerWidth + 1000,
  y: (Math.random() * 2 - 1) * Math.random() * window.innerHeight,
});

// Анимация движения точки
const moveToTarget = (startX, startY, endX, endY) => keyframes`
  from {
    transform: translate(${startX}px, ${startY}px);
  }
  to {
    transform: translate(${endX}px, ${endY}px);
  }
`;

// Styled-component для точки
const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  animation: ${props =>
      moveToTarget(props.startX, props.startY, props.endX, props.endY)}
    2s ease-out forwards;

  /* Glow effect */
  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.7), 

 
`;


// Генерация сетки точек для каждой буквы
const generateLetter = (xOffset, yOffset, pattern) => {
  const dots = [];
  const lines = [];
  pattern.forEach((row, rowIndex) => {
    row.forEach((dot, colIndex) => {
      if (dot === 1) {
        const dotPosition = {
          x: xOffset + colIndex * 20,
          y: yOffset + rowIndex * 20,
        };
        dots.push(dotPosition);

        // Соединение с предыдущей точкой в строке
        if (colIndex > 0 && pattern[rowIndex][colIndex - 1] === 1) {
          lines.push([dotPosition, { x: xOffset + (colIndex - 1) * 20, y: yOffset + rowIndex * 20 }]);
        }

        // Соединение с точкой сверху
        if (rowIndex > 0 && pattern[rowIndex - 1][colIndex] === 1) {
          lines.push([dotPosition, { x: xOffset + colIndex * 20, y: yOffset + (rowIndex - 1) * 20 }]);
        }
      }
    });
  });
  return { dots, lines };
};

// Паттерны для букв
const letterPatterns = {
  C: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  O: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  S: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  E: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  L: [
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
  ],
};

// Генерация координат для слова
const generateWord = (word, startX, startY) => {
  let xOffset = startX;
  const allDots = [];
  const allLines = [];
  word.split('').forEach(char => {
    if (letterPatterns[char]) {
      const { dots, lines } = generateLetter(xOffset, startY, letterPatterns[char]);
      allDots.push(...dots);
      allLines.push(...lines);
      xOffset += 120; // Увеличенный отступ между буквами
    }
  });
  return { dots: allDots, lines: allLines };
};

const TryPage = () => {
  const word = "CONSTELLCODE"; // Ваше слово
  const { dots: wordDots, lines: wordLines } = generateWord(word, 0, 0);

  const [randomDots, setRandomDots] = useState([]);
  const [lineAppearStates, setLineAppearStates] = useState(Array(wordLines.length).fill(false));

  useEffect(() => {
    const initialDots = wordDots.map(() => getRandomPosition());
    setRandomDots(initialDots);

    // Set timeout to fade in lines after all dots have animated
    const timer = setTimeout(() => {
      setLineAppearStates(Array(wordLines.length).fill(true));
    }, 2000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'transparent',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: `${120 * word.length}px`,
          height: '200px',
        }}
      >
        {randomDots.map((dot, index) => (
          <Dot
            key={index}
            startX={dot.x}
            startY={dot.y}
            endX={wordDots[index].x}
            endY={wordDots[index].y}
          />
        ))}
        {wordLines.map(([start, end], index) => (
          <svg
            style={{
              position: 'absolute',
              top: "5px",
              left: "5px",
              width: '100%',
              height: '100%',
              overflow: 'visible',
            }}
            key={index}
          >
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="white"
              strokeWidth="1"
              opacity={lineAppearStates[index] ? 1 : 0}
              style={{
                transition: 'opacity 0.5s ease-out',
              }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TryPage;
