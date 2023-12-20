import React from 'react';

const PneumoniaResult = ({ isPneumoniaDetected }) => {
  return (
    <div>
      {isPneumoniaDetected ? (
        <h2>Pneumonia Detected</h2>
      ) : (
        <h2>No Pneumonia Detected</h2>
      )}
    </div>
  );
};

export default PneumoniaResult;
