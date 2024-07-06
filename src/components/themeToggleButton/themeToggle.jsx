import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleTheme } from '../../features/Theme/themeSlice';

function themeTogglel() {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    return (
        <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={() => dispatch(toogleTheme())}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
    </label>
    )
}

export default themeTogglel;