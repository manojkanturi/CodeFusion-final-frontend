import React from 'react';
import Navbar from './NavBar';
//import { Link } from 'react-router-dom';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="AboutusPage">
        <link rel="stylesheet" href="css/aboutus.css" />
        <Navbar /> <br /><br />
        
        {/*corousel image view*/}
        <h1 className="aboutourprojecttitle text-center"> <i className="fas fa-arrow-down" /> About Our project <i className="fas fa-arrow-down" /></h1>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
            <li data-target="#myCarousel" data-slide-to={3} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="carousel_img first-slide" src="images/slide01.jpg" alt="First slide" />
              <div className="container">
                <div className="carousel-caption">
                  {/*<h1>Code Fusion.</h1>*/}
                  <h2>What is Programming Competition ?</h2><br />
                  <h4>
                    <ul>
                      <li>This Project we can easily write a different program and compile it and debug in on-line.</li>
                      <br />
                      <li>The ability to use different compilers allow a programmer to pick up the fastest or the most convenient tool to compile the code and remove the error.</li><br />
                      <li>A web based application can be used remotely throughout any network connection and it is platform
                    independent.</li><br />
                      <li>The trouble of installing the compiler and software on each computer is to avoid it.</li><br />
                      <li>Result declared on the time of after execution on the server PC</li><br />
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel_img second-slide" src="images/slide02.jpg" alt="Second slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h2>Why we need an impartial judge in Programming Competition?</h2><br />
                  <h4>
                    <ul>
                      <li>Eighty percent of the time, the program is checked manually.</li><br />
                      <li>A lot of people participate.</li><br />
                      <li>People prefer the contests to be online(on practical based)</li><br />
                      <li>The judging is done automatically by host machines. </li><br />
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel_img third-slide" src="images/slide03.jpg" alt="Third slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h2>
                    Project Background
              </h2><br />
                  <h4>
                    <ol>
                      <li>Makes you a desirable candidate to major companies</li><br />
                      <li>Makes you faster and more focused</li><br />
                      <li>Helps you solve complicated problems</li><br />
                      <li>Teaches you how to work in terms</li><br />
                      <li>Training and participation helps you prepare for a career in coding</li><br />
                    </ol>
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel_img fourth-slide" src="images/slide04.jpg" alt="Fourth slide" />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h2>
                    Project Objectives
              </h2><br />
                  <h4>
                    <ul>
                      <li>Multiple languages supports (C,C++,JAVA,JAVASCRIPT,PYTHON)</li><br />
                      <li>Quick checking,No biases</li><br />
                      <li>It can be use on mobile devices</li><br />
                      <li>User can execute the program anywhere</li><br />
                      <li>No need to install any software on devices</li><br />
                      <li>Support for compiling various languages source code</li><br />
                      <li>User friendly interface</li><br />
                    </ul>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <br/>

       <div className="container marketing"> 
        <hr className="featurette-divider" />
        <div className="row featurette">
                <div className="col-md-7">
                <h2 className="featurette-heading">About Code Fusion </h2>
                    <p className="lead">Code Fusion was created as a platform to help programmers make it big in the world of algorithms, computer programming
                     and programming contests. This platform is open to the entire programming community to host their own contests.</p>
                    <button className="btn btn-outline-primary" type="button">View details</button>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="images/aboutus/2.png" alt="Generic placeholder"/>
                </div>
           </div>
                    
            <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7  order-md-2">
                      <h2 className="featurette-heading">How It All Started ? </h2>
                      <p className="lead">We want to bulid a website that can able to compile different programming languages that gives output and match with the
                      correct results for our own college , also it should be able to host programming competitions which is very flexible
                        from anywhere to participate and awarded on the basis of their performance.</p>

                </div>
                <div className="col-md-4 order-md-1">
                      <img className="featurette-image img-fluid mx-auto" src="images/aboutus/bulb.png" alt="Generic placeholder"/>
                </div>
              </div>

        
            <br /><hr className="featurette-divider" />
            </div>

        <div className="SectionOne">
          <p>Department Of Computer Science & Engineering</p>
          <hr className="hrtitle" />
          <h2>Department Staff</h2>
        </div>

        <div className="imageSectionSecond row">
          <div className="imageStyle col">
            <img className="styleofimage" src="images/aboutus/e.png" alt="HOD" />
            <p>Head of Dept.</p>
            <h2>A.POORNA CHANDRA REDDY</h2>
            <p>pcreddy@cjits.org</p>
           

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/aboutus/d.jpg" alt="Guide" />
            <p>Project Guide</p>
            <h2>Mr.M.Ramaraju</h2>
            <p>mrraju808@gmail.com</p>
          </div>
                  
        </div>

        <hr className="featurette-divider" />
        <div className="teammemberdiv">
          <h1 className="teammembertitle text-center">
            <i class="fas fa-user-cog" />Team members</h1>
        </div>
        <div className="imageSectionFirst row">
          <div className="imageStyle col">
            <img className="styleofimage" src="images/aboutus/pradeep.jpg" alt="" />
          
            <h2>K.Pradeep</h2>
            <p>16681A0563 </p>
            <p>B.Tech FY (CSE) </p>

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/aboutus/harshith.jpg" alt="" />
            
            <h2>K.Harshith</h2>
            <p>16681A0564</p>
            <p>B.Tech FY (CSE) </p>
          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/aboutus/ryan.jpg" alt="" />
            
            <h2>Larsen Ryan Santos</h2>
            <p>16681A0566</p>
            <p>B.Tech FY (CSE) </p>

          </div>
          <div className="imageStyle col">
            <img className="styleofimage" src="images/aboutus/manoj.png" alt="Manoj's pic" />
            
            <h2>K.Manoj</h2>
            <p>17685A0503</p>
            <p>B.Tech FY (CSE) </p>
          </div>
        </div>

      


      </div>
    );
  }
}
export default AboutUs;