import './Book.styles.css';
import Stars from './Stars';
import Cover from './Cover';

function End(){
    return(
        <>
        <div className="pages">
            <div className="back"></div>
            <div className="page5"></div>
             <div className="page3"></div>
            <div className="page2">
                <div className="top">
                    <div className="flip"><Stars/></div>
                    <br/>
                    <Stars/>
                    <span className="magic"><h1>The End</h1></span>
                    <Stars/>
                    <br/>
                    <div className="flip"><Stars/></div>
                </div>
            </div>
            <div className="page1"></div>
             <Cover/>
        </div>
        </>
    )

}
export default End;