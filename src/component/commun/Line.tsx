import React from 'react';
function Line({
  className = '',
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`origin-right bg-gray-400/50  absolute   line ${className}`}
      style={style}
    />
  );
}

export default Line;
