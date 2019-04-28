DROP TABLE IF EXISTS user_exercises;

CREATE TABLE user_exercises (
  id SERIAL PRIMARY KEY,
  username text NOT NULL, 
  activity text NOT NULL,  
  setname text NOT NULL,
  setnum integer NOT NULL,
  set11time interval NOT NULL 
  -- set12time interval, 
  -- set13time interval, 
  -- set14time interval, 
  -- set15time interval,
)

-- create TABLE set_data (
--   id SERIAL PRIMARY KEY, 

-- )