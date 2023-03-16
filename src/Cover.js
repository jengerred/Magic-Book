import './Cover.styles.css';

import {useNavigate, useLocation} from 'react-router-dom';




 function Cover () {
  const navigate = useNavigate();
const location = useLocation();

    const openBook = () =>{ 
      let { from } = location.state || { from : {pathname : '/title'}};
      navigate(from);
    }


    return (
        <>

            <div className="container">
       <div className="book" onClick={openBook}>
          <div className="front">
            <div className="cover">
<h1 className="magic-title">Magic Storybook</h1>
              <br/>
              <h1>Title</h1>
                        <p className="author">Author</p>
            </div>
          </div>
          <div className="left-side">
            <h2>
              <span className="magic-title">Magic Storybook</span>
              <span>Title</span>
            
              <span>Author</span>
            </h2>
          </div>
        </div>
      
      </div>
        </>
    )
 }
 export default Cover;