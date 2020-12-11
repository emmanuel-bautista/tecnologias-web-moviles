self.onmessage = async (e) => {
    // console.log('Holi, soy el worker, recibí '+e.data);
    if (e.data === 'random') {
        sleep(5000);
        postMessage({
            status: 'ok',
            value: Math.random()
        });
    }
}

const sleep = milliseconds => { 
    var start = new Date().getTime(); 
    for (var i = 0; i < 1e7; i++) { 
        if ((new Date().getTime() - start) > milliseconds){
             break; } 
    } 
}


// postMessage('Desde el worker');