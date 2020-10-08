import React from 'react';
import EmployeeEntry from "./components/EmployeeEntry";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';
import Search from "./components/Search/search";
import api from "./utils/Api"

class App extends React.Component {

  state = {
    employees: [],
    filteredEmployees: [],
    searchTerm: ''
  }

  componentDidMount() {
    api.getUsers()
      .then(({ data }) => {
        this.setState({ employees: data.results, filteredEmployees: data.results })
      })
  }

  editSearchTerm = (e) => {
    console.log(e.target.value)
    //console.log(this.state.searchTerm)
    this.setState({ searchTerm: e.target.value.toLowerCase() })
    this.setState({
      filteredEmployees: this.state.employees.filter(employee => {
        if (employee.name.first.toLowerCase().includes(e.target.value.toLowerCase()))
          return true;
        else if (employee.name.last.toLowerCase().includes(e.target.value.toLowerCase()))
          return true;
        else
          return false;
      })
    })
  }

  dynamicSearch = (
    //Employees
  ) => {
    return
    //this.state.Employees.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  };


  // render(){
  //   return (
  //     <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
  /* <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for an Employee!'/>
  <br></br> */
  /* <h3>These are the important Employees:</h3> */
  /* <EmployeesContainer Employees = {this.dynamicSearch()}/> */
  //     </div>
  //   );
  // }


  render() {
    return (
      <Wrapper>
        <div className="jumbotron">
          <Title>Employee Directory</Title>
          <div className="subtitle">Click on the carrots to sort names or use the search box to narrow your results</div>
        </div>
        <Search
          searchTerm={this.state.searchTerm} editSearchTerm={this.editSearchTerm} dynamicSearch={this.dynamicSearch()}
        ></Search>

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

          {this.state.filteredEmployees.map((employee) => (
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