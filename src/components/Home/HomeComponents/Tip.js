import React, {useState, useEffect} from 'react'
import {Card, Image} from 'semantic-ui-react'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

// export default function Tip() {
//   return (
//     <Card>
//       <Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid/>
//       <Card.Content>
//         <Card.Description>
//           Tip description Tip description Tip description Tip description Tip description Tip description
//           Tip description
//         </Card.Description>
//       </Card.Content>
//     </Card>
//   )
// }

export default function Tip(){
  const [tips, setTips] = useState([]);
  const fetchTips = async() => {
    let num = (Math.random()*3)|0;
    console.log(num)
    const db = getFirestore();
    const response = query(collection(db, 'tips'), where('random', '==', num));
    const snap = await getDocs(response);
    snap.forEach((doc) => {
      setTips([...tips, doc.data()])
    });
  }
  useEffect(() => {
    fetchTips();
  }, [])
  return(
    <div>
      {tips && tips.map(singleTip => {
        return(
            <Card>
              <Image src={singleTip.image} fluid/>
              <Card.Content>
                <Card.Description>
                  {singleTip.tip}
                </Card.Description>
              </Card.Content>
            </Card>
        )
      })}
    </div>
  )
}
