import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'
import ChatPage from './pages/ChatPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/rooms" element={<RoomsPage/>}></Route>
          <Route path="/chat" element={<ChatPage/>}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
