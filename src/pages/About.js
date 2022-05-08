import React, {  useEffect,Suspense,useContext } from "react"
import { BrowserRouter as Router, useNavigate, Link} from "react-router-dom";

import '../App.css';
import useStore from "../appStore";
import Detail from '../components/Detail';
import flowerIndex from '../data/flowerIndex.json'

function About(){
    const navigate = useNavigate();


    return(
    <div className='sections about'>
        <div className="exit">
            <div></div>
            <button onClick={() => navigate("/garden")}>
                <span  className="close-btn"></span>
            </button>
        </div>
        <div className="words">

          
        <div className="column1">
            <h1 className="ab">Redefining 
            <br/>
            Country Roads</h1>
            <div className="aboutCard">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p><p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="aboutCard">
                    <p>This website is an ongoing project by Jiyoon Moon, a #southerner and #creative technologist learning more about the sounds of her hometown. Contact her here with any questions, comments, or ideas.
                    </p>
                </div>
                
                <div className="aboutCard">
                <h3>BIBLIOGRAPHY:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p><p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
        </div>



    </div>

</div>
    )
}
export default About