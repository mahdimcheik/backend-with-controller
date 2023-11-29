import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: 'localhost',
    password: 'ThisIsNotMe1>',
    user: 'mahdi',
    database: 'users_db',
  })
  .promise();

async function getUsers(){
 const [results] = await pool.query("select * from users");
 return results;
}
async function getUser(id){
  const [results] = await pool.query("select * from users where id = ?", [id]);
  return results[0];
 }
 async function addUser({lastname, firstname}){
  const [results] = await pool.query("insert into users (lastname, firstname) values (?, ?)", [lastname, firstname]);
  return results.insertId;
 }
 async function updateUser({id, firstname, lastname}){
  const user = await getUser(id);
  if(!!user)
  {
    const newUser = {firstname : firstname ?? user.firstname, lastname : lastname ?? user.lastname};
    const res = await pool.query("update users  set firstname = ? , lastname = ? where id = ?", [newUser.firstname, newUser.lastname, id]);
    return res[0].affectedRows;
  }
  return 0;

 }
 async function deleteUser(id){
  const [results] = await pool.query("delete from users where id = ? ", [id]);  
  return results.affectedRows;
 }

export {updateUser, addUser,deleteUser,getUser,getUsers}