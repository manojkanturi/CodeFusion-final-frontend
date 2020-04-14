import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Modal from "./Modal";
import "../css/Home.css";
import "../css/Modal.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          <br />
          <br />
          <br />
          <main role="main">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
                <li data-target="#myCarousel" data-slide-to={3} />
                <li data-target="#myCarousel" data-slide-to={4} />
                <li data-target="#myCarousel" data-slide-to={5} />
                <li data-target="#myCarousel" data-slide-to={6} />
                <li data-target="#myCarousel" data-slide-to={7} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="carousel_img first-slide"
                    src="images/slide/3.jpg"
                    alt="First slide"
                  />
                  
                </div>
                <div className="carousel-item">
                  <img
                    className="carousel_img second-slide"
                    src="images/slide/5.jpg"
                    alt="Second slide"
                  />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Compile, Practice , Compete, Debug.</h1>
                      <p>
                        Code faster, build better with Code Fusion which allows
                        you to compile source code and excute it in different
                        programming Languages. The advantage of Code Fusion is
                        no setups and configurations are necessary. There is no
                        hardware limitation to see the output of your program.
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="btn btn-lg btn-primary"
                          role="button"
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="carousel_img third-slide"
                    src="images/slide/6.jpg"
                    alt="Third slide"
                  />
                  <div className="container">
                    <div className="carousel-caption">
                      <p>
                        <Link
                          to="/"
                          className="btn btn-lg btn-primary"
                          role="button"
                        >
                          Click to know more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="carousel_img fourth-slide"
                    src="images/slide/7.jpg"
                    alt="Fourth slide"
                  />
                  <div className="container">
                    <div className="carousel-caption text-left">
                      <h1>Run &amp; Get Results</h1>
                      <p>
                        Choose a programming language, enter the source code
                        with optional input data... and you are ready to go!!!!
                      </p>
                      <p>
                        <Link
                          to="/editor/NA"
                          className="btn btn-lg btn-primary"
                          role="button"
                        >
                          Enter now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="carousel_img fifth-slide"
                    src="images/slide/8.jpg"
                    alt="Fifth slide"
                  />
                  <div className="container">
                    <div className="carousel-caption text-left">
                      <h1>Be the developer you want to be.</h1>
                      <p>Join our thriving community of Developers..</p>
                      <p>
                        <Link
                          to="/"
                          className="btn btn-lg btn-primary"
                          role="button"
                        >
                          Join now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="carousel_img sixth-slide"
                    src="images/slide/9.jpg"
                    alt="Sixth slide"
                  />
                  <div className="container">
                    <div className="carousel-caption">
                      <h1>Participate and Take a challenge.</h1>
                      <p>
                        Join in the programming practice competition and improve
                        your programming skills and win prizes.
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="btn btn-lg btn-primary"
                          role="button"
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="carousel_img seventh-slide"
                    src="images/slide/2.jpg"
                    alt="Seventh slide"
                  />
                  <div className="container">
                    <div className="carousel-caption text-right">
                      <h1>Know your skills for one more for good measure.</h1>
                      <p>
                        Test yourself how much you know about your technical
                        level and where you stand..!!!
                      </p>
                      <p>
                        <Link
                          to="/"
                          className="btn btn-lg btn-primary"
                          href="#"
                          role="button"
                        >
                          Browse gallery
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>

            {/* Marketing messaging and featurettes
      ================================================== */}
            {/* Wrap the rest of the page in another container to center all the content. */}
            <br />
            <br />
            <Modal
              modalText="Please Sign In to access this page."
              show={this.state.show}
              handleClose={this.hideModal}
            />
            <div className="container marketing">
              {/* Three columns of text below the carousel */}
              <div className="row">
                <div className="col-lg-4">
                  <img
                    className="rounded-circle"
                    src="images/img/26.jpg"
                    alt="Generic placeholder"
                    width={170}
                    height={170}
                  />
                  <h2>Programs to Solve</h2>
                  <p>
                  How do you find our that how good you are in programming ? Solve previous year Placement Questions inorder to enhance yourself.</p>
                  <p>
                    {" "}
                    <Link className="btn btn-secondary" to="/prepareplacement" data-toggle="tooltip" title="Let's Solve">
                      Open »
                    </Link>
                  </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <img
                    className="rounded-circle"
                    src="images/img/29.jpg"
                    alt="Generic placeholder"
                    width={160}
                    height={160}
                  />
                  <h2>Instant Execution</h2>
                  <p>
                    How do you find our that how good you are in programming ?
                    Write code as per your required programming language, compile the program, enter inputs and get output.
                  </p>
                  <p>
                    <Link
                      to="/editor/NA"
                      className="btn btn-secondary"
                      role="button"
                      data-toggle="tooltip" title="Click here to open Compiler"
                    >
                      Let's Go »
                    </Link>
                  </p>
                </div>
                {/* /.col-lg-4 */}
                <div className="col-lg-4">
                  <img
                    className="rounded-circle"
                    src="images/img/27.png"
                    alt="Generic placeholder"
                    width={160}
                    height={160}
                  />
                  <h2>Take a challenge</h2>
                  <p>
                    Here is where you can show off your computer programming
                    skills.Participate in programming challenges, coding
                    competitions.Register now to compete with others
                  </p>
                  <p>
                    {" "}
                    <Link className="btn btn-secondary" to="/showquestion" data-toggle="tooltip" title="Click to Enter">
                      Start »
                    </Link>
                  </p>
                </div>
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
              {/* START THE FEATURETTES   data-src="holder.js/500x500/auto" */}
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Write code and get results.{" "}
                    <span className="text-muted">It'll blow your mind.</span>
                  </h2>
                  <p className="lead" />
                  In our application, even if the client machine has no specific
                  compilers installed, the user can write/upload a program and
                  save the snippet. Code Fusion can provide different compilers
                  for various source languages as a service, like C, C++, Java,
                  Python or any other languages.
                  <p />
                </div>
                <div className="col-md-5">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/10.png"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">
                    Oh yeah, it's that good.{" "}
                    <span className="text-muted">See for yourself.</span>
                  </h2>
                  <p className="lead">
                    A vast majority of problems appearing in programming
                    contests are mathematical or logical in nature. Typical such
                    tasks belong to one of the following categories:
                    combinatorics, number theory, graph theory, geometry, string
                    analysis and data structures.
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/18.jpg"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Judging <span className="text-muted">Checkmate.</span>
                  </h2>
                  <p className="lead">
                    {" "}
                    Do you need an impartial judge for a programming contest?
                    Programming competition is a LAN based program judging
                    implementation in JavaScript. Get a taste of it in this
                    introductory article. Almost all institutes have a computer
                    science department or an IT department, nowadays. Very
                    often, these departments organise programming contests.
                    While participating in these contests, I became aware of the
                    following things:
                    <br />• Eighty per cent of the time, the programs are
                    checked manually
                    <br />• A lot of people participate
                    <br />• People prefer the contests to be online (like
                    codechef.com)
                    <br />• Offline events have their own charm and draw large
                    crowds.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/21.png"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">
                    Makes you a desirable candidate to major companies.
                  </h2>
                  <p className="lead">
                    The major companies are constantly keeping track of these
                    type of events and the participants to find talented
                    employees.
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/12.jpg"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 ">
                  <h2 className="featurette-heading">
                    Makes you faster and more focused{" "}
                  </h2>
                  <p className="lead">
                    Training and taking part in programming contests make you
                    more a more disciplined, faster and focused coder. In the
                    competition, you must solve problems in stressful situations
                    and do it up against a deadline or you will lose. Taking
                    part in competitive programming teaches you how to be more
                    focused on the task and not only complete it quickly, but
                    accurately. These skills are highly beneficial for any job,
                    not just in coding..
                  </p>
                </div>
                <div className="col-md-5 ">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/4.jpg"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">
                    Teaches you how to work in teams.
                  </h2>
                  <p className="lead">
                    This is a very important skill, as most jobs will require
                    you at some point to work in a team. Competitive programming
                    helps you learn how to effectively work together, as you
                    must work with others on your team to complete the same
                    task. You learn how to assess your team members’ strength
                    and weaknesses and effectively divide responsibilities
                    between each other.
                  </p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/5.jpg"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              <hr className="featurette-divider" />
              <div className="row featurette">
                <div className="col-md-7">
                  <h2 className="featurette-heading">
                    Training and participation helps you prepare for a career in
                    coding.
                  </h2>
                  <p className="lead">
                    It is not out of the ordinary to receive job offers from
                    companies immediately after participating in a coding
                    competition . Participating in a coding competition is
                    something you should absolutely highlight on your resume. As
                    previously stated, having experience in competitive
                    programming shows employers you can work in a team, solve
                    complicated problems, work in stressful situations, manage
                    time and deadlines and minimize errors. It also shows you
                    are a disciplined, focused and fast, which are all
                    indispensable skills.
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                    className="featurette-image img-fluid mx-auto"
                    src="images/img/19.jpg"
                    alt="Generic placeholder"
                  />
                </div>
              </div>
              {/* /END THE FEATURETTES */}
            </div>
            {/* /.container */}
            <hr className="featurette-divider" />
            {/* FOOTER */}
            <footer className="container">
              {/* <p className="float-right"><Link to="/" >Back to top</Link></p> */}
              <p>
                © Code Fusion Company, Inc. · <Link to="">Privacy</Link> ·{" "}
                <Link to="/">Terms</Link>
              </p>
            </footer>
          </main>
          {/* Bootstrap core JavaScript
    ================================================== */}
          {/* Placed at the end of the document so the pages load faster */}
          {/* Just to make our placeholder images work. Don't actually copy the next line! */}
        </div>
      </div>
    );
  }
}

export default Home;
