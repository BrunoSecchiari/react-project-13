import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://brunosecchiari95:vwjpnz95@cluster0.vfurf5b.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    await meetupsCollection.insertOne(data);

    client.close();
    res.status(201).json({ message: 'Successfull' });
  }
};

export default handler;
