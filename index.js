function roShamBo (player1, player2){
    const choices = ['rock', 'paper', 'scissors']

    if (!choices.includes(player1) || !choices.includes(player2)){
        return "Invalid choice, please choose between rock, paper or scissors"
    }
    
    if ( player1 === player2 ) {
        return "Draw !"
    } else if(
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'paper' && player2 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper')
    ) {
        return "Player 1 win !"
    } else {
        return "Player 2 win !"
    }
}

const testCases = [
    {player1: '', player2: 'scissors', expectedResult: "Invalid choice, please choose between rock, paper or scissors"},
    {player1: 'paper', player2: null, expectedResult: "Invalid choice, please choose between rock, paper or scissors"},
    {player1: 'rock', player2: 'scissors', expectedResult: 'Player 1 win !'},
    {player1: 'rock', player2: 'paper', expectedResult: 'Player 2 win !'},
    {player1: 'rock', player2: 'rock', expectedResult: 'Draw !'}
]

try {
    for(let testCase of testCases){
        const result = roShamBo(testCase.player1, testCase.player2)
        if(result !== testCase.expectedResult){
            throw {
                message: "Bad résults",
                actual: result,
                expected: testCase.expectedResult
            };
        }
    }
    console.log ("Sucessfull !");
} catch (err) {
    console.error("Test error: ", err);
} finally {
    process.exit(0);
}