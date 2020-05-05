import React, { Component } from "react";
import Employee from "../db/getEmployeeList.json";
import GetOrder from "../db/getWorkOrderList.json";
import PostOrder from "../db/postWorkOrderList.json";

import "./home.css";

const employeeList = Employee.Employess;
export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  draggable = (e) => {
    e.preventDefault();
    console.log("dragENds");
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };
  dragOver = (e) => {
    e.preventDefault();
  };
  dragStart = (e) => {
    console.log("dragStart");
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };
  dragOverTable = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(employeeList);
    return (
      <div className="container">
        <h1>WorkOrder Assignment Tool</h1>
        <div>
          <table>
            <thead>
              <tr id='head_tr'>
                <th></th>
                <th>21-Apr-2020</th>
                <th>22-Apr-2020</th>
                <th>23-Apr-2020</th>
                <th>24-Apr-2020</th>
                <th>25-Apr-2020</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((item,index) => {
                return (
                  <tr
                  key={index}>
                    <td
                    id={`${item.Name}6`}
                    >{item.Name}</td>
                    <td
                      onDrop={this.draggable}
                      onDragOver={this.dragOverTable}
                      className=""
                      id={`${item.Name}1`}
                    ></td>
                    <td
                      onDrop={this.draggable}
                      onDragOver={this.dragOver}
                      className=""
                      id={`${item.Name}2`}
                    ></td>
                    <td
                      onDrop={this.draggable}
                      onDragOver={this.dragOver}
                      className=""
                      id={`${item.Name}3`}
                    ></td>
                    <td
                      onDrop={this.draggable}
                      onDragOver={this.dragOver}
                      className=""
                      id={`${item.Name}4`}
                    ></td>
                    <td
                      onDrop={this.draggable}
                      onDragOver={this.dragOver}
                      className="table-cell"
                      id={`${item.Name}5`}
                    ></td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div>
            {console.log(GetOrder.job)}
            {GetOrder.job &&
              GetOrder.job.map((item) => {
                return (
                  <div
                    onDrop={this.draggable}
                    id={item.jobname}
                    key={item.jobname}
                    onDragOver={this.dragOver}
                  >
                    <div className="jobCard">
                      {item.workorders.map((work, ind) => {
                        return (
                          <div
                            className="jobInCard"
                            id={`${item.jobname}-${ind}`}
                            key={`${item.jobname}-${ind}`}
                            draggable={true}
                            onDragStart={this.dragStart}
                            onDragOver={this.dragOver}
                          >
                            <div className="work-box">{work.name}</div>
                            <div>{item.jobname}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
