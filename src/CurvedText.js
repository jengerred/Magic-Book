import ReactCurvedText from "react-curved-text";
import './Cover.styles.css';

function CurvedText(){
    return (
<ReactCurvedText
reversed={true}
margin={50}
width={370}
height={300}
cx={190}
cy={220}
rx={100}
ry={100}
startOffset={100} /*this changes the position*/
text="Title You Chose"

/>

    )
}
export default CurvedText;