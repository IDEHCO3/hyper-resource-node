import {createConnection, Connection} from "typeorm";

async function connectionDb() {
    const connection = await createConnection({
        type: process.env.DATABASETYPE,
        host: process.env.DATABASEHOST,
        port: process.env.DATABASEPORT,
        username: process.env.DATABASEUSERNAME,
        password: process.env.DATABASEPASSWORD,
        database: process.env.DATABASE,
        schema: process.env.DATABASESCHEMA
    })
    return connection
}
module.exports={connectionDb}
