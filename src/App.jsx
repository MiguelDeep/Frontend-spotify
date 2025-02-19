import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Song from "./pages/Song";

//outrq forma de criar rotas dinamicas
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/artist/:id",
    element: <Artist />
  },
  {
    path: "/artists",
    element: <Artists />
  },
  {
    path: "/song/:id",
    element: <Song />
  },
  {
    path: "/songs",
    element: <Songs />
  }
]); */
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
