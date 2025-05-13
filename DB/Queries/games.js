const pool = require('./pool')



pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Connection failed:', err);
  } else {
    console.log('Connected! Time is:', res.rows[0]);
  }
  pool.end();
});