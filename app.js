const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const PORT = 8000;
const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));


app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./src/models");
db.sequelize.sync();


const Employee = db.subham_111915128_details;
const Salary = db.sahil_111915108_salary;
var err = '';
const check = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    err = 'Connection has been established successfully.';
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    err = 'Connection has been established successfully.';
  }
}

app.set('view engine', 'ejs');


app.get('/', (req, res) => {

  res.render('home');
})
app.get("/login", (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const first_name = username.toLowerCase();
  console.log(username, password);
  const existingUser = await Employee.findOne({ where: { first_name } });
  if (!existingUser) {
    return res.json({ message: 'Invalid Credentials' });
  }
  const passwordMatch = (existingUser.password == password);
  if (!passwordMatch) {
    return res.json({ message: 'Invalid Credentials' })
  }
  res.redirect('/');
})

app.get("/signup", (req, res) => {
  res.render('signup');
});

app.post('/signup', async (req, res) => {
  const { firstname, lastname, number, date, password, job, salary, bonus } = req.body;
  console.log(firstname, lastname, number, date, password);
  try {
    const newEmployee = {
      first_name: firstname,
      last_lame: lastname,
      date_of_birth: date,
      contact_number: number,
      password: password
    }
    const createdEmployee = await Employee.create(newEmployee);
    const employee_id_number = createdEmployee.employee_id_number;
    const SalaryDetails = {
      employee_id_number,
      job_role: job,
      monthly_salary: salary,
      yearly_bonus: bonus
    }
    await Salary.create(SalaryDetails);
    res.render('home')
  } catch (error) {
    res.json({ message: 'error to create employee' });
  }
})

app.get('/report/:id', async (req, res) => {

  const Report = await Employee.findOne({

    where: { employee_id_number: req.params.id },
    attributes: {
      exclude: ['createdAt', 'updatedAt',]
    },
    include: {
      model: Salary,
      attributes: {
        include: ['job_role']
      }
    }
  });
  // const Salary = await Salary.findAll();
  res.render('report', { report: Report });
})
app.post('/report', (req, res) => {

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




