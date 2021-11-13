import * as mongodb from 'mongodb';
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const Db = process.env.ATLAS_URI;
if (Db === undefined) { throw new Error("My ATLAS_URI is undefined");}

const client = new mongodb.MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

export function connectToServer(callback) {
    client.connect(function (err, db) {
        // Verify we got a good "db" object
        if (db) {
            _db = db.db("myFirstDatabase");
            console.log("Successfully connected to MongoDB.");
        }
        return callback(err);
    });
};

export function getDb() {
    return _db;
};