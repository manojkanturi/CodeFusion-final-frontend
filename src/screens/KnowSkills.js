import React from "react";
import NavBar from './NavBar'
class KnowSkills extends React.Component {
    render() {
     return (
     <div className="container-marketing">
         <div>
             <NavBar />
             
             <br /><br /><br />

        <div className="container marketing">
                     <div className="jumbotron" style={{ backgroundImage: 'url(images/skills/1.jpg)', backgroundSize: '100%'}}>
                <h1 className="display-3" style={{color:'white',textAlign:"left"}}><b>Know Yourself!</b></h1>
                <p className="lead" style={{color:'white'}}><b>Skills and abilities are tasks that you naturally do well, talents and strengths ... Knowing your skills will also help
                you write resumes and prepare for interviews.</b></p>
                <hr className="my-4"/>
                <p style={{color:'white'}}> Your skills can help you choose the career that's right for you. Take this self-test, and find out which business skills you most need to learn.</p>
                <p className="lead">
                    <button className="btn btn-outline-primary">Learn more</button>
                </p>
            </div>
        </div>
        <h1 style={{textAlign:'center'}}>This Page is under development</h1><br/>
    <div className="container marketing">
        <hr className="featurette-divider"/>

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Think & Code</h2>
                    <p className="lead">Try your hand at one of our many practice problems and submit your solution in the language of
                        your choice.</p>
                    <button className="btn btn-outline-primary" type="button">View details</button>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="images/skills/2.jpg" alt="Generic placeholder"/>
                </div>
            </div>
            <hr className="featurette-divider"/>
    </div>
   
    <br/>
    
    <h1 style={{textAlign:'center'}}>Subject wise Quiz</h1><br/>
    
    
    
    <div className="container marketing">
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src="images/skills/5.png" alt="Generic placeholder" width={180} height={180}/>
                    <h2>Opearating System</h2>
                    <p>If little steps are what it takes to lay the road to a successful career in life, then the gait with you
                        take each step,
                        matters a lot. A step-by-step list of preparation tips and strategies</p>
                    <p><button className="w3-button w3-pink w3-ripple w3-round-xlarge" >View details </button></p>
                </div>

                <div className="col-lg-4">
                    <img className="rounded-circle" src="images/skills/6.jpg" alt="Generic placeholder" width={180} height={180}/>
                    <h2>Software Engineering</h2>
                    <p>How do you find our that how good you are in programming ? Prove your skills, win prizes, practice coding
                        with other coders, have fun.</p>
                    <p><button className="w3-button w3-deep-purple w3-ripple w3-round-xlarge">View details</button></p>
                </div>

                <div className="col-lg-4">
                    <img className="rounded-circle" src="images/skills/7.png" alt="Generic placeholder" width={180} height={180}/>
                    <h2>Data Structures</h2>
                    <p>Here is where you can show off your computer programming skills.Participate in programming challenges,
                        coding competitions.Register now to compete with others</p>
                    <p><button className="w3-button w3-cyan w3-ripple w3-round-xlarge">View details</button></p>
                </div>
            </div>
    </div>

               
        <div className="container marketing">
        
            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" src="images/skills/8.jpg" alt="Generic placeholder" width={180} height={180}/>
                    <h2>C and C++</h2>
                    <p>If little steps are what it takes to lay the road to a successful career in life, then the gait with you
                        take each step, matters a lot. A step-by-step list of preparation tips and strategies</p>
                    <p><button className="w3-button w3-light-green w3-ripple w3-round-xlarge" >View details</button></p>
                </div>

                <div className="col-lg-4">
                    <img className="rounded-circle" src="images/skills/9.png" alt="Generic placeholder" width={180} height={180}/>
                    <h2>Java & Python</h2>
                    <p>How do you find our that how good you are in programming ? Prove your skills, win prizes, practice coding
                        with other coders, have fun.</p>
                    <p><button className="w3-button w3-orange w3-ripple w3-round-xlarge" >View details </button></p>
                </div>
                
            </div>


            <hr className="featurette-divider"/>
            
            <div className="row featurette">
                <div className="col-md-7  order-md-2">
                    <h2 className="featurette-heading">Techinical <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">A vast majority of problems appearing in programming contests are mathematical or logical in
                        nature. Typical such tasks
                        belong to one of the following categories: combinatorics, number theory, graph theory, geometry, string
                        analysis and
                        data structures.</p>
                        <button className="btn btn-outline-primary" type="button">View details</button>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="images/skills/3.jpg" alt="Generic placeholder"/>
                </div>
            </div>
           
            <hr className="featurette-divider"/>
                
            

        </div>











    </div>    
     </div>
 );
}
}
export default KnowSkills;
