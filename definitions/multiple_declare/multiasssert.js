assert(
    "assertion1"
).query(ctx =>
    "SELECT * FROM  ${ref('SQLServer')} WHERE age>50"
).dependencies([
    "SQLServer"
]).tags(['airflow']);
