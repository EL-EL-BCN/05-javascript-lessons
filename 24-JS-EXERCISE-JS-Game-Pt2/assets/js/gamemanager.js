let GameManager = {
	// Set game start function performs two actions because we can only have one onclick event in the html.
	setGameStart: function(classType) {
	    this.resetPlayer(classType);
	    this.setPreFight();
  	},

  	// Use a switch to select the player variables defined in the player object.
  	resetPlayer: function(classType) {
    	switch (classType) {
      		case "Warrior":
		        player = new Player(classType, 200, 0, 200, 100, 50);
		        break;
      		case "Rogue":
		        player = new Player(classType, 100, 0, 100, 150, 200);
		        break;
      		case "Mage":
        		player = new Player(classType, 80, 0, 50, 200, 50);
        		break;
      		case "Hunter":
		        player = new Player(classType, 200, 0, 50, 200, 100);
		        break;
		    }

    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="assets/images/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><span><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></span>';
  },
	setPreFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getArena = document.querySelector(".arena");

		getHeader.innerHTML = '<p>Task. find an enemy!</p>';

		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy</a>';

		getArena.style.visibility = "visible";
	},

	setFight: function() {
		let getHeader = document.querySelector(".header");
		let getActions = document.querySelector(".actions");
		let getEnemy = document.querySelector(".enemy");
	
		let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
		let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 100);

		// Choose Random Number between 0 and 1
		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

		// use switch to select enemy based on random number generator
		switch (chooseRandomEnemy) {
			case 0:
				enemy = enemy00;
				break;
			case 1:
				enemy = enemy01;
				break;
		}

		getHeader.innerHTML = '<p>task: Chose your move!</p>';

		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';

		getEnemy.innerHTML = '<img src="assets/images/avatar-enemies/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"><span><h3>' + enemy.enemyType + '</h3> <p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p> <p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></span>';
	}	

} 