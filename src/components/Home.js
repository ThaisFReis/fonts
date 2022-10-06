import { Link } from 'react-router-dom'

import "./Home.css"

function Home (){
    return (
        <div className='home'>
            <h1>FONTES</h1>
            <div className='home-links'>
                <Link to="/abstract"><p className='abstract'>Abstract</p></Link>
                <Link to="/anthony"><p className='anthony'>Anthony</p></Link>
                <Link to="/aqua"><p className='aqua'>Aqua</p></Link>
                <Link to="/auralyess"><p className='auralyess'>Auralyess</p></Link>
                <Link to="/bsrubansomdej"><p className='bsrubansomdej'>Bsrubansomdej</p></Link>
                <Link to="/canaro"><p className='canaro'>Canaro</p></Link>
                <Link to="/cansu"><p className='cansu'>Cansu</p></Link>
                <Link to="/devant"><p className='devant'>Devant</p></Link>
                <Link to="/galilei"><p className='galilei'>Galilei</p></Link>
                <Link to="/galileo"><p className='galileo'>Galileo</p></Link>
                <Link to="/helloautumn"><p className='helloautumn'>Hello Autumn</p></Link>
                <Link to="/honeybunney"><p className='honeybunney'>HoneyBunney</p></Link>
                <Link to="/jacquespro"><p className='jacquespro'>JacquesPro</p></Link>
                <Link to="/marinfordaf"><p className='marinfordaf'>Marinfordaf</p></Link>
                <Link to="/northen"><p className='northen'>Northen</p></Link>
                <Link to="/orlande"><p className='orlande'>Orlande</p></Link>
                <Link to="/roclette"><p className='roclette'>Roclette</p></Link>
                <Link to="/thorin"><p className='thorin'>Thorin</p></Link>
                <Link to="/trinidadneue"><p className='trinidadneue'>TrinidadNeue</p></Link>
                <Link to="/truelove"><p className='truelove'>Truelove</p></Link>
                <Link to="/typedepot"><p className='typedepot'>Typedepot</p></Link>
                <Link to="/umbasoft"><p className='umbasoft'>Umbasoft</p></Link>
                <Link to="/vanilla"><p className='vanilla'>Vanilla</p></Link>
                <Link to="velline"><p className='velline'>Velline</p></Link>
                <Link to="/willson"><p className='willson'>Willson</p></Link>
                <Link to="/zerafonts_aristotelica"><p className='zerafontsaristotelica'>ZerafontsAristotelica</p></Link>
                <Link to="/zerafonts_eastman"><p className='zerafontseastman'>ZerafontsEastman</p></Link>
            </div>
        </div>
    )
}

export default Home;