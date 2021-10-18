import React from 'react';
import IconSun from 'library/assets/icons/icon-sun';
import IconMoon from 'library/assets/icons/icon-moon';
import './DarkMode.modules.scss';

const DarkMode: React.FC = () => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="label">
        <div className="fa-moon">
          <IconMoon />
        </div>
        <div className="fa-sun">
          <IconSun />
        </div>
        <div className="ball">Day</div>
      </label>
    </div>
  );
};

export default DarkMode;
