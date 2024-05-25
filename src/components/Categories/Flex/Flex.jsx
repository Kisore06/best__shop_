import React, {useState} from 'react';
import './FlexBoxComponent.css'; 
import footwear from '../../../Assets/Categories/footwear-png.png';
import sport from '../../../Assets/Categories/sports-png.png';
import watch from '../../../Assets/Categories/watch.png';
import bag from '../../../Assets/Categories/bag.png';
import toy from '../../../Assets/Categories/toy.png';
import mobile from '../../../Assets/Categories/mobile.png';
import baby from '../../../Assets/Categories/baby.png';
import general from '../../../Assets/Categories/generalg.png';
import { Link } from 'react-router-dom';

const FlexBoxComponent = () => {
    const [isBox1Hovered, setIsBox1Hovered] = useState(false);
    const [isBox2Hovered, setIsBox2Hovered] = useState(false);

    
    const handleMouseEnter = () => setIsBox1Hovered(true);
    const handleMouseLeave = () => setIsBox1Hovered(false);
    const handleMouseEnter2 = () => setIsBox2Hovered(true);
    const handleMouseLeave2 = () => setIsBox2Hovered(false);
    return (
        <div id="All-categories" className="cate">
        <div className="title-align">
            <h1 className="he1" style={{marginBottom:'35px'}}>Explore By Categories</h1>
        </div>
        <div className="Best-categories">
        <div className="box-container">
            <div style={{backgroundColor:"rgb(179, 159, 152)"}} className={`box ${isBox1Hovered? '' : 'box-large'}`} >
            <div 
            // className="descript"
            style={{
                marginLeft: '40px',
                transition: 'transform 0.5s ease-in-out',
                objectFit: 'cover',
                ...(isBox1Hovered? {
                transform: "none"
                } : {
                    transform: 'scale(1.1) translateX(5%) translateY(45%)',
                })
                }}
            >
                <h3 style={{color:"rgb(67, 19, 2)"}}>Shoes & Sandals</h3>
                <h1 style={{color:"black"}}>FOOTWEAR</h1>
                </div>
                <img 
                    // className="png-footwear" 
                    src={footwear} 
                    alt="sports products"
                    style={{
                        filter: "drop-shadow(5px 5px 5px #222)",
                        height: "170px",
                        width: "150px",
                        transition: "transform 0.5s ease-in-out",
                        position: "absolute",
                        objectFit: "cover",
                        marginLeft: "40px",
                        ...(isBox1Hovered? {
                        transform: "none"
                        } : {
                        transform: "scale(1.5) translateX(98%) translateY(-10%)"
                        })
                    }}
                    />
                <Link  to={`/Footwear`} style={{textDecoration:"none", color:"inherit"}}>

                <button 
                // className="explore-button-footwear"
                style={{    
                    transition: 'opacity 0.5s ease-in-out transform 0.5s ease-in-out',
                    // transform: 'translateX(-90%) translateY(190%)',
                    backgroundColor:'rgb(67, 19, 2)' ,
                    color: 'white',
                    ...(isBox1Hovered? {
                        transform: 'translateX(-190%) translateY(190%)',
                        opacity:'0'
                    } : {
                        transform: 'translateX(-90%) translateY(190%)',
                    })
                }}
                >
                    Explore More
                </button>

                </Link>
            </div>
            <div className="box watch" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="descript">
                <h3 style={{color:"rgb(59, 160, 243)"}}>Wall Clocks & Watches</h3>
                <h1 style={{color:"grey"}}>WATCHES</h1>
                </div>
                <img className="png-watch" src={watch} alt="sports products"/>
                <Link  to={`/Watches`} style={{textDecoration:"none", color:"inherit"}}>
                <button className="explore-button-watch">Explore More</button>            
                </Link>
                </div>
            <div className="box bag" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="descript">
                <h3 style={{color:"rgb(123, 121, 225)"}}>Bags & Luggages</h3>
                <h1 style={{color:"grey"}}>BACKPACKS</h1>
                </div>
                <img className="png-bag" src={bag} alt="sports products"/>
                <Link  to={`/Bags & Luggages`} style={{textDecoration:"none", color:"inherit"}}>
                <button className="explore-button-bag">Explore More</button>            
                </Link>
                </div>
            <div className="box toy" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="descript">
                <h3 style={{color:"rgb(215, 132, 154)"}}>Toys & Gifts</h3>
                <h1 style={{color:"grey"}}>PLUSH TOYS</h1>
                </div>
                <img className="png-toy" src={toy} alt="sports products"/>
                <Link  to={`/Toys`} style={{textDecoration:"none", color:"inherit"}}>
                <button className="explore-button-toy">Explore More</button>            
                </Link>
                </div>
        </div>
        <div className="box-container">
            <div className="box sports" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                <div className="descript">
                <h3 style={{color:"rgb(188, 142, 4)"}}>Sports Products</h3>
                <h1 style={{color:"grey"}}>EQIPMENTS</h1>
                </div>
                <img className="png-sport" src={sport} alt="sports products"/>
                <Link  to={`/Sports Products`} style={{textDecoration:"none", color:"inherit"}}>
                <button className="explore-button">Explore More</button>
                </Link>
            </div>
            <div className="box mobile" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <div className="descript">
                <h3 style={{color:"rgb(251, 13, 13)"}}>Mobile Accessories</h3>
                <h1 style={{color:"grey"}}>MOBILES</h1>
                </div>
                <img className="png-mobile" src={mobile} alt="sports products"/>
                <Link  to={`/Mobiles`} style={{textDecoration:"none", color:"inherit"}}>
                <button className="explore-button-mobile">Explore More</button>
                </Link>
            </div>
            <div className="box baby" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <div className="descript">
                <h3 style={{color:"green"}}>Baby care Products</h3>
                <h1 style={{color:"grey"}}>LOTIONS</h1>
                </div>
                <img className="png-baby" src={baby} alt="sports products"/>
                <Link  to={`/Baby Products`} style={{textDecoration:"none", color:"inherit"}}>
                <button className="explore-button-baby">Explore More</button>
                </Link>
            </div>
            <div className={`box ${isBox2Hovered? '' : 'box-large'} general`}>
            <div 
            // className="descript"
            style={{
                marginLeft: '40px',
                transition: 'transform 0.5s ease-in-out',
                objectFit: 'cover',
                ...(isBox2Hovered? {
                transform: "none"
                } : {
                    transform: 'scale(1.1) translateX(5%) translateY(45%)',
                })
            }}
            >
                <h3 style={{color:"rgb(82, 82, 82)"}}>General Goods</h3>
                <h1 style={{color:"black"}}>STATIONARY</h1>
                </div>
                <img 
                    // className="png-sport" 
                    src={general} 
                    alt="sports products"
                    style={{
                        filter: 'drop-shadow(5px 5px 5px #222)',
                        height:'180px',
                        width: '220px',
                        transition: 'transform 0.5s ease-in-out',
                        position: 'absolute',
                        objectFit: 'cover',
                        marginLeft: '40px',
                        ...(isBox2Hovered? {
                        transform: "none"
                        } : {
                        transform: "scale(1.5) translateX(60%) translateY(-15%)"
                        })
                    }}

                />
                <Link  to={`/General Goods`} style={{textDecoration:"none", color:"inherit"}}>
                <button 
                // className="explore-button-general"
                style={{    
                    transition: 'opacity 0.5s ease-in-out transform 0.5s ease-in-out',
                    transform: 'translateX(-90%) translateY(190%)',
                    backgroundColor:'rgb(82, 82, 82)' ,
                    color: 'white',
                    ...(isBox2Hovered? {
                        transform: 'translateX(-190%) translateY(190%)',
                        opacity:'0'} : {
                        transform: 'translateX(-90%) translateY(190%)',
                    })
                }}
                >
                    Explore More
                </button>
                </Link>
            </div>
        </div>
        
        </div>
        </div>
    );
};

export default FlexBoxComponent;
