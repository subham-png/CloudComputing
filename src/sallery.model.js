// Employee_ID_Number, Job_Role, Monthly_Salary, Yearly_Bonus
module.exports = (sequelize, Sequelize) => {
  const Subham_111915128_salary = sequelize.define("sahil_111915108_salary", {
    employee_id_number: {
      type: Sequelize.INTEGER,
      field: 'employee_id_number'
    },
    job_role: {
      type: Sequelize.STRING
    },
    monthly_salary: {
      type: Sequelize.STRING
    },
    yearly_bonus: {
      type: Sequelize.STRING
    },
  });
  return Sahil_111915108_salary;
};