// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// For pool initialization:
pool.query("SELECT field FROM atable", function(err, rows, fields) {
  // Connection is automatically released when query resolves
})

// Alternatively, there is also the possibility of manually acquiring a connection 
// from the pool and returning it later:

// For pool initialization
pool.getConnection(function(err, conn) {
  // Do something with the connection
  conn.query(/* ... */);
  // Don't forget to release the connection when finished!
  pool.releaseConnection(conn);
})