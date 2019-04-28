const pool = require('./index.js');

const getUserDataHelper = async () => {
  try {
    const client = await pool.connect();
    const data = await client.query('SELECT * FROM user_exercises');
    client.release();
    return data; 
  } catch (err) {
    return console.error(err);
  }
}

const addUserDataHelper = async (username, activity, setname, setnum, interval) => {
  try {
    const values = [username, activity, setname, setnum, interval];
    const text = 'INSERT INTO user_exercises(username, activity, setname, setnum, set11time) VALUES($1, $2, $3, $4, $5) RETURNING *'
    const client = await pool.connect();
    const data = await client.query(text, values);
    client.release();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

module.exports = { getUserDataHelper, addUserDataHelper };

// const addSet = async (name, num) => {
//   let response = await 
// }