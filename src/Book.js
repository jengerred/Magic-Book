
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

    return(
        <>
    <div className="pages">
        <div className="back"></div>

        <div className="page6"> <p>Page 2</p>    
            <Stars/>               
                <span className="magic"><p className="fit">We can also add a paragraph here. This is what it will look like with a paragraph added here. We can add a paragraph on each page by limiting the number of characters in each paragraph on each page. We can add onClick event to trigger a new page and possibly add css to look like page turning.    This page and all other pages, will have  a height requirement of equal to or less than 380 px.</p>
                </span>
               <p>Use all of the book pages as actual pages for navigation. Button or Click will change the pages numbers and text. 
                Can have one paragraph per page. On all pages except the number one page and title page *add title page* *add end page* the paragraphs have to fit a container with height of 280 px.  style= two curly braces maxHeight: "280px" two curly braces</p>
                <button onClick={endPage}>Next Page</button>
                <br/>
                <Stars/>
        </div>

        <div className="page5">
           <p className="flip">Page 1</p>
            <span className="magic">
               
                <span className="magic">
                    <h2 className="flip">The title should go here.</h2>
                </span>
                <Stars/>
            </span>
        <div>

        <p className="flip">Add iamge here</p>
        <img src={Image} alt="story pic" className="image"></img>

    </div>
      
<span className="magic">
    <p className="flip" style={{ maxHeight: "170px" }}>Add a paragraph here.   We will have to add some js to limit the amount of characters on this page to be equal to or less than height of 170px. Then the next page, and all other pages, will have  a height requirement of equal to or less than 380 px. </p>
</span>
<p className="flip">The paragraph on this page should fit a container of 170px and always have the className "flip". The rest of the styles for this page will be in the className "magic"</p>

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