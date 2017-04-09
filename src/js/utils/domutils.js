
export function slowScrollTo(fromY, toY) {
    const nIterations = 30;
    const delta = toY - fromY;
    const yIncrement = delta/nIterations;
    let iter = 1;
    //window.scrollTo(0, toY);
    var promise = new Promise((resolve, reject) => {
        var interval = setInterval(() => {
            window.scrollTo(0, fromY + Math.ceil(yIncrement * iter));
            iter++; 
            if (iter > nIterations) {
                clearInterval(interval);
                resolve();
            }
        }, 30);
    });

    return promise;
}
