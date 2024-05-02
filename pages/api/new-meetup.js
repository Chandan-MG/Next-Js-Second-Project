import {MongoClient} from  'mongodb';

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;

        // const {title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb://localhost:27017/meetupsdb');
        const db = client.db;

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close(); //to  close the connection to MongoDB server after we are done with it.

        res.status(201).json({ message: 'Meetup started!'})
    }
}
export default handler;