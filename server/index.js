const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql')
const app = express();

app.use(cors());

// parse application/json
app.use(bodyParser.json());
  
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'vmart',
  connectionLimit : 100,
  wait_timeout : 28800,
  connect_timeout :10,
  port: '3307'
});
 
app.listen(3001, () => { 
  console.log("Server running successfully on 3001");
});

app.get("/", (req,res)=>{
    res.send("Hello");
})

//connect to database
conn.connect((err) =>{
  if(err) console.log(err);
  console.log('Database Connected...');
});

//add new user
app.post('/register/create',(req, res) => {

  const username = req.body.username;
  const userpassword = req.body.password;
  const useremail = req.body.email;
  const hashpassword = req.body.hash;

  console.log(username,userpassword,useremail,hashpassword);
  
  conn.query("INSERT INTO user (name,password,email,hash) values (?,?,?,?)", [username,userpassword,useremail,hashpassword],
    (err,result) => {
      if(err){
        res.status(409).send("Email Already Exist");
      }
      else{
        res.send("Registered Successfully");
      }
    })
});



//user login

app.post('/login/log',(req, res) => {

  const loginemail = req.body.loginemail
  const loginpassword = req.body.loginpassword;

  console.log(loginemail,loginpassword);
  
  conn.query(
    "SELECT count(*), name, email, password FROM user WHERE email LIKE ?",
    [loginemail],
    (err,result) =>{

      const count = result[0]['count(*)'];
      const userpassword = result[0].password;
      const username = result[0].name;
      const useremail = result[0].email;

      if(count == 0){
        res.status(409).send("Email Does Not Exist");
      }
      else if(userpassword != loginpassword){
        res.status(409).send("Invalid Password"); 
      }
      else{
        res.send({token:"token",username:username,useremail:useremail});
      }
    }
  )
});


app.get("/users", (req, res) => {
  conn.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
