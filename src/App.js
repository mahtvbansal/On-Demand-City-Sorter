import './App.css';
import Input from './Components/Input';
import Navbar from './Components/Navbar';
// import LoadingBar from 'react-top-loading-bar'
// import Output from './Components/Output';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  // const [progress, setProgress] = useState(0)

  return (
    // <Router>
    //   <div className="App">
    //       <Navbar />
          
    //   </div>
    //   <Routes>
    //       <Route path="/" element={<Input/>} />

    //       <Route path="/output" element={<Output/>} />

    //     </Routes>
    // </Router>
    <>
    <Navbar />
    {/* <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      /> */}

    <Input/>
    </>
  );
}

export default App;
