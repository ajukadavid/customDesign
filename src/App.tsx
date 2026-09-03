import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Iso, Safety, Terms } from "./pages/Legal"
import { Process } from "./pages/Process"
import { Projects } from "./pages/Projects"
import { Quote } from "./pages/Quote"
import { Services } from "./pages/Services"
import { SteelGrade } from "./pages/SteelGrade"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/steel-grade" element={<SteelGrade />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/iso" element={<Iso />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
