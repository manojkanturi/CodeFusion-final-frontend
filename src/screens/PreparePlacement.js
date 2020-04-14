import React from 'react';
import Navbar from './NavBar';
import { Link } from 'react-router-dom';

class PreparePlacement extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <link rel="stylesheet" href="css/prepareplacement.css" />
        <Navbar /> <br /> <br /> <br />
        <div className="container">
          <div className="headeingtitle">
            <h1 className="placementtitle text-center">Placement <i className="fas fa-handshake" /></h1>
          </div>
          <h1 className="text-center">Previous Year Placement Questions</h1>
          <div className="placementquestdiv col">
            <h1 className="questiontitle">TCS Placement Question</h1>
            <p>
              Q.:- Write a code to check whether no is prime or not. Condition use function check() to find whether entered no is positive or negative ,if negative then enter the no, And if yes pas no as a parameter to prime() and check whether no is prime or not?
          </p>
            <Link to="/editor/NA"> <button className="btn btn-info">Try It Now</button></Link>
          </div>
          <div className="placementquestdiv col">
            <h1 className="questiontitle">TCS Placement Question</h1>
            <p>
              Q.:- Find the 15th term of the series? <br />
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0,0,7,6,14,12,21,18, 28
          </p>
            <Link to="/editor/NA"> <button className="btn btn-info">Try It Now</button></Link>
          </div>
          <div className="placementquestdiv col">
            <h1 className="questiontitle">WIPRO Placement Question</h1>
            <p>
              Q.:- C Program to check if two given matrices are identical ?
          </p>
            <Link to="/editor/NA"> <button className="btn btn-info">Try It Now</button></Link>
          </div>
          <div className="placementquestdiv col">
            <h1 className="questiontitle">WIPRO Placement Question</h1>
            <p>
              Q.:- Print a given matrix in spiral form ?
          </p>
            <Link to="/editor/NA"> <button className="btn btn-info">Try It Now</button></Link>
          </div>
          <div className="placementquestdiv col">
            <h1 className="questiontitle">INFOSYS Placement Question</h1>
            <p>
              Q.:- Write a c program to convert decimal number to binary number ?
          </p>
            <Link to="/editor/NA"> <button className="btn btn-info">Try It Now</button></Link>
          </div>
          <div className="placementquestdiv col">
            <h1 className="questiontitle">INFOSYS Placement Question</h1>
            <p>
              Q.:- Write a c program to find out sum of diagonal element of a matrix ?
          </p>
            <Link to="/editor/NA"> <button className="btn btn-info">Try It Now</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default PreparePlacement;