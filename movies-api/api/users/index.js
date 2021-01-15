import express from 'express';
import User from './userModel';
import jwt from 'jsonwebtoken';
import movieModel from '../movies/movieModel';

const router = express.Router(); // eslint-disable-line

// Get all users
router.get('/', (req, res, next) => {
    User.find().then(users => res.status(200).json(users)).catch(next);
});

// Register OR authenticate a user
router.post('/', async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(401).json({
            success: false,
            msg: 'Please pass username and password.',
        });
    }
    if (req.query.action === 'register') {
        await User.create(req.body).catch(next);
        res.status(201).json({
            code: 201,
            msg: 'Successfully created new user.',
        });
    } else {
        const user = await User.findByUserName(req.body.username).catch(next);
        if (user === null) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found.' });
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
                // if user is found and password is right create a token
                const token = jwt.sign(user.username, process.env.SECRET);
                // return the information including token as JSON
                res.status(200).json({
                    success: true,
                    token: 'BEARER ' + token,
                });
            } else {
                res.status(401).json({
                    code: 401,
                    msg: 'Authentication failed. Wrong password.'
                });
            }
        });
    }
});

// Update a user
router.put('/:id', (req, res, next) => {
    if (req.body._id) delete req.body._id;
    User.update({
        _id: req.params.id,
    }, req.body, {
        upsert: false,
    })
        .then(user => res.json(200, user)).catch(next);
});

//Get user favourites
router.get('/:userName/favourites', (req, res, next) => {
    const userName = req.params.userName;

    if (User.findByUserName(userName) == null) {
        res.status(401).json({
            success: false,
            msg: "Invalid user ID."
        });
    } else {
        User.findByUserName(userName).populate('favourites').then(
            user => res.status(201).json(user.favourites)
        ).catch(next);
    }
});

//Add a favourite but Can add duplicates!
router.post('/:userName/favourites', async (req, res, next) => {
    const newFavourite = req.body.id;
    const userName = req.params.userName;
    const movie = await movieModel.findByMovieDBId(newFavourite);
    const user = await User.findByUserName(userName).catch(next);

    //User not in database
    if (user === null) return res.status(401).json({ code: 401, msg: 'Authentication failed. User not found in database.' });

    //Movie ID check
    if (movie === null) {
        res.status(401).json({
            success: false,
            msg: "Movie ID not valid.Here"
        })
    }
    await user.favourites.push(movie._id);
    await user.save();
    res.status(201).json(user);
    console.log;
});


export default router;