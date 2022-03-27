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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let tabitem = [];
let favcolor = [];



controller.hears(['Hello','Hi','Hey','Help'],['ambient', 'direct_mention', 'mention'], function(bot, message) {
  
  
  
  

  bot.startConversation(message, function(err, convo) {

    convo.say('Hi, im bot Caroline and I will help you. I have a large database of ethical clothes that might interest you. 👗');
    
    
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
              tabitem.push("pants")
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Pants"}}).toArray();
              let nb = produits.length;
              let nb2 = getRandomInt(nb);
              const pants =  produits[nb2].name;
              const pants2 =  produits[nb2].link;
              const pants3 =  produits[nb2].photo;
              const pants4 =  produits[nb2].price;
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
              let nb = produits.length;
              let nb2 = getRandomInt(nb);
              const pants =  produits[nb2].name;
              const pants2 =  produits[nb2].link;
              const pants3 =  produits[nb2].photo;
              const pants4 =  produits[nb2].price;
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
            tabitem.push("shirt")
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"T-shirt"}}).toArray();
              let nb = produits.length;
              let nb2 = getRandomInt(nb);
              const shirt =  produits[nb2].name;
              const shirt2 =  produits[nb2].link;
              const shirt3 =  produits[nb2].photo;
              const shirt4 =  produits[nb2].price;
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
              let nb = produits.length;
              let nb2 = getRandomInt(nb);
              const shirt =  produits[nb2].name;
              const shirt2 =  produits[nb2].link;
              const shirt3 =  produits[nb2].photo;
              const shirt4 =  produits[nb2].price;
              
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
            tabitem.push("sweatshirt")  
  
              const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({brand : "dedicated","name":{$regex:"Sweatshirt"}}).toArray();
              let nb = produits.length;
              let nb2 = getRandomInt(nb);
              const sweat =  produits[nb2].name;
              const sweat2 =  produits[nb2].link;
              const sweat3 =  produits[nb2].photo;
              const sweat4 =  produits[nb2].price;
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
              let nb = produits.length;
              let nb2 = getRandomInt(nb);
              const sweat =  produits[nb2].name;
              const sweat2 =  produits[nb2].link;
              const sweat3 =  produits[nb2].photo;
              const sweat4 =  produits[nb2].price;
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
                convo.next();

               });
            }

               });
            
          }

          convo.next();

        });
      }
      
      if (XRegExp.test(response.text, XRegExp("\\bsee\\b", "i")))
      {
        boolean1 = true;
          type = "";
          
         
          color = "";
          convo.addQuestion("What type of item would you like to see ?",function(response4,convo) {
              convo.next();
              type = response4.text;
              if (XRegExp.test(response4.text, XRegExp("\\b(shirt|T-shirt|Tshirt|shirts)\\b", "i")))
              {
                type = "T-shirt"
                tabitem.push("shirt")  
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(sweat|sweater|sweatshirt)\\b", "i")))
              {
                type = "Sweatshirt"
                tabitem.push("sweatshirt")  
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(pants|trousers|boxer)\\b", "i")))
              {
                type = "Pants"
                tabitem.push("pants")  
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(hoodie)\\b", "i")))
              {
                type = "Hoodie"
                tabitem.push("hoodie")  
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(jacket)\\b", "i")))
              {
                type = "Jacket"
                tabitem.push("jacket")  
              }
              if (XRegExp.test(response4.text, XRegExp("\\b(shorts|short)\\b", "i")))
              {
                type = "Shorts"
                tabitem.push("shorts") 
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

              favcolor.push(color)
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
                let nb = produits.length;
                let nb2 = getRandomInt(nb);
                const item =  produits[nb2].name;
                const item2 =  produits[nb2].link;
                const item3 =  produits[nb2].photo;
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
     
      console.log(tabitem[0])
      console.log(favcolor[0])
      convo.addQuestion("I saved some information about you, do you want to see the item I think is perfect for you ?",function(response11,convo) {
        convo.next();
        if (XRegExp.test(response11.text, XRegExp("\\b(yes|yeah)\\b", "i")))
        {
          const GetProducts = async() =>
              {
              const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
              const db =  client.db(MONGODB_DB_NAME);
              const collection = db.collection('products');
              const produits = await collection.find({$and:[{"name":{$regex:tabitem[0]}},{"name":{$regex:favcolor[0]}}]}).toArray();
              if(produits != null)
              {
                let nb = produits.length;
                let nb2 = getRandomInt(nb);
                const item =  produits[nb2].name;
                const item2 =  produits[nb2].link;
                const item3 =  produits[nb2].photo;
                bot.reply(message,"The item name is : " + item + " 💅 " );
                bot.reply(message,"Here is the item link : " +item2 + " 🌐");
                bot.reply(message,"Here is the link of the picture  : " + item3 + " 🛸");
                bot.reply(message,"I hope you liked my services! See you soon!");
              }
              
              
              }
    
                GetProducts();

        }
      
      
      
      })
    
      

    },{},'default');

    
    
  });
  
});



