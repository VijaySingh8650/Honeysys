import React, { useContext } from 'react';
import { useState } from 'react';
import { ContextProvider } from '../Context/Context';
import { tableData } from '../Data/data';

let arr = [1, 2, 3, 4, 5, 6, 7];

const Main = () => {
  const [index, setIndex] = useState(0);
  const { state } = useContext(ContextProvider);
  const { color, fontSize, carousel, columns } = state;
  return (
    <div className="main">
      <div>
        <p style={{ fontSize: fontSize, color: color ? 'red' : 'black' }}>
          Product Data
        </p>
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
          <tbody>
            {tableData.map((el) => {
              const { id, name, description, brand, price, image } = el;
              return (
                <tr
                  key={id}
                  style={{ fontSize: fontSize, color: color ? 'red' : 'black' }}
                >
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                    <img src={image} alt={image} />
                  </td>
                  <td>{description}</td>
                  <td>{brand}</td>
                  <td>₹ {price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* carousel */}
      {!carousel ? (
        <div
          className="main_section_grid"
          style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}
        >
          {tableData.map((el) => {
            const { id, name, image, price } = el;
            return (
              <div key={id}>
                <img src={image} alt={image} />
                <p>{name}</p>
                <p>₹{price}</p>
                <button>Add to cart</button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="carousel">
          <div>
            <img src={tableData[index].image} alt={tableData[index].image} />
            <p>{tableData[index].name}</p>
            <p>₹{tableData[index].price}</p>
            <button>Add to cart</button>
          </div>
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
