import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-expect-error -- Header is a JS module without TypeScript declarations
import Header from "./components/Header";
// @ts-expect-error -- Footer is a JS module without TypeScript declarations
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Ranking from "./pages/Ranking";
import Mods from "./pages/Mods";
import Staff from "./pages/Staff";
import Wipe from "./pages/Wipe";
import Normas from "./pages/Normas";
import Nuevos from "./pages/Nuevos";
import Bot from "./pages/Bot";
import Bases from "./pages/Bases";

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/mods" element={<Mods />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/wipe" element={<Wipe />} />
          <Route path="/normas" element={<Normas />} />
          <Route path="/nuevos" element={<Nuevos />} />
          <Route path="/bot" element={<Bot />} />
          <Route path="/bases" element={<Bases />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
