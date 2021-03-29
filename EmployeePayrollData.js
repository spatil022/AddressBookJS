// UC11 Create Employee Payroll Class

class EmployeePayrollData {
    // property
    //id;
    salary;
    gender;
    startDate;
  
    constructor(...params) {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
    }
  
    // getter and setter method
    get name() {
      return this._name;
    }
  
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
      if (nameRegex.test(name)) {
        this._name = name;
      } else throw "Name is Incorrect!";
    }
  
    // method
    toString() {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const empDate =
        this.startDate == undefined
          ? "undefined"
          : this.startDate.toLocaleDateString("en-US", options);
      return (
        "id=" +
        this.id +
        ", name=" +
        this.name +
        ", salary=" +
        this.salary +
        ", gender=" +
        this.gender +
        ", startdate=" +
        this.empDate
      );
    }
  }
  
  let employeePayrollData = new EmployeePayrollData(1, "Mark", 20000);
  console.log(employeePayrollData.toString());
  employeePayrollData.id = 0;
  employeePayrollData.name = "Jeff";
  console.log(employeePayrollData.toString());
  
  try {
    //employeePayrollData.name = '';
    employeePayrollData = new EmployeePayrollData(
      1,
      "mark",
      20000,
      "M",
      new Date()
    );
    console.log(employeePayrollData.toString());
  } catch (e) {
    console.error(e);
  }
  console.log(employeePayrollData.toString());