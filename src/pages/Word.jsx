import React from 'react';
import './word.css'; // Import your CSS file with styles

function Word({ words }) {
  return (
    <div className="word-slider">
      <div className="marquee">
        {words.map((word, index) => (
          <span key={index} className="word">{word}</span>
        ))}
      </div>
    </div>
  );
}

export default Word;
