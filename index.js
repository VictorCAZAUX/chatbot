// Add support for environmental variables
require('dotenv/config');
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = 'mongodb+srv://victor:T7zXLcpmf6p73vcO@Cluster0.miqnt.mongodb.net/clear-fashion?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'Cluster0';


// Import botkit package
var Botkit = require('botkit');


// Create a controller for the Slackbot
var controller = Botkit.slackbot({
  debug: false
});

// Use the token to connect the bot to your Slack app
controller.spawn({
  token: process.env.TOKEN
}).startRTM();


var answer = "";
var item = "";
var query = "";
const produits = "";

controller.hears(['Hello','Hi','Hey'],['ambient', 'direct_mention', 'mention'], function(bot, message) {
  
  

  bot.startConversation(message, function(err, convo) {

    const GetProducts = async() =>
            {
            
            const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
            const db =  client.db(MONGODB_DB_NAME);
            const collection = db.collection('products');
            const produits = await collection.find({brand : "montlimart"},{name:1,_id:0,price:0}).toArray();
            console.log(produits[0].name);
            item = (produits[0].name);
            
            
            
            
            }

            GetProducts();
    
    
    convo.say((item).toString());
    console.log(item);
    
    convo.say('Hi, im bot Artus and I will help you. I have a large database of ethical clothes that might interest you.');
    convo.addQuestion('Would you like to buy clothes ? To create an outfit based on your budget ? To see some products that may fit you?',function(response,convo) {
    

     
      convo.next();
      if(response.text=="buy")
      {
        convo.say("HAAA")
        convo.addQuestion('Would you like to buy clothes ? To create an outfit based on your budget ? To see some products that may fit you?',function(response2,convo) {
          convo.next();
          if(response2.text == "pants")
          {
            const GetProducts = async() =>
            {
            const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
            const db =  client.db(MONGODB_DB_NAME);
            const collection = db.collection('products');
            const produits = await collection.find({brand : "montlimart"}).toArray();
            console.log(produits[0]);
            convo.say(String(produits[0]));
            }

            GetProducts();
            
          }

        });
      }
      

    },{},'default');
    
  });
});



