import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import http from 'http';
dotenv.config();
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// return respose when a random route is imputed
app.get('*', (req, res) => {
    return res.send({
        message: 'MyDiary - A platform in which users can pen down their thoughts and feelings'
    });
})

const server = http.createServer(app);
server.listen(process.env.PORT || 4000, () => {
    console.log(`Server runing on port ${ process.env.PORT}`);
})