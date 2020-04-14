import React from "react";
import NavBar from './NavBar'
import { Link } from "react-router-dom";
class GetPrepare extends React.Component {
render() {
    return (
    <div className="container-marketing">
        <div>
            <NavBar />
            <link href="css/w3.css" rel="stylesheet" media="all" />
            <br/><br/><br/>
        
            <div className="container marketing">
                <h1 style={{ textAlign: 'center' }}>Prepare for Placement & Get Placed</h1>
                <hr className="featurette-divider" />
                <div className="row">
                                
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="images/img/29.jpg" alt="Generic placeholder" width={180} height={180}/>
                        <h2><i className="fas fa-book fa-lg"></i> Previous Questions of Top MNC's</h2>
                        <p>We are providing all the MNC and other companies Placement Papers. So the candidates who had recently
                        applied for the IT Job Openings can visit this page and download the written test papers.</p>
                        <p><button className="btn btn-outline-secondary" >View details </button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="images/img/8.jpg" alt="Generic placeholder" width={180} height={180}/>
                        <h2><i className="fas fa-question fa-lg"></i> Interview Questions</h2>
                        <p>Most Common Job Interview Questions and Answers. Here's a comprehensive list, along with
                        some of the best answers.</p>
                        <p><button className="btn btn-outline-primary"  data-toggle="tooltip" title="Click here" >View details </button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="images/img/20.jpg" alt="Generic placeholder" width={180} height={180} />
                        <h2><i className="fas fa-laptop-code"></i> Level wise IT companies list for Preference</h2>
                        <p> These companies analyze the innovation and new technologies & intend to optimize the
                        current processes in the industry.</p>
                        <p><button className="btn btn-outline-secondary" data-toggle="tooltip" title="Click here" >View details </button></p>
                    </div>
                    
                </div>
                <hr className="featurette-divider" />
            </div>
        
            <div className="container marketing">
            
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="images/img/26.jpg" alt="Generic placeholder" width={180} height={180} />
                        <h2><i className="far fa-file-code fa-lg"></i> Domain based Job Description</h2>
                        <p>Get the right Domain specialist job with company ratings , salaries & responsibilities .</p>
                        <p><button className="btn btn-outline-info"  data-toggle="tooltip" title="Click here" >View details </button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="images/img/13.jpg" alt="Generic placeholder" width={180} height={180} />
                        <h2><i className="fab fa-windows fa-lg"></i> Trending Technologies in 2020</h2>
                        <p>The year 2020 brings along many game-changing technology trends that we will come to embrace .</p>
                        <p><button className="btn btn-outline-warning" data-toggle="tooltip" title="Click here" >View details </button></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="images/img/21.png" alt="Generic placeholder" width={180} height={180}/>
                        <h2><i className="fas fa-building fa-lg"></i> Top 10 Multinational Companies</h2>
                        <p>Every student or educated person dream to work with MNC’s. It gives the platform to approach goals and aims.
                        It’s a place where you get experience, credibility and confidence to move ahead in career. </p>
                        <p><button className="btn btn-outline-danger" data-toggle="tooltip" title="Click here" >View details</button></p>
                    </div>
                
                </div>
                <hr className="featurette-divider" />
            </div>
   
            <footer className="container">
                <p className="float-right"><Link to="/">Back to Home</Link></p>
                <p>&copy; Code Fusion Company, Inc. &middot; <Link>Privacy</Link> &middot; <Link>Terms</Link></p>
            </footer>

        </div>
    </div>
    );
    }
}
export default GetPrepare;