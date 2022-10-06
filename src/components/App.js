import "./App.css"

import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home"
import Abstract from "./Abstract"
import Anthony from "./Anthony"
import Aqua from "./Aqua"
import Auralyess from "./Auralyess"
import Bsrubansomdej from "./Bsrubansomdej"
import Canaro from "./Canaro"
import Cansu from "./Cansu"
import Devant from "./Devant"
import Galilei from "./Galilei"
import Galileo from "./Galileo"
import HelloAutumn from "./HelloAutumn"
import HoneyBunney from "./HoneyBunney"
import JacquesPro from "./JacquesPro"
import Marinfordaf from "./Marinfordaf"
import Northen from "./Northen"
import Orlande from "./Orlande"
import Roclette from "./Roclette"
import RoclettePro from "./Roclette/RoclettePro"
import RocletteProItalic from "./Roclette/RocletteProItalic"
import RocletteProLine from "./Roclette/RocletteProLine"
import RocletteProLineItalic from "./Roclette/RocletteProLineItalic"
import Thorin from "./Thorin"
import TrinidadNeue from "./TrinidadNeue"
import Truelove from "./Truelove"
import Typedepot from "./Typedepot"
import Umbasoft from "./Umbasoft"
import Vanilla from "./Vanilla"
import Velline from "./Velline"
import Willson from "./Willson"
import Zerafonts_Aristotelica from "./Zerafonts_Aristotelica"
import Zerafonts_Eastman from "./Zerafonts_Eastman"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abstract" element={<Abstract />} />
        <Route path="/anthony" element={<Anthony />} />
        <Route path="/aqua" element={<Aqua />} />
        <Route path="/auralyess" element={<Auralyess />} />
        <Route path="/bsrubansomdej" element={<Bsrubansomdej />} />
        <Route path="/canaro" element={<Canaro />} />
        <Route path="/cansu" element={<Cansu />} />
        <Route path="/devant" element={<Devant />} />
        <Route path="/galilei" element={<Galilei />} />
        <Route path="/galileo" element={<Galileo />} />
        <Route path="/helloautumn" element={<HelloAutumn />} />
        <Route path="/honeybunney" element={<HoneyBunney />} />
        <Route path="/jacquespro" element={<JacquesPro />} />
        <Route path="/marinfordaf" element={<Marinfordaf />} />
        <Route path="/northen" element={<Northen />} />
        <Route path="/orlande" element={<Orlande />} />
        <Route path="/roclette" element={<Roclette />} />
        <Route path="/roclettepro" element={<RoclettePro />} />
        <Route path="/rocletteproitalic" element={<RocletteProItalic />} />
        <Route path="/rocletteproline" element={<RocletteProLine />} />
        <Route path="/rocletteprolineitalic" element={<RocletteProLineItalic />} />
        <Route path="/thorin" element={<Thorin />} />
        <Route path="/trinidadneue" element={<TrinidadNeue />} />
        <Route path="/truelove" element={<Truelove />} />
        <Route path="/typedepot" element={<Typedepot />} />
        <Route path="/umbasoft" element={<Umbasoft />} />
        <Route path="/vanilla" element={<Vanilla />} />
        <Route path="/velline" element={<Velline />} />
        <Route path="/willson" element={<Willson />} />
        <Route path="/zerafonts_aristotelica" element={<Zerafonts_Aristotelica />} />
        <Route path="/zerafonts_eastman" element={<Zerafonts_Eastman />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;