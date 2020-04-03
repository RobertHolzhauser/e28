// The Vue instance
let app = new Vue({
    el: '#app',
    data: {
        playState: 'getReady', // /* possible values getReady or Playing */
        round: 0,
        playerName: '',
        game: {
            playerScores: [],
            houseScores: [],
            winner: '',
            playerTotal: 0,
            houseTotal: 0
        },
        games: [],
        playerTotal: 0,
        houseTotal: 0
    },
    methods: {
        getRandomNumber: function () {
            return Math.floor((Math.random() * 21) + 1);
        },

        // play until someone goes over 21
        getWinner: function (game) {
            // console.log("getWinner() 001 playerTotal = " + this.game.playerTotal + " houseTotal = " + this.game.houseTotal);
            if (game.playerTotal > 21 && game.houseTotal > 21) {
                game.winner = 'Tie';
            } else if (game.houseTotal > 21) {
                game.winner = this.playerName;
                this.playerTotal++;
            } else if (game.playerTotal > 21) {
                game.winner = 'House';
                this.houseTotal++;
            } else {
                game.winner = 'Game in Progress';
            }
            return game.winner;
        },

        play: function () {
            console.log("play() - 001");
            this.round++;
            var myGame = new Object();
            myGame.playerScores = [];
            myGame.houseScores = [];
            myGame.winner = '';
            myGame.playerTotal = 0;
            myGame.houseTotal = 0;

            this.playState = 'Playing';
            while (myGame.playerTotal <= 21 && myGame.houseTotal <= 21) //this.game.playerTotal <= 21 && this.game.houseTotal <= 21) 
            {
                var playerRand = this.getRandomNumber();
                var houseRand = this.getRandomNumber();
                console.log("play() --- playerand = " + playerRand + " houseRand = " + houseRand + "  -- playerTotal  -- " + myGame.playerTotal + " -- houseTotal = " + myGame.houseTotal);
                myGame.playerTotal = myGame.playerTotal + playerRand;
                myGame.houseTotal = myGame.houseTotal + houseRand;
                myGame.playerScores.push(playerRand);
                myGame.houseScores.push(houseRand);

            }

            var theWinner = this.getWinner(myGame);
            console.log("play() 100 - theWinner = " + theWinner);
            myGame.winner = theWinner;
            this.games.push(myGame);
            return theWinner;
        },


        playAgain: function () {
            console.log("playAgain");
            this.play();
        }
    },
    computed: {
        announceWinner() {
            var tmpGames = this.games;
            var tmpLen = tmpGames.length;
            if (tmpLen == 0) {
                return '';
            } else {
                return tmpGames[tmpLen - 1].winner;
            }
        },

        // return current array of player scores
        playerScoresCurr() {

            var tmpGames = this.games;
            var myLen = tmpGames.length;
            if (myLen > 0) {
                return tmpGames[myLen - 1].playerScores;
            } else {
                return [];
            }
        },

        // return current array of house scores
        houseScoresCurr() {
            var tmpGames = this.games;
            var myLen = tmpGames.length;
            if (myLen > 0) {
                return tmpGames[myLen - 1].houseScores;
            } else {
                return [];
            }
        },

        getPlayerTotal() {
            var tmpGames = this.games;
            var myLen = tmpGames.length;
            if (myLen > 0) {
                return tmpGames[myLen - 1].playerTotal;
            } else {
                return '';
            }
        },

        getHouseTotal() {
            var tmpGames = this.games;
            var myLen = tmpGames.length;
            if (myLen > 0) {
                return tmpGames[myLen - 1].houseTotal;
            } else {
                return '';
            }
        }

    }
})



/* https: //forum.vuejs.org/t/generate-random-number-v-for/12391/5 */