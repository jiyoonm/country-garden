import styled from 'styled-components'
import AudioPlayer from "../components/AudioPlayer";
import FlowerCard from "../components/FlowerCard";

import useStore from "../appStore";
import  {  useState} from "react"
import { Link,useLocation  } from "react-router-dom";

const TopLeft = styled.div`
  position: absolute;
  color:white;
  top: 5vw;
  left: 4vw;
  // font-size: .8rem;
  white-space: pre-line;

  font-size: min(10vw, 1em);
  line-height: 1em;
`

const BottomLeft = styled.div`



`

const BottomRight = styled.div`
  position: absolute;
  bottom: 6vw;
  right: 6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  text-align: right;
`

const LeftMiddle = styled.div`
  position: absolute;
  bottom: 50%;
  right: 6vw;
  font-family: 'Inter';
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
`

const Bar = styled.div`
  position: absolute;
  top: ${(props) => (props.vertical ? '0px' : '50%')};
  left: ${(props) => (props.vertical ? '50%' : '0px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};
  background: #252525;
`

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 4vw;
  right: 4vw;
  & >button> div {
    position: relative;
    width: 24px;
    height: 2px;
    background:black;
    margin-bottom: 6px;
  }
`


export default function Hud() {
  const [active, setActive] = useState(false);
  const [help, setHelp] = useState(false);

  const location = useLocation();

  const isGarden =  useStore((state) => state.isGarden);

   const isVisible =  useStore((state) => state.isVisible);
   const setVisible =  useStore((state) => state.setVisible);


  return (
    <>
       
     <div className={`nav-sections dropdown-content ${active ? 'show' : ''}`}>
            {/* <div className="sections"> */}
     
            <div className="wordss">

          
          <div className="nav-column">
          <h1>
            Redefining
            <br/>
          Country Roads</h1>

              <h3>Learn about the diverse history of the sounds of the South through its most iconic song.</h3>
              <ul className="nav-links">
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"  onClick={() => setActive(!active)}><Link to="/">Intro</Link></li>
            </ul>
            </div>
        
            <div className="nav-column2">
              <h3>DISCOVER:</h3>
              <FlowerCard section={'SECTION ONE:'} link={<Link to="/garden/rose">Learning from the Rose</Link>}/>
              <FlowerCard section={'SECTION TWO:'} link={<Link to="/garden/chrysanthemum">The History Behind the Chrysanthemum</Link>}/>
              <FlowerCard section={'SECTION THREE:'} link={<Link to="/garden/tulip">The Roots of the Tulip</Link>}/>
            </div>
        
            {/* </div> */}
        </div>
 
      </div>
      <div className={`nav-section dropdown-content1 ${help ? 'show1' : ''}`}>
            {/* <div className="sections"> */}
     
            <div className="helps">

          
       
         Click on a flower in the garden to explore the history of a sound.
        
          
        
            {/* </div> */}
        </div>
 
      </div>
    
      <TopLeft>
     REDEFINING COUNTRY ROADS  </TopLeft>

     <div className={`bottom-right ${isGarden ? 'bottom-show' : ''}`}>      
     <button className={`helpbutton ${help ? 'open' : ''}`}  onClick={() => setHelp(!help)} >?</button>

     
    </div>
     
      <div className={`bottom-left ${isVisible ? 'bottom-show' : ''}`}>      
        <AudioPlayer location={location.pathname} tracks={["https://p.scdn.co/mp3-preview/312d9752910d21881950597b0b0efbd6b20c5ef2?cid=988dedb25cc54a18908de204182e8dab"]} trackIndex={0} image={null} title={"Take Me Home, Country Roads"} artist={"John Denver"}/>
      </div>
      <Hamburger>
          <button className={`nav-icon1 ${active ? 'open' : ''}`}  onClick={() => setActive(!active)} >
  <span></span>
  <span></span>

</button>
      </Hamburger>

    </>
  )
}
