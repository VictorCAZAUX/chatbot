const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = 'mongodb+srv://victor:T7zXLcpmf6p73vcO@Cluster0.miqnt.mongodb.net/clear-fashion?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'Cluster0';


const GetProducts = async() =>
{
  const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
  const db =  client.db(MONGODB_DB_NAME);
  const collection = db.collection('products');
  const produits = await collection.find().toArray();
  console.log(produits[0]);
}

GetProducts();
