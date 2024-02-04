const { MongoClient } = require("mongodb");

const uri = "*****";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');

const note = await notes.deleteMany();

console.log(note);
// 最後にクロースする
await client.close();
}
run()