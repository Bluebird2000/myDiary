import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import userRoute from './api/server/routes/authRoute';
dotenv.config();
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => {
    return res.send({
        message: 'MyDiary - A platform in which users can pen down their thoughts and feelings'
    });
})

app.use('/v1/auth', userRoute);

module.exports = app;