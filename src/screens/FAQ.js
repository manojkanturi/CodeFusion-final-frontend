import React from 'react';
import Navbar from './NavBar';

class FAQ extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar /> <br />
        <div className="container">
          <h1 className="faqtitle text-center"> FAQ <i className="questionicon fas fa-question-circle" /></h1>
          <hr className="featurette-divider" />
                        <p>Many people are asking questions that have been answered before. This FAQ covers almost all of them, so please make sure you have read it before using this site.</p>
          <link rel="stylesheet" href="css/faqstyle.css" />
          <h2 className="faqquesttitle">Basics</h2>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Do I need an account to participate in the competition? </h3>
            <p>
            You need to be a member who holds a CodeFusion account. If you don’t have a account, you can create a new one, CodeFusion doesn’t charge to make a new one.
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Can I run compile my program without an account?</h3>
            <p>
            Yes, you can write, compile and get the output of the program for that it is not necessary to have an account. Code Fusion is an opensource 
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Whether a user can add programming questions?</h3>
            <p>
            The CodeFusion doesn’t give access to their user to add questions. Only the admin user can create, add and host the questions.
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >How many times you can submit a program?</h3>
            <p>
            You can submit your program results only once although you can compile multiple times until you get the results. There is a time limit for every program, you have to finish it within the time given time limit.
          </p>
          </div>
          <h2 className="faqquesttitle">Mobile</h2>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Can I access the CodeFusion site with a mobile?</h3>
            <p>
            The minimum requirement to access the CodeFusion website is that you must have an internet connection either you may use it with mobile, laptop, desktop as it is flexible service. It is developed in a way you can use it with a mobile view.
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >How to access the Code Fusion site through mobile?</h3>
            <p>
            In order to use and access the Code Fusion site, open your browser such as chrome and just enter the site address.
          </p>
          </div>
          <h2 className="faqquesttitle">Account</h2>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >How to create a new account ? </h3>
            <p>
            Open the CodeFusion site and on the Signup button in the NavBar and Enter the following details. 
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >How to Log in to the CodeFusion ?</h3>
            <p>
            Click on the Sign in button in the Navigation Bar and Enter your Email address and password , then click on Login .
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >What if I don’t remember my password ?</h3>
            <p>
            If you forgot your current password , then click on Login button , on the next page click on Forgot password button and Enter the following details .
          </p>
          </div>
          
          <h2 className="faqquesttitle">Service</h2>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Does CodeFusion charge any cost to use their service?</h3>
            <p>
            CodeFusion is a not-for-profit educational initiative by the team of the final year of CSE-2. It is developed for students who don't have hardware or having trouble installing and setting packages. It is a flexible and friendly service.
          </p>
          </div>
          
          <h2 className="faqquesttitle">Requirement</h2>
         
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Do I need to install any software, libraries, packages?</h3>
            <p>
            The answer to this question is “NO”. The user does not need to install any sort of libraries, software or packages, etc. Just make sure you must have a good internet connection and a browser. The user can access the site and participate in the competition with any kind of smart device.
          </p>
          </div>
          <h2 className="faqquesttitle">Time pattern in Competition</h2>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >What happens if i don’t submit the program within the given time limit?</h3>
            <p>
            If you are not able to get the results within the period, as soon as the time gets over then the program will be automatically submitted.
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >Who can prepare and host questions for the Competition?</h3>
            <p>
            Only the Admin can upload, notify different types of contest dates, prepare and add questions for the competition. The user has some sort of restriction.
          </p>
          </div>
          <div className="faqquestdiv col">
            <h3 className="faqquestname" >How does the time limit work?</h3>
            <p>
            Your program must read, process, and output the result for an input file within the specified time limit.
            An input file can contain a single test case or multiple test cases depending on the problem setter’s discretion.
            A test case will be of the format mentioned in the problem statement.
            </p>
          </div>
          

          <hr className="featurette-divider" />

        </div>
      </div>
    )
  }
}
export default FAQ;
