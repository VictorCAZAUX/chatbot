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
    

    convo.addQuestion('Would you like to buy clothes ? To see some products that may fit you? 💁‍♀️',function(response,convo) {
    
     
     
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
              const pants3 =  produits[0].photo;
              const pants4 =  produits[0].price;
              bot.reply(message,"The price of this item is : " + pants4 + " 💵");

              bot.reply(message,"The item name is : " + pants + " 👖 " );
              
              
              bot.reply(message,"Here is the item link : " +pants2 + " 🌐");
              bot.reply(message,"Here is the link of the picture  : " + pants3 + " 🛸");

              
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
              const pants =  produits[3].name;
              const pants2 =  produits[3].link;
              const pants3 =  produits[3].photo;
              const pants4 =  produits[0].price;
              bot.reply(message,"The price of this item is : " + pants4 + " 💵");
              bot.reply(message,"The item name is : " + pants + " 👖 " );
              bot.reply(message,"Here is the item link : " +pants2 + " 🌐");
              bot.reply(message,"Here is the link of the picture  : " + pants3 + " 🛸");
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
          if (XRegExp.test(response2.text, XRegExp("\\b(shirt|T-shirt|shirts)\\b", "i")))
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
              const shirt3 =  produits[0].photo;
              const shirt4 =  produits[0].price;
              bot.reply(message,"The price of this item is : " + shirt4 + " 💵");
              bot.reply(message,"The item name is : " + shirt + " 👕 " );
              bot.reply(message,"Here is the item link : " +shirt2 + " 🌐");
              bot.reply(message,"Here is the link of the picture  : " + shirt3 + " 🛸");
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
              const produits = await collection.find({brand : "dedicated","name":{$regex:"T-shirt"}}).toArray();
              const shirt =  produits[3].name;
              const shirt2 =  produits[3].link;
              const shirt3 =  produits[3].photo;
              const shirt4 =  produits[3].price;
              bot.reply(message,"The price of this item is : " + shirt4 + " 💵");
              bot.reply(message,"The item name is : " + shirt + " 👕 " );
              bot.reply(message,"Here is the item link : " +shirt2 + " 🌐");
              bot.reply(message,"Here is the link of the picture  : " + shirt3 + " 🛸");
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
          if (XRegExp.test(response2.text, XRegExp("\\b(Sweatshirt|sweat|sweaters)\\b", "i")))
          {
            
            bot.reply(message,"What about this pretty piece :");
              
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Sweatshirt"}}).toArray();
              const sweat =  produits[0].name;
              const sweat2 =  produits[0].link;
              const sweat3 =  produits[0].photo;
              const sweat4 =  produits[0].price;
              bot.reply(message,"The price of this item is : " + sweat4 + " 💵");
              bot.reply(message,"The item name is : " + sweat + " 👕 " );
              bot.reply(message,"Here is the item link : " +sweat2 + " 🌐");
              bot.reply(message,"Here is the link of the picture  : " + sweat3 + " 🛸");
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
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Sweatshirt"}}).toArray();
              const sweat =  produits[3].name;
              const sweat2 =  produits[3].link;
              const sweat3 =  produits[3].photo;
              const sweat4 =  produits[3].price;
              bot.reply(message,"The price of this item is : " + sweat4 + " 💵");
              bot.reply(message,"The item name is : " + sweat + " 👕 " );
              bot.reply(message,"Here is the item link : " +sweat2 + " 🌐");
              bot.reply(message,"Here is the link of the picture  : " + sweat3 + " 🛸");
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

        });
      }
      
      if (XRegExp.test(response.text, XRegExp("\\bsee\\b", "i")))
      {
          type = "";
          
         
          color = "";
          convo.addQuestion("What type of item would you like to see ?",function(response4,convo) {
              convo.next();
              type = response4.text;
              if (XRegExp.test(response4.text, XRegExp("\\b(shirt|T-shirt|Tshirt|shirts)\\b", "i")))
              {
                type = "T-shirt"
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(sweat|sweater|sweatshirt)\\b", "i")))
              {
                type = "Sweatshirt"
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(pants|trousers|boxer)\\b", "i")))
              {
                type = "Pants"
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(hoodie)\\b", "i")))
              {
                type = "Hoodie"
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(jacket)\\b", "i")))
              {
                type = "Jacket"
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(shorts|short)\\b", "i")))
              {
                type = "Shorts"
              }
            });
          
          convo.addQuestion("What is your favorite color ?",function(response6,convo) {
            convo.next()
            
            if (XRegExp.test(response6.text, XRegExp("\\b(blue|Blue|navy)\\b", "i")))
              {
                color = "Blue"
              }
            if (XRegExp.test(response6.text, XRegExp("\\b(red|Red)\\b", "i")))
              {
                color = "Red"
              }
            if (XRegExp.test(response6.text, XRegExp("\\b(black|Black|charcoal)\\b", "i")))
              {
                color = "Black"
              }
            if (XRegExp.test(response6.text, XRegExp("\\b(Green|green)\\b", "i")))
              {
                color = "Green"
              }
            if (XRegExp.test(response6.text, XRegExp("\\b(Mint)\\b", "i")))
              {
                color = "Mint"
              }
            if (XRegExp.test(response6.text, XRegExp("\\b(Purple|pink)\\b", "i")))
              {
                color = "Purple"
              }

              
              query = type + " " + color;
              console.log(query)
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({$and:[{"name":{$regex:type}},{"name":{$regex:color}}]}).toArray();
              if(produits != null)
              {
                const item =  produits[0].name;
                const item2 =  produits[0].link;
                const item3 =  produits[0].photo;
                bot.reply(message,"The item name is : " + item + " 💅 " );
                bot.reply(message,"Here is the item link : " +item2 + " 🌐");
                bot.reply(message,"Here is the link of the picture  : " + item3 + " 🛸");
              }
              else
              {
                bot.reply(message,"This type of item doesn't exist, sorry!")
              }
              
              }
    
                GetProducts();

                

                
              
            


          });

          
          
      }
      

    },{},'default');

    
    
  });
  
});



