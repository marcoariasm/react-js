import React from 'react';
import { Button } from '@mui/material';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo!</h1>
      <Button>Este es un botón simple</Button><br /><br />

      <Button color="error">Botón color error</Button><br /><br />
      <Button color="info">Botón color info</Button><br /><br />
      <Button color="warning">Botón color warning</Button><br /><br />
      {/* default */}
      <Button color="primary">Botón color primary</Button><br /><br />  

      <Button variant="contained">Botón variante contained</Button><br />
      <Button variant="outlined">Botón variante outlined</Button><br />
      <Button 
        variant="text"  // default
        color="success"
      >
        Botón variante text, color success
      </Button><br /><br />


    </div>
  );
}

export default App;
