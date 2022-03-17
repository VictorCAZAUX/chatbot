// Add support for environmental variables
require('dotenv/config');
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = 'mongodb+srv://victor:T7zXLcpmf6p73vcO@Cluster0.miqnt.mongodb.net/clear-fashion?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'Cluster0';

const XRegExp = require('xregexp');



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






function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}


controller.hears(['Hello','Hi','Hey'],['ambient', 'direct_mention', 'mention'], function(bot, message) {
  
  
  
  

  bot.startConversation(message, function(err, convo) {

    convo.say('Hi, im bot Artus and I will help you. I have a large database of ethical clothes that might interest you. 👗');
    convo.addQuestion('Would you like to buy clothes ? To create an outfit based on your budget ? To see some products that may fit you? 💁‍♀️',function(response,convo) {
    
     
     
      convo.next();
      if (XRegExp.test(response.text, XRegExp("\\bbuy\\b", "i")))
      {
        convo.say("Alright, let's see what we have in stock. 👩‍💻")
        convo.addQuestion('What item would you like to buy ? Pants, shirt, sweats ? 🕵️',function(response2,convo) {
          convo.next();
          if (XRegExp.test(response2.text, XRegExp("\\b(pants|trousers|boxers)\\b", "i")))
          {
            
              bot.reply(message,"What about this pretty piece :");
              
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Pants"}}).toArray();
              const pants =  produits[0].name;
              const pants2 =  produits[0].link;
              bot.reply(message,pants);
              bot.reply(message,pants2);
              }
  
              GetProducts();
              sleep(500);
              convo.addQuestion("Do you like it ?",function(response7,convo) {
                convo.next();
                if (XRegExp.test(response7.text, XRegExp("\\b(nah|no|nein)\\b", "i")))
              {
              bot.reply(message,"What about this pretty piece :");
              sleep(200);
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Pants"}}).toArray();
              const pants =  produits[1].name;
              const pants2 =  produits[1].link;
              bot.reply(message,pants);
              bot.reply(message,pants2);
              }
  
              GetProducts();
  
              convo.addQuestion("Do you like it ?",function(response8,convo) {
                convo.next();
                if (XRegExp.test(response8.text, XRegExp("\\b(yes|yeah|yep)\\b", "i")))
                {
                  convo.say("Yes, I think it looks great on you! 🥰")
                }


               });
            }

               });
            
            
              
            
            
            
          }
          if(response2.text == "shirt")
          {
            
            bot.reply(message,"What about this pretty piece :");
              
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"T-shirt"}}).toArray();
              const shirt =  produits[0].name;
              const shirt2 =  produits[0].link;
              bot.reply(message,shirt);
              bot.reply(message,shirt2);
              }
  
              GetProducts();
              sleep(500);
              convo.addQuestion("Do you like it ?",function(response7,convo) {
                convo.next();
                if(response7.text == "no")
              {
              bot.reply(message,"What about this pretty piece :");
              sleep(200);
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"T-shirt"}}).toArray();
              const shirt =  produits[5].name;
              const shirt2 =  produits[5].link;
              bot.reply(message,shirt);
              bot.reply(message,shirt2);
              }
  
              GetProducts();
  
              convo.addQuestion("Do you like it ?",function(response8,convo) {
                convo.next();
                if(response8.text == "yes")
                {
                  convo.say("Yes, I think it looks great on you! 🥰")
                }


               });
            }

               });
            
          }
          if(response2.text == "sweats")
          {
            
            bot.reply(message,"What about this pretty piece :");
              
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Sweatshirt"}}).toArray();
              const shirt =  produits[0].name;
              const shirt2 =  produits[0].link;
              bot.reply(message,shirt);
              bot.reply(message,shirt2);
              }
  
              GetProducts();
              sleep(500);
              convo.addQuestion("Do you like it ?",function(response7,convo) {
                convo.next();
                if(response7.text == "no")
              {
              bot.reply(message,"What about this pretty piece :");
              sleep(200);
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Sweatshirt"}}).toArray();
              const shirt =  produits[5].name;
              const shirt2 =  produits[5].link;
              bot.reply(message,shirt);
              bot.reply(message,shirt2);
              }
  
              GetProducts();
  
              convo.addQuestion("Do you like it ?",function(response8,convo) {
                convo.next();
                if(response8.text == "yes")
                {
                  convo.say("Yes, I think it looks great on you! 🥰")
                }


               });
            }

               });
            
          }

        });
      }
      if(response.text == "outfit")
      {
        convo.addQuestion("What is your budget ?",function(response3,convo) {
            convo.next();
            budget = Int(response3.text)




        });
      }
      if(response.text == "see")
      {
          type = "";
          brand1 = "";
          color = "";
          convo.addQuestion("What type of item would you like to see ?",function(response4,convo) {
              convo.next();
              type = response4.text;
            });
          convo.addQuestion("What is your favorite brand ?",function(response5,convo) {
            convo.next()
            brand1 = response5.text;
          });
          convo.addQuestion("What is your favorite color ?",function(response6,convo) {
            convo.next()
            color = response6.text;
          });
          
          const GetProducts = async() =>
            {
            const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
            const db =  client.db(MONGODB_DB_NAME);
            const collection = db.collection('products');
            const produits = await collection.find({name : type,brand : brand1}).toArray();
            const item1 =  produits[0].name;
            const item2 =  produits[0].name;
            const item3 =  produits[0].name;
            bot.reply(message,item1);
            bot.reply(message,item2);
            bot.reply(message,item3);
            }

            GetProducts();
      }
      

    },{},'default');
    
  });
});



