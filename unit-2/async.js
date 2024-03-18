async function race() {
    var runner1 = false;
    var runner2 = false;
    var loser = "";

    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            runner1 = true; 
            loser = 'runner1';
            resolve(true);
        }, Math.random() * 10000);
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            runner2 = true; 
            loser = 'runner2';
            resolve(true);
        }, Math.random() * 10000);
    });

    const result1 = await runner1Go;
    const result2 = await runner2Go;
    const resultArray = [result1, result2, loser];
    return resultArray;
}

race().then((resultsArray) => {
    console.log("THE LOSER IS: ", resultsArray[2]);
}).catch((error) => {
    console.error('Error running the race:', error);
});