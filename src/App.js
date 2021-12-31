
import { Route, Routes } from 'react-router-dom';
import { Banner } from './Frontpage/Banner';
import { Home } from './Frontpage/Home';
import { Servicess } from './Frontpage/Servicess';
import { Education } from './Frontpage/Education';
import { Technicals } from './Frontpage/Technicals';
function App() {
  return (
   <>
    <Routes>
        <Route exact path='/' element={<Banner/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/servicess' element={<Servicess/>}></Route>
        <Route exact path='/technicals' element={<Technicals/>}></Route>
    </Routes>
   </>
  );
}

export default App;
