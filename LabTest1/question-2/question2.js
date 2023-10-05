const resolvedPromise = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success);
        }, 500);
        });
        };

        const rejectedPromise = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        let error = { 'error': 'delayed exception!' };
        reject(error);
        }, 500);
        });
        };

// Call and handle resolvedPromise
        resolvedPromise()
        .then(success => {
        console.log(success);
        })
        .catch(error => {
        console.error(error);
        });

// Call and handle rejectedPromise
        rejectedPromise()
        .then(success => {
        console.log(success);
        })
        .catch(error => {
        console.error(error);
        });
