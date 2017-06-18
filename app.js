var readlineSync = require('readline-sync');

//Store players name
var userName = readlineSync.question("Welcome to jacob's Ballin Block party 2017!!! You'll need to label this red cup with your name... ");



//player parameters
var Player = function (userName, hp, inv) {
    this.name = userName;
    this.hp = hp || 100;
    this.inv = inv || [];
    this.print = function () {
        console.log("name: " + this.name + " , HP: " + this.hp);
        console.log("Inventory");
        for (var i = 0; i < this.inv; i++) {
            console.log(inv[i])
        }
    }
};

var user = new Player();



//Drunk friend parameters
var Enemy = function (type, hitPoints) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.print = function () {
        console.log(this.type + " just stumbled into you! They've been here for " + this.hitPoints + " minutes!");
    }
};


//Function to generate random numbers
var genNumInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min + 1);
};



//Function to generate random enemies
var genEnemy = function () {
    var enemyTypes = ["The Hugely Intelligent D. Trump", "Drunkard Dan", "Sassy Sarah", "Belligerent Ben"];
    var randomType = enemyTypes[genNumInRange(0, enemyTypes.length - 1)];
    var randomHitPoints = 0;
    if (randomType === "Hugely Intelligent D. Trump") {
        randomHitPoints = genNumInRange(70, 100);
    } else if (randomType === "Drunkard Dan") {
        randomHitPoints = genNumInRange(50, 69);
    } else if (randomType === "Sassy Sarah") {
        randomHitPoints = genNumInRange(20, 49)
    } else {
        randomHitPoints = genNumInRange(20, 49);
    }
    var randomEnemy = new Enemy(randomType, randomHitPoints, randomHitPoints * 3);
    return randomEnemy;
};



//game outcomes
var sober = false;
var drunk = false;

//game HP
var water = false;


console.log("Right on" + " " + userName + "!" + "" + "Enjoy the ballin party. ")



//
var partyBlueprint = function () {
    if (user.inv.length === 3) {
        console.log("Deciding to take it easy huh? Thanks for not getting too drunk! It's always such a pain to deal with those rubes. ");
        
    } else {
        console.log("Hope you're enjoying the party! Feel free to mingle and let loose. Just remember not to get too drunk. You drove bruh! ");
    }
};

console.log("Press" + " " + "'W'" + " " + "to walk");
var enemy;

while (true) {
    var userInput = readlineSync.question("");
    userInput.toLowerCase();
    partyBlueprint();
    if (userInput === "w") {
        var chance = genNumInRange(0, 70);
        if (chance >= 50) {
            enemy = genEnemy();
            enemy.print();
            while (user.hp > 0 && enemy.hitPoints > 0) {
                console.log("Do you drink & talk or flee for some water");
                var input = readlineSync.question("");
                if (input === "drink") /*input.includes("drink") && input.includes("talk")*/ {
                    var damage = genNumInRange(20, 70);
                    enemy.hitPoints -= damage;
                    console.log("you'll need to do better than that! " + enemy.type + " " + "is still standing!");
                } else {
                    user.inv.push(1);
                    partyBlueprint();
                    break;
                }
            }
            if (enemy.hitPoints <= 0) {
                userName.toUpperCase();
                console.log("Looks like " + enemy.type + "isn't doing so well. They're down for the count! Go " + userName + "! ");

            } else {
                console.log("This is a test");
            }
        } else if (input === "print") {
            console.log(user.print);
        }
    }
}
