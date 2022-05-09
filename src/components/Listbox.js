import React,{useState} from 'react';
import { useSpring} from '@react-spring/three'
// import { Html } from '@react-three/drei'

// import Button from './Button'

const Listbox = props => {

  const [page, setPage] = useState(0);  

    const clicked =  e => {
        // e.preventDefault();s
        console.log(e.target.id)
        setPage(e.target.id)
        props.clicked(e.target.id);
    }  
    const nextClicked =  e => {
        const result=parseInt(page,10)
        const result1=result+1
        setPage(result1)
        console.log(result1)
        props.clicked(result1);
  }      
    const getRandomInt= max => {
        return Math.floor(Math.random() * max);
      }

      const [active, setActive] = useState(false);

      const { opacity } = useSpring({
        opacity: active ? 1:0,
      }); 

      const positions =[
        [-0.15, 3, -1.43],
        [-0.15, 4, -1.43],
        [-0.15, 5, -1.43],
        [-0.15, 6, -1.43],
        [-0.15, 7, -1.43],
        [-0.15, 8, -1.43],
        [-0.15, 9, -1.43]
        [-0.15, 10, -1.43]
      ];
      const [hidden, setVisible] = useState()

    return (
        <>
                {
      
                //     props.items.map((item, idx) => (
                //         <Html    
               
                //                 distanceFactor={13}
                //                 occlude
                //                 onOcclude={setVisible}
                //                 position={positions[idx]}>

                //     <button className="small"
                //     onClick={clicked}

                //     name={item.track.id}
                //     id={idx}
                //     >
                        
                //         {idx}
                // </button>
                //  </Html>

                //     )
                //     )
                }
        </>

    );
}

export default Listbox;



