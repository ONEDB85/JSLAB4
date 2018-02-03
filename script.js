(function() {

    var startGame = document.getElementById("hidden");
    var startButton = document.getElementById("startButton");
    var quitButton = document.getElementById("quitButton");

    var attackButton = document.getElementById("attackButton");

    var userHealthBar = document.getElementById("userHealth");
    var computerHealthBar = document.getElementById("computerHealth");
    var winsBar = document.getElementById("userWins");

    var messageEl = document.getElementById("message");
    var messageE2 = document.getElementById("message2");
    var name = document.getElementById("name");
    var quitter = document.getElementById("quitter");
	var samurai = document.getElementById("samurai");

    var userHeals = document.getElementById("userHeals");

    var user = {
        name: "",
        health: 40,
        healsRemaining: 2,
        wins: 0,
        generateAttackDamage: function() {
            return Math.floor(Math.random() * 3) + 1;
        },

        heal: function() {
            this.health += Math.floor(Math.random() * 10) + 1;
        },
    }

    var computer = {

        name: "Grant the Almighty Chicken",
        health: 10,
        generateAttackDamage: function() {

            return Math.floor(Math.random() * 5) + 1;
        }
    };


    startButton.onclick = function() {

        user.name = prompt("What will be your name?");

        startButton.style.display = 'none';
        startGame.classList.remove("main");
        updateName("Name: " + user.name);



    };

    attackButton.onclick = function() {
        if (user.health > 0 && computer.health > 0) {

            user.health -= computer.generateAttackDamage();
            computer.health -= user.generateAttackDamage();


            updateAttackReceived();
            updateAttackGiven();



            updateMessage(user.name + " has " + user.health + " health left. " +
                computer.name + " has " + computer.health + " health left.");
            updateMessage1("");


            if (user.health <= 0) {

                updateMessage(computer.name + " Wins!");
                updateMessage1("GAME OVER!");

            }

            if (computer.health <= 0) {
                computer.health += 10;
                user.wins++;
                addWins();

                if (user.wins >= 5) {

                    updateMessage(user.name + " Wins!");
                    updateMessage1("GAME OVER!");
                }
            }
        }
    };

    healButton.onclick = function() {

        if (user.health > 0 && computer.health > 0) {
            if (user.healsRemaining > 0) {
                user.heal();
                user.healsRemaining--;
                updateHealRepair();
                updateMessage(user.name + " has healed and has " + user.health + " health left.");
                //updateAttackReceived();
                updateMessage1("");
            } else {

                updateMessage(user.name + " has no more heals!");
                updateMessage1("Get your mind right!");
            }
        }
    };

    quitButton.onclick = function() {

        if (user.health > 0 && computer.health > 0) {
            gameOver("GAME OVER YOU QUIT! BE GONE!");
            quitButton.style.display = 'none';
            startGame.classList.add("main");
            samurai.classList.remove("beGone");
        }

    };

    function updateHealRepair() {
        userHealthBar.value = user.health;
        userHeals.value = user.healsRemaining;
    }

    function updateAttackReceived() {
        userHealthBar.value = user.health;
    }

    function updateAttackGiven() {
        computerHealthBar.value = computer.health;
    }

    function addWins() {
        winsBar.value = user.wins;
    }

    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    }

    function updateMessage1(newMessage) {
        messageE2.innerText = newMessage;
    }

    function updateName(newMessage) {
        name.innerText = newMessage;
    }

    function gameOver(newMessage) {
        quitter.innerText = newMessage;
    }

})();