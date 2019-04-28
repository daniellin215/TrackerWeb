const { getUserDataHelper, addUserDataHelper } = require('../database/dbHelper');


const getUserData = async (req, res) => {
  try {
    const  { rows }  = await getUserDataHelper();
    res.send(rows);
  } catch (err) {
    console.error(err);
  }
}

const addUserData = async (req, res) => {
  try {
    console.log('hi');
    console.log(req.body);
    let username = req.body.username;
    let activity = req.body.activity;
    let setname = req.body.setname;
    let setnum = req.body.setnum;
    let set11time = req.body.set11time;

    const userData = await addUserDataHelper(username, activity, setname, setnum, set11time);
    res.send(userData);
  } catch {
    console.error(err);
  }
}

module.exports = { getUserData, addUserData };