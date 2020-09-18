import React from 'react';
import EmployeeEntry from "./components/EmployeeEntry";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Employees from "./seeds.json";
import './App.css';



class App extends React.Component {
  // Setting this.state.Employees to the Employees json array
  state = {
    Employees,
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <main className="container">
          <div className="row">
            <div className="col-2">
              Image
            </div>
            <div className="col-3">
              Name
            </div>
            <div className="col-2">
              Phone
            </div>
            <div className="col-3">
              Email
            </div>
            <div className="col-2">
              DOB
            </div>
          </div>

          {this.state.Employees.results.map((employee) => (
            <EmployeeEntry
              key={employee.id.value}
              image={employee.picture.thumbnail}
              name={employee.name.first + " " + employee.name.last}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob.date}
            />
          ))}
        </main>
      </Wrapper>
    )
  }
};

export default App;