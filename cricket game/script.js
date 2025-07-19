let scoreStr = localStorage.getItem('scoreCard');
    let scoreCard;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      scoreCard = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,

      };
      scoreCard.displayScoreCard = function () {
        return `SCORE: Won:${scoreCard.win},Lost:${scoreCard.lost},Tie:${scoreCard.tie}`
      };
      showResult();
    }

    let computerChoice;
    function generateComputerChoice() {
      let randomNumber = Math.random() * 3;

      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';
      }
      else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';
      }
      else {
        return 'Stump';
      }
    }
    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
          scoreCard.win++;
          return `User won.`;
        }
        else if (computerMove === 'Bat') {
          scoreCard.tie++;
          return `Match Tie.`;
        }
        else {
          scoreCard.lost++;
          return `Computer won.`;
        }
      }
      else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
          scoreCard.tie++;
          return `Match Tie.`;
        }
        else if (computerMove === 'Bat') {
          scoreCard.lost++;
          return `Computer won.`;
        }
        else {
          scoreCard.win++;
          return `User won.`;
        }

      }
      else {
        if (computerMove === 'Ball') {
          scoreCard.win++;
          return `User won.`;
        }
        else if (computerMove === 'Bat') {
          scoreCard.lost++;
          return `Computer won.`;
        }
        else {
          scoreCard.tie++;
          return `Match Tie.`;
        }


      }
    }
    function showResult(userMove, computerMove, result) {
      localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
      document.querySelector('#user-move').innerText =
        userMove ? `You have chosen ${userMove}` : '';
      document.querySelector('#computer-move').innerText =
        computerMove ? `Computer choice is ${computerMove}` : '';
      document.querySelector('#result').innerText = result || '';
      document.querySelector('#score').innerText = scoreCard.displayScoreCard();

    }