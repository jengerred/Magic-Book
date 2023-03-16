import './Book.styles.css';
import Stars from './Stars';
import Cover from './Cover';

import {useNavigate, useLocation} from 'react-router-dom';

function End(){

    const navigate = useNavigate();
    const location = useLocation();
    
        const prevPage = () =>{ 
          let { from } = location.state || { from : {pathname : '/book'}};
          navigate(from);
        }
        const startPage = () =>{ 
        let { from } = location.state || { from : {pathname : '/title'}};
        navigate(from);
      }
    return(
        <>
        <div className="pages">
            <div className="back"></div>
            <div className="page5" onClick={prevPage}>
                <br/>
            <button className="flip">Previous Page</button>
            </div>
             <div className="page3"></div>
            <div className="page2" onclick={startPage}>
                <div className="top">
                    <div className="flip"><Stars/></div>
                    <br/>
                    <Stars/>
                    <span className="magic"><h1>The End</h1></span>
                    <Stars/>
                    <br/>
                    <div className="flip"><Stars/></div>
                </div>
                <br/><br/>
              </div>
            <div className="page1"></div>
             <Cover/>
        </div>
        </>
    )

}
export default End;