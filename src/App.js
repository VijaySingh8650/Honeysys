import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Properties from './Components/Properties';

function App() {
  const [color, setColor] = useState(false);
  const [fontSize, setFontSize] = useState("1rem");
  const [columns, setColumns] = useState(5);
  const [carousel, setCarousel] = useState(false);

  return (
    <div className="App">
      <Header />
      <Main
        carousel={carousel}
        color={color}
        fontSize={fontSize}
        columns={columns}
      />
      <Properties
        carousel={carousel}
        setCarousel={setCarousel}
        fontSize={fontSize}
        setFontSize={setFontSize}
        color={color}
        setColor={setColor}
        columns={columns}
        setColumns={setColumns}
      />
    </div>
  );
}

export default App;
