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
  background-color: #f39c12;
  border-radius: 50%;
  position: absolute;
  animation: ${props =>
      moveToTarget(props.startX, props.startY, props.endX, props.endY)}
    2s ease-out forwards;
`;

// Генерация сетки точек для каждой буквы
const generateLetter = (xOffset, yOffset, pattern) => {
  const dots = [];
  pattern.forEach((row, rowIndex) => {
    row.forEach((dot, colIndex) => {
      if (dot === 1) {
        dots.push({ x: xOffset + colIndex * 20, y: yOffset + rowIndex * 20 });
      }
    });
  });
  return dots;
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
  const dots = [];
  word.split('').forEach(char => {
    if (letterPatterns[char]) {
      dots.push(...generateLetter(xOffset, startY, letterPatterns[char]));
      xOffset += 120; // Увеличенный отступ между буквами
    }
  });
  return dots;
};

// Координаты для слова "CONSTELLCODE"
const wordDots = generateWord('CONSTELLCODE', 0, 0);

const TryPage = () => {
  const [randomDots, setRandomDots] = useState([]);

  useEffect(() => {
    // Генерация случайных позиций для точек
    const initialDots = wordDots.map(() => getRandomPosition());
    setRandomDots(initialDots);
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
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
          width: `${120 * 'CONSTELLCODE'.length}px`,
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
      </div>
    </div>
  );
};

export default TryPage;
