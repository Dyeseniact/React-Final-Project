import { BrowserRouter } from "react-router-dom";

import { About, Confirmation, Schedule, Home, Navbar, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <div className='bg-home-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Home />
        </div>
        <About />
        <Schedule />
        <div className='relative z-0'>
          <Confirmation />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
