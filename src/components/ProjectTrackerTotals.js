import React, { Component } from "react";

class ProjectTrackerTotals extends Component {
  render() {
    return <div>
      <div className='p-row'><h1 className='p-main-header'>Active Projects</h1></div>
      <div className='p-row'>
        <div className="col c-one"><h className="c-header">Project Name</h></div>
        <div className="col c-two"><h className="c-header">Stage Completion</h></div>
        <div className="col c-three"><h className="c-header">Total Completion</h></div>

      </div>
      <div className="p-row">
        <div className="col c-one"><div className="rounded-box"><div className="inner-box"><h className="c-header">Ex Dashboard</h></div></div></div>
        <div className="col c-two">
          <div className="inner-col">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">R/D</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Dev</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">100%</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">80%</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Design</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Q/A</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">100%</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">30%</h></div></div>
          </div>
        </div>
        <div className="col c-three">
          <div className="large inner-col">
            <div className="rounded-box large"><div className="inner-box"><h className="c-header">70%</h></div></div>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className="p-row">
        <div className="col c-one"><div className="rounded-box"><div className="inner-box"><h className="c-header">OP Dashboard</h></div></div></div>
        <div className="col c-two">
          <div className="inner-col">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">R/D</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Dev</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">100%</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">80%</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Design</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Q/A</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">100%</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">30%</h></div></div>
          </div>
        </div>
        <div className="col c-three">
          <div className="large inner-col">
            <div className="rounded-box large"><div className="inner-box"><h className="c-header">70%</h></div></div>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className="p-row">
        <div className="col c-one"><div className="rounded-box"><div className="inner-box"><h className="c-header">C Connect</h></div></div></div>
        <div className="col c-two">
          <div className="inner-col">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">R/D</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Dev</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">100%</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">80%</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Design</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">Q/A</h></div></div>
          </div>
          <div className="inner-col large ">
            <div className="rounded-box"><div className="inner-box"><h className="c-header">100%</h></div></div>
            <div className="rounded-box"><div className="inner-box"><h className="c-header">30%</h></div></div>
          </div>
        </div>
        <div className="col c-three">
          <div className="large inner-col">
            <div className="rounded-box large"><div className="inner-box"><h className="c-header">70%</h></div></div>
          </div>
        </div>
      </div>
      <style jsx>
        {
          `
          .large {
            width: 100%;
            height: 100%;
          }
          .divider {
            margin: 0.5rem 0;
            width: 100%;
            border-bottom: 2px solid black
          }
          .rounded-box {
            display: flex;
            padding: .25rem;
            width: 100%;
          }
          .inner-box {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid darkgray;
            width: 100%;
            height: 100%;
            border-radius: 0.25rem;
          }
          .inner-col: {
            display: flex;
            flex-direction: column;
            flex-wrap: no-wrap;
          }
          .col {
            display: flex;
            flex-direction: row;
            flex-wrap: no-wrap;
            align-items: space-evenly;
            justify-content: space-evenly;
          }
          .c-one {
            width: 40%;
            height: auto;

          }
          .c-two {
            width: 50%;
            height: auto;

          }
          .c-three {
            width: 10%;
            height: auto;

          }
          .p-row {
            display: flex;
            width: 100%;
          }
          .c-header {
            width: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 1.2rem;
            padding: 1rem;
          }
          .p-main-header {
            width: 100%;
            text-align: center;
            font-weight: bold;
            font-size: 2rem;            
          }
          `
        }
      </style>
    </div>;
  }
}

export default ProjectTrackerTotals;
