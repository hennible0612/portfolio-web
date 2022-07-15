import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
// import './App.scss'

import "./styles.css";
import "./overrides.css";

const App = () => {


  return (
      <Routes>
        {/*<Route path='/' element={<Navigation/>}>*/}
        <Route index={true} element={<Home/>}/> {/* index=true이므로 기본*/}

        {/*</Route>*/}
      </Routes>
  );
};

export default App;



