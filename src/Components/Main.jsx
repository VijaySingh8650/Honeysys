import React, { useContext } from 'react';
import { useState } from 'react';
import { ContextProvider } from '../Context/Context';

let arr = [1, 2, 3, 4, 5, 6, 7];

const Main = () => {
  const [index, setIndex] = useState(0);
  const { state } = useContext(ContextProvider);
  const { color, fontSize, carousel, columns } = state;
  return (
    <div className="main">
      <div>
        <p>Product Data</p>
        <table className="table">
          <thead>
            <tr style={{ fontSize: fontSize, color: color ? 'red' : 'black' }}>
              <th>id</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Brand</th>
              <th>Price</th>
            </tr>
          </thead>
        </table>
      </div>
      
      {/* carousel */}
      {!carousel ? (
        <div
          className="main_section_grid"
          style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}
        >
          {
            arr.map((el, index) => {
              return <div key={index}>
                    {el}
              </div>
            })
          }
        </div>
      ) : (
        <div className="carousel">
          <div>{arr[index]}</div>
          <div>
            <button disabled={index === 0} onClick={() => setIndex(index - 1)}>
              prev
            </button>
            <button
              disabled={index === arr.length - 1}
              onClick={() => setIndex(index + 1)}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
