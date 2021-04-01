import React from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";


class Employee extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=500&nat=us")
      .then((response) => {

        // this.state.employeeRecords.map(employeeRecord => (
          

        //   id={employeeRecord.id}
        //   key={employeeRecord.id}
        //   firstName={employeeRecord.firstName}
        //   lastName={employeeRecord.lastName}
        //   email={employeeRecord.email}
        //   image={employeeRecord.picture.medium}
        //   phone={employeeRecord.cell}
        //   dob={employeeRecord.dob.date}

        

        let empdata = response.data.results;
        let employeeRecordstemp = [];
        console.log(empdata);
        for (let i = 0; i < empdata.length; i++) {
          let record = {
            name: empdata[i].name.first + " " + empdata[i].name.last,
            email: empdata[i].email,
            image: empdata[i].picture.thumbnail,
            phone: empdata[i].cell,
            dob: empdata[i].dob.date,
          };
          employeeRecordstemp.push(record);
        }
        console.log(employeeRecordstemp);
        this.setState({ employeeRecords: employeeRecordstemp });
      });
  };

  render() {
    return (
      <div>
        
        <EmployeeData employees={this.state.employeeRecords} />
      </div>
    );
  }
}

export default Employee;