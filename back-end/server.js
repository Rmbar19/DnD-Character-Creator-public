import express from 'express';
import pg from 'pg';
import connectionString from './secrets.js';
import cors from 'cors'
import updateTables from './fillTables.js'
let app = express();
let PORT = 9999;
app.use(express.json())
app.use(cors())

let client = new pg.Client({
    connectionString: connectionString.connectionString
});

// updateTables();

client.connect();

//GET
app.get('/:table', (req, res) => {
    let table = req.params.table.replace('-', '_');
    client.query(`SELECT * FROM ${table}`)
    .then(results => {
        //console.log('results', result)
        let tableRow = [...results.rows]
        decodeTable(tableRow)
        console.log('data requested')
            res.status(200).send(tableRow)
        })
        .catch(err => {
            console.log('GET error', err)
            res.send(err)
        })
})

//POST
app.post('/:table', (req, res) => {
    let table = req.params.table.replace('-', '_');
    let newItem = req.body;
    let columns = Object.keys(newItem);
    let queryString = `INSERT INTO ${table} (`;
    let temp = `) VALUES (`

    for (let i = 0; i < columns.length; i++) {
        queryString += i === columns.length - 1 ? `${columns[i]}` : `${columns[i]}, `
        temp+= i === columns.length - 1 ? `'${newItem[columns[i]]}'` : `'${newItem[columns[i]]}', ` 
    }
    queryString += temp + ');'

    client.query(queryString)
    .then(results => {
        res.status(201)
        res.send(results)
    })
    .catch(error => {
        res.status(500)
        res.send(error)
    })
})

//DELETE
app.delete('/:table/:index', (req,res)=> {
    let index = req.params.index
    let table = req.params.table.replace('-', '_');
    client.query(`DELETE FROM ${table} WHERE index = $1`,[index])
    .then(results => {
        res.status(201).send(`${table} deleted`)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

function decodeTable(answer) {
    let keys = Object.keys(answer[0])

    for (let i = 0; i < answer.length; i++) {

        for (let j = 0; j < keys.length; j++) {
            try {
                answer[i][keys[j]] = JSON.parse(answer[i][keys[j]])
            } catch {
                console.log('skipped')
            }

        }
    }
    return answer
}