import React, { Component } from "react";
import ProjectTrackerTotals from "./components/ProjectTrackerTotals";

class BasePage extends Component {
  state = {};
  componentDidMount() { }
  render() {
    return (
      <div>
        <div className="nav-container round-corners padd-1 wide-100 hide-of lg-border">
          NAV HERE
        </div>
        <div className="app-container round-corners padd-1 wide-100 hide-of lg-border">
          <ProjectTrackerTotals />
        </div>
        <div className="footer-container round-corners padd-1 wide-100 hide-of lg-border">
          FOOTER HERE
        </div>
        <style jsx global>{`
          .nav-container {
            height: 12vh;
          }
          .app-container {
            height: 80vh;
          }
          .footer-container {
            height: 6vh;
          }
          .round-corners {
            border-radius: 1.5vh;
          }
          .padd-1 {
            padding: 1vh;
          }
          .wide-100 {
            width: 100%;
          }
          .hide-of {
            overflow: hidden;
          }
          .lg-border {
            border: 1px solid lightgray;
          }
        `}</style>
      </div>
    );
  }
}

export default BasePage;
