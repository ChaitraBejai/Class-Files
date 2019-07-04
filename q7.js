// function getSalary(gross) {
//     const salary = {};
//     const basic = gross * 30 / 100;
//     salary["basic"] = basic;
//     const hra = gross * 20 / 100;
//     salary["hra"] = hra;
//     const cityCompensatoryAll = gross * 30 / 100;
//     salary["cityCompensatoryAll"] = cityCompensatoryAll;
//     const conveyance = 800;
//     salary["conveyance"] = conveyance;
//     const specialBalance = gross - basic - hra - cityCompensatoryAll - conveyance;
//     salary["specialBalance"] = specialBalance;
//     return salary;
//   }
  
//   console.log(getSalary(100000));

function getSalaryDetails(gross) {
    const salaryDetails = {};
    salaryDetails["basicpay"] = calculatePercentage(gross, 30);
    salaryDetails["hra"] =  calculatePercentage(gross, 20);
    salaryDetails["cityCompensatoryAll"] =  calculatePercentage(gross, 30);
    salaryDetails["conveyance"] = 800;
    salaryDetails["specialBalance"] = gross - salaryDetails["basicpay"] - salaryDetails["hra"] - salaryDetails["cityCompensatoryAll"] - salaryDetails["conveyance"]; 
    return salaryDetails;
  }
  function calculatePercentage(gross, perc){
      return gross * perc / 100
  }
  console.log(getSalaryDetails(100000));