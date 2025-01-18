import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Form from "./pages/Form";
import GlobalStyles from "./components/GlobalStyles";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
