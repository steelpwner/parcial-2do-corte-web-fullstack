import {Fragment} from 'react';
import Header from './componentes/Header';
import Diapositivas from './componentes/Diapositivas';
import logo from './logo.png';
import './app.css';
const titulo = "Slideshow App";

/* DIEGO MOLINA CREACIÓN DE VECTOR DIAPOSITIVAS QUE SE PASARÁ AL COMPONENTE */
const diapositivas = [{title:"Today's workout pan",text:"We're gonna do 3 fundamental exercises."},
                      {title:"First, 10 push-ups",text:"Do 10 reps. Remember about full range of motion. Don't rush"},
                      {title:"Next 20 squats",text:"Squats are important. Remember to keep your back straight"},
                      {title:"Finally, 15 sits-ups",text:"Slightly bend your knees. Remember about full range of motion"},
                      {title:"Great job!",text:"You've made it, have a nice day and see you next time"}];

function App() {
  return (
    <Fragment>
      <div class="app">
        {/* DIEGO MOLINA CREACIÓN DE HEADER EN LA APLICACIÓN */}
        <Header logo={logo} titulo={titulo}/>
        {/* DIEGO MOLINA CREACIÓN DE DIAPOSITIVAS EN LA APLICACIÓN */}
        <Diapositivas diapositivas={diapositivas}/>
      </div>
    </Fragment>
  );
}

export default App;
