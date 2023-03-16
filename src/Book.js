
import {useNavigate, useLocation} from 'react-router-dom';
import './Book.styles.css';
import Image from './image.png';
import Stars from './Stars';
import Cover from './Cover';



function Book(){

    const navigate = useNavigate();
    const location = useLocation();
    
        const endPage = () =>{ 
          let { from } = location.state || { from : {pathname : '/end'}};
          navigate(from);
        }
        const prevPage = () =>{ 
            let { from } = location.state || { from : {pathname : '/title'}};
            navigate(from);
          }

    return(
        <>
    <div className="pages">
        <div className="back"></div>

        <div className="page6" onClick={endPage}> 
        <br/>
        <button>next page</button>
        <p>Page 2</p>    
            <Stars/>               
                <span className="magic"><p className="fit">We can also add a paragraph here. This is what it will look like with a paragraph added here. The paragraph on this page should fit a container of 280px.</p>
                </span>

     
                <br/>
                <Stars/>
        </div>

        <div className="page5" onClick={prevPage}>
            <br/>
            <button className="flip">Previous Page</button>
           <p className="flip">Page 1</p>
        
   
               
                <span className="magic">
                    <h2 className="flip">The title should go here.</h2>
                </span>
                <Stars/>
        
        <div>

        <p className="flip">Add iamge here</p>
        <img src={Image} alt="story pic" className="image"></img>

    </div>
      
<span className="magic">
    <p className="flip" style={{ maxHeight: "170px" }}>Add a paragraph here. The paragraph on this page should fit a container of 170px and always have the className "flip". The rest of the styles for this page will be in the className "magic".</p>
</span>

        </div>

        <div className="pages">
     
            <div className="back"></div>
            <div className="page4"></div>
            <div className="page3"></div>
            <div className="page2"></div>
            <div className="page1"></div>
            <Cover/>
        </div>

    </div>
        </>
    )
}
export default Book;