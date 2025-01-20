import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import FormSection from "./pages/FormSection";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const BackgroundContent = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

function App() {
  return (
    <BrowserRouter>
      <BackgroundContent>
        <GlobalStyles />

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormSection />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
        <Footer />
      </BackgroundContent>
    </BrowserRouter>
  )
}

export default App
