import React from 'react';
import classnames from 'classnames';
import './global.css';
import { getContrast } from 'polished';

export default function App() {
  const [color, setColor] = React.useState('');

  const contrast = React.useMemo(() => {
    try {
      const contrast = color ? getContrast(color, '#FFF') : 0;
      return contrast;
    } catch {
      return null;
    }
  }, [color]);
  const contrastColor = contrast < 3.5 ? '#000' : '#FFF';

  return (
    <div className="px-4 bg-gray-800 min-h-screen py-2 flex flex-col items-center justify-center">
      <input
        type="text"
        className="w-full border border-black/60 px-2 py-1 rounded"
        placeholder="Type the"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <div
        style={{
          background: color,
          color: contrastColor,
        }}
        className={classnames('px-1 py-2 rounded mt-3 w-full', {
          'bg-gray-400': !color || contrast === null,
        })}
      >
        The contrast is {contrast}
      </div>
    </div>
  );
}
