 let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };

      function updateScore() {
        document.querySelector('.js-score').innerHTML = 
          `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
      updateScore();


      function autoPlay(){
        setInterval(function(){
          const playerMove = pickComputerMove();
          playGame(playerMove);098iujhgfvcxssrxydtgvbyuh 
        }, 1000);
      }

      function playGame(playerMove) {
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'Scissors') {
          if (computerMove === 'Rock') {
            result = 'You lose!';
            score.losses += 1;
          } else if (computerMove === 'Paper') {
            result = 'You win!';
            score.wins += 1;
          } else if (computerMove === 'Scissors') {
            result = 'It is a tie!';
            score.ties += 1;
          }
        } else if (playerMove === 'Paper') {
          if (computerMove === 'Rock') {
            result = 'You win!';
            score.wins += 1;
          } else if (computerMove === 'Paper') {
            result = 'It is a tie!';
            score.ties += 1;
          } else if (computerMove === 'Scissors') {
            result = 'You lose!';
            score.losses += 1;
          }
        } else if (playerMove === 'Rock') {
          if (computerMove === 'Rock') {
            result = 'It is a tie!';
            score.ties += 1;
          } else if (computerMove === 'Paper') {
            result = 'You lose!';
            score.losses += 1;
          } else if (computerMove === 'Scissors') {
            result = 'You win!';
            score.wins += 1;
          }
        }

        localStorage.setItem('score', JSON.stringify(score));
        updateScore();


        document.querySelector('.js-results').innerHTML = `${result} `;
        
        document.querySelector('.js-moves').innerHTML = `      You played: <img src="Images/${playerMove}-emoji.png"
       class="move-icon">. 
         Computer played: <img src="Images/${computerMove}-emoji.png"
        class="move-icon">`;
        }

      function pickComputerMove() {
        let randomNumber = Math.random();
        if (randomNumber < 1/3) return 'Rock';
        if (randomNumber < 2/3) return 'Paper';
        return 'Scissors';
      }