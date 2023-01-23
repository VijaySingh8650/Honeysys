import React, { useContext } from 'react';
import { ContextProvider } from '../Context/Context';

import {
  Carousel_change,
  Color_Change,
  Columns_Change,
  Font_Change,
} from '../Context/reducer.type';

const Properties = () => {
  const { state, dispatch } = useContext(ContextProvider);
  const { color, fontSize, carousel, columns } = state;
  return (
    <div className="properties">
      <div>
        {/* table properties */}
        <p>Table Properties</p>

        {/* color */}
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            dispatch({ type: Color_Change, payload: !color })
          }}
        >
          Color: {!color ? 'red' : 'default'}
        </button>

        {/* font-size */}
        <div className="properties_table_font_size">
          Font-Size: {fontSize}
          <div className="btn_font_size">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                dispatch({ type: Font_Change, payload: '1rem' })
              }}
            >
              1rem
            </button>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                dispatch({ type: Font_Change, payload: '2rem' })
              }}
            >
              2rem
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Box properties */}

        <p>Box Properties</p>

        {/* columns */}
        <div className="properties_table_font_size">
          Columns: {carousel ? 'Carousel' : columns}
          <div className="btn_font_size">
            <button
              onClick={() => {
                window.scrollTo(0, document.body.scrollHeight);
                dispatch({ type: Columns_Change, payload: 5 })
              }} >
              5
            </button>
            <button
              onClick={() => {
                window.scrollTo(0, document.body.scrollHeight);
                dispatch({ type: Columns_Change, payload: 7 })
              }}
            >
              7
            </button>
          </div>
        </div>

        {/* carousel */}
        <div>
          Carousel{' '}
          <button
            onClick={() =>
            {
              window.scrollTo(0, document.body.scrollHeight);
              dispatch({ type: Carousel_change, payload: !carousel })
            }
            }
          >
            {!carousel ? 'false' : 'true'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
