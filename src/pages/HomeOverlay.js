import styled from 'styled-components'
import AudioPlayer from "../components/AudioPlayer";
import FlowerCard from "../components/FlowerCard";
import MoveText from "../components/MoveText";

import steel from "../components/assets/steel.mp3"
import useStore from "../appStore";
import  {  useState,useRef} from "react"
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
color:white;
width:25%;
// background:white;
  position: absolute;
  bottom: 1vw;
  left: 3vw;

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
  const location = useLocation();

  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)

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

              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
              <ul className="nav-links">
                <li class="nav-item"><Link to="/about">About</Link></li>
                <li class="nav-item"  onClick={() => setActive(!active)}><Link to="/">Intro</Link></li>
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
    
    
      <TopLeft>
      REDEFINING COUNTRY ROADS
      </TopLeft>
      <BottomLeft>      
        <AudioPlayer location={location.pathname} tracks={[steel]} trackIndex={0} image={null} title={"Take Me Home Country Roads"} artist={"John Denver"}/>
      </BottomLeft>
      <Hamburger>
          <button id="btn" className={`dropbtn ${active ? 'dark' : ''}`}  onClick={() => setActive(!active)} ></button>
      </Hamburger>
     
    </>
  )
}