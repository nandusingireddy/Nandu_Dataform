// // Import the Google Cloud client library
// const { BigQuery } = require('@google-cloud/bigquery');

// // Create a new BigQuery client
// const bigquery = new BigQuery();

// async function getTableNames() {
//     const tableNames = [];

//     const query = `
//         SELECT table_name
//         FROM secure-potion-409606.NanduSingireddy.INFORMATION_SCHEMA.TABLES
//         WHERE table_schema = 'SQLServer'
//     `;

//     // Use await to asynchronously execute the query
//     const [rows] = await bigquery.query(query);

//     // Extract table names from query result
//     rows.forEach(row => {
//         tableNames.push(row.table_name);
//     });

//     return tableNames;
// }

// // Call the async function within an async context
// async function main() {
//     try {
//         const tableNames = await getTableNames();
//         console.log(tableNames); // Example usage
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Call the main function to start the execution
// main();
