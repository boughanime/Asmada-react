import React,{useState, useEffect} from "react";
import {BrowserRouter as Routes, Route, Link} from "react-router-dom"
// import { BsHouseDoorFill } from "react-icons/bs";
//  import { BsFillInfoCircleFill } from "react-icons/bs";
// import { BsCardText } from "react-icons/bs";
//  import { FaHandshake } from "react-icons/fa";
//  import { FaHands } from "react-icons/fa";
//  import { BsLockFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";

import Article from "./Article";
import Connexion from "../Visiteur/Connexion";
import Inscription from "../Visiteur/Inscription";
import Nous from "../Visiteur/Nous";
import Action from "../Visiteur/Action";
import Contact from "../Visiteur/Contact";
import Test from "../Benevole/Test";
import FaireTest from "../Admin/FaireTest";
import "../../Css/App.css"




function Nav(){
    

    const [toggleMenu, setToggleMenu] = useState (false);
    const [largeur, setLargeur] = useState (window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
    
        const changeWidth = () => {
            setLargeur(window.innerWidth);

           if(window.innerWidth > 825){
             setToggleMenu(false);
            }
        }
        window.addEventListener('resize', changeWidth);
        return() => {
            window.removeEventListener('resize', changeWidth);

        }

    }, [])
    return(
        <Routes>

        <div>
        <nav>
            
            {(toggleMenu || largeur > 825) && (
                <ul className="liste">
                   <Link className="items"  to="/"> Accueil </Link>
                   <Link className="items" to="/Qui_sommes_nous"> Qui sommes nous</Link>
                   <li className="items"> Actualités</li>
                   <Link className="items" to="/Action"> Actions</Link>
                   <Link className="items" to="/Test"> Test</Link>
                   <Link className="items" to="/FaireTest"> Créer un Test</Link>
                   <li className="items"> Espace bénévoles</li>
                   {/* <Link className="items" to="/Inscription"> Inscription</Link> */}
                   <Link className="items" to="/Connexion"> Connexion</Link>
                   
                </ul>
            )} 
            <button onClick={toggleNavSmallScreen} className="bgm"><AiOutlineBars /></button>
        </nav>
              <Route exact path="/" component={Article} />
              <Route exact path="/Qui_sommes_nous" component={Nous} />
              <Route exact path="/Action" component={Action} />
              <Route exact path="/Inscription" component={Inscription} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Connexion" component={Connexion} />
              <Route exact path="/Test" component={Test} />
              <Route exact path="/FaireTest" component={FaireTest} />

    
        </div>
        </Routes>
 
        
    );

}

export default Nav;




 