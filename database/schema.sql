DROP TABLE IF EXISTS user_data;

CREATE TABLE user_data (
  id SERIAL PRIMARY KEY,
  username text, 
  activity text, 
  type text, 
  setname text,
  setnum integer,
  set11time interval, 
  set12time interval, 
  set13time interval, 
  set14time interval, 
  set15time interval,
)

-- create TABLE set_data (
--   id SERIAL PRIMARY KEY, 

-- )