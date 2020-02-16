let somethingWillHappen = () => {
    return new Promise((resolve, reject) => {    
    if (true) {
        resolve("Hey!");
    } else {
        reject("Whooops!");
    }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


    let somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {    
        if (true) {
            setTimeout(()=>{
                resolve("true!");
            },2000)

        } else {
            const error= new Error('Whoop!')
            reject(error)
        }
        });
    };
    
    somethingWillHappen2()
        .then(response => console.log(response))
        .catch(err => console.error(err));

    
Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response=>{
        console.log('arrarys of results', response);
    })
    .catch(err=>{
        console.error(err)
    })