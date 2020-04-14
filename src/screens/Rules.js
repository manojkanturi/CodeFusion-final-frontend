import React from 'react';
import Navbar from '../screens/NavBar';
import { Link } from "react-router-dom";
class Rules extends React.Component {
  render() {
    return (
      <div className="Container-fluid">
        <link rel="stylesheet" href="css/rules.css" />
        <Navbar />
        <br /><br /><br />
        <div className="RulesTitle">
          <h1>Rules For Programming Competition <i className="fas fa-gavel" /></h1>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>Format</h1>
            <p>The CodeFusion is open to anyone with a knack of programming.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>Eligibility</h1>
            <p>Anyone with a Code Fusion account and access to the Internet.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>Rule 1</h1>
            <p>If you fails to submit program before time up, your code will be auto submitted and you won't able to re-submit the same challenge again.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>Rule 2</h1>
            <p> On clicking on OK button your challenge's count down starts.You have been given extra 1 min for understanding of the compiler.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 3</h1>
            <p>If the user refresh the page during the Competition then the user will be disqualified from the contest.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 4</h1>
            <p>If you have multiple inputs then each new line represents another input.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 5</h1>
            <p>If you provide any sort of shortcuts or false information to become eligible for the prizes then you won't be rewarded.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 6</h1>
            <p>Getting involved in any malicious activity during any stage of the Competition can disqualify the participant.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 7</h1>
            <p>Competitors must work alone , they approximately have certain time limit to solve their programming problems.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 8</h1>
            <p>The inputs and outputs of the Competitor must match with the sample input and output given, using any kind shortcuts may not able to generate your result.</p>
          </div>
        </div>
        <div className="box container">
          <div className="inside-box">
            <h1>  Rule 9</h1>
            <p>You have give your inputs in the input text area because it is not an interactive shell</p>
          </div>
        </div>
        
        <hr className="featurette-divider" />
        <footer className="container">
               {/*<p className="float-right"><Link to="/rules" >Back to top</Link></p>*/}
              <p>
                © Code Fusion Company, Inc. · <Link to="">Home</Link> {" "}
                
              </p>
            </footer>

      </div>
    )
  }
}
export default Rules;