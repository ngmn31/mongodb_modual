const { MongoClient } = require("mongodb");

const uri = "*****";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// データを登録
const query = [
    { name:"yamada", mail:"yamada@example.com", tel:"0120-000-0000"},
    { name:"yoshida", mail:"yoshida@example.com", tel:"0120-111-1111"},
    { name:"miura", mail:"miura@example.com", tel:"0120-222-2222"},
    { name:"himura", mail:"himura@example.com", tel:"0120-333-3333"},
    { name:"yashimura", mail:"yashimura@example.com", tel:"0120-444-4444"},
    { name:"kitamura", mail:"kitamura@example.com", tel:"0120-555-5555"},
    { name:"saito", mail:"saito@example.com", tel:"0120-666-6666"},
    { name:"aizawa", mail:"aizawa@example.com", tel:"0120-777-7777"},
    { name:"mine", mail:"mine@example.com", tel:"0120-888-8888"},
];
const note = await notes.insertMany(query);
console.log(note);
// 最後にクロースする
await client.close();
}
run()