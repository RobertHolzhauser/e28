let app = new Vue({
    el: '#app',
    data: {
        playerName: '',
        playState: 'getReady',  /* available states:  getReady, playing  */
        startMessage: 'Game on ',
        challengeLevel: '',  /* easy, medium, or hard */
        easyWords: [
            ['we', 'this means you & me, and maybe us'],
            ['eye', 'light makes it possible for body part to work'],
            ['smile', 'upside down frown'],
            ['ball', 'the best thing to catch']
        ],
        mediumWords: [
            ['apple', 'Sometimes red, sometimes delicious'],
            ['washington', 'Rushmore’s left edge'],
            ['pumpkin', 'Halloween’s favorite fruit'],
            ['football', 'Play with your hands or feet, depending on your location']
        ],
        hardWords: [
            ['linear algebra', 'Sometimes red, sometimes delicious'],
            ['supercalifragilisticexpialidoshous', "Dick Van Dyke learned this word from a professional nanny"],
            ['quantum physics', "Einstein's Theory of Relativity was this field's predecessor"],
            ['EniMeeneeMineeMoe', 'Catch it any way you can']
        ],
        words: [],
        priorWord: '',
        currWord: 'talent',
        hintText: 'hint hint hint hint hint',
        scrambledWord: '45',
        guess: '',
        missMessage: "Sorry, that's not correct.  Please try again.",
        successMessage: "You got it!  Nice work.",      
        feedback: 'good' ,
        feedbackClass: 'correct',
        hasError: false
         
               
    },

    methods: {
        startPlay: function () {
            this.playState = 'playing';          
            this.startMessage = this.startMessage + this.playerName + '!';   
            this.guess = '';
            this.challengeLevel = '';    
        },
        setChallengeLevel: function () {

           if (this.challengeLevel == 'easy') {
               this.words = this.easyWords;
           }
           else if ( this.challengeLevel == 'medium' ) {
               this.words = this.mediumWords;
           }
           else {
               this.words = this.hardWords;
           }

        },
        checkGuess: function () {  

            if (this.guess === this.currWord) {
                this.feedback = this.successMessage;
                this.hasError = false;

            } else {
                this.feedback = this.missMessage;
                this.hasError = true;
            }
        },

        generateRand:  function(seed) {
            return  Math.floor((Math.random() * seed) + 1);
        },

        getWord: function() {
             let i = 0;
             for (let i = 0; i < this.words.length; i++) {
                 if (this.priorWord != this.words[i][0]) {
                    this.currWord = this.words[i][0]; 
                    this.hintText = this.words[i][1];        
                 }
             }
            return this.currWord;
        },
        scramble: function(word) {
            var myScramble = ""; 
            
            myScramble = this.scramble2(word);
            return myScramble;
        },

        scramble2 : function(word) {
            
            var piece1 = word.slice(0,2);
            var piece2 = word.substr(2);
            myWord = piece2.concat(piece1);

            return myWord; 
         },

         playAgain: function() {
            this.playState = 'playing';          
            this.guess = '';
            this.challengeLevel = '';
         }
    },
       computed: {
          scrambleThis: function () {
          this.setChallengeLevel();
          this.priorWord = this.currWord;
          this.currWord = '';
          this.scrambledWord = ''; 
          this.currWord = this.getWord();
          this.scrambledWord = this.scramble(this.currWord); 
          
          return this.scrambledWord;   
        }
    }   
})
