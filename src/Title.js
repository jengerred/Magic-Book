import {useNavigate, useLocation} from 'react-router-dom';
import Cover from './Cover';
import './Book.styles.css';
import CurvedText from './CurvedText';



function Title(){

    const navigate = useNavigate();
    const location = useLocation();

    const turnPage = () =>{ 
        let { from } = location.state || { from : {pathname : '/book'}};
        navigate(from);
      }
      const coverPage = () =>{ 
        let { from } = location.state || { from : {pathname : '/'}};
        navigate(from);
      }
    return (
        <>
      
        <div className="pages">
        <div className="back"> </div>
            <div className="page4" onClick={turnPage}>  
            <br/>
            <button >Next Page</button>
            <CurvedText/>
        <h5>By Author Name and the Magic Storybook Generator</h5>
        <div ></div>
            </div>
           
            <div className="page2"></div>
            <div className="page1" onClick={coverPage}></div>
           
            <Cover/>
            </div>
            </>
    )
}
export default Title;