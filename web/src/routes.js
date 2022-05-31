const router = require('express').Router();
// require the database
const db = require('./database');

// first  route returns ok if the database is online, otherwise it returns nok
router.get('/', (req, res) => {
    db.ping((err) => {
        if (err) {
            res.send('nok');
        } else {
            res.send('ok');
        }
    });
});

router.post('/', (req, res) => {
    // create a new user
    const { usuario, clave, nrc } = req.body;

    // check if the user already exists
    db.promiseQuery('SELECT * FROM Usuario WHERE usuario = ?', [usuario])
        .then((result) => {
            if (result.length > 0) {
                res.send('nok');
            } else {
                // create the user
                db.promiseQuery('INSERT INTO Usuario (usuario, clave, nrc) VALUES (?, ?, ?)', [usuario, clave, nrc])
                    .then((_) => {
                        res.send('ok');
                    })
                    .catch((_) => {
                        res.send('nok. Error creating user');
                    });
            }
        })
        .catch((_) => {
            res.send('nok. Error checking if user exists');
        });
});

router.post('/authenticate', (req, res) => {
    const { usuario, clave, nrc } = req.body;
    // check if the user exists and if the password is correct and if the user is in the same nrc
    // if it is correct, return the user id, otherwise return nok
    db.promiseQuery('SELECT * FROM Usuario WHERE usuario = ? AND clave = ? AND nrc = ?', [usuario, clave, nrc])
        .then((result) => {
            if (result.length > 0) {
                console.log(result[0].id);
                res.send(`${result[0].id}`);
                // res.send('ok');
            } else {
                res.send('nok');
            }
        })
        .catch((_) => {
            res.send('nok, error authenticating user');
        }
    );
});

router.delete('/', (req, res) => {
    // delete all users
    db.promiseQuery('DELETE FROM Usuario')
        .then((_) => {
            res.send('ok');
        })
        .catch((_) => {
            res.send('nok');
        }
    );
});

router.get('/users', (req, res) => {
    // get all users
    db.promiseQuery('SELECT * FROM Usuario')
        .then((result) => {
            res.send(result);
        })
        .catch((_) => {
            res.send('nok');
        });
});

router.post('/users', async (req, res) => {
    // create new users
    const users = req.body;

    // store the result for each user
    const results = [];
    for (const user of users) {
        // check if the user already exists
        const result = await db.promiseQuery('SELECT * FROM Usuario WHERE usuario = ?', [user.usuario]);
        if (result.length > 0) {
            results.push(`${user.usuario} - nok`);
        } else {
            // create the user
            await db.promiseQuery('INSERT INTO Usuario (usuario, clave, nrc) VALUES (?, ?, ?)', [user.usuario, user.clave, user.nrc]);
            results.push(`${user.usuario} - ok`);
        }
    }

    res.json(results);
});

// export the router
module.exports = router;