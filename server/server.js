import express from 'express';
import pages from './pages';
import apis from './apis';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, './../client')));
app.use(express.urlencoded({extended: true}));
app.use('/', pages);
app.use('/api', apis);

app.use((req, res, next) => {
    next(404);
});

// error handling
app.use((err, req, res, next) => {
    res.send(`${err}`);
});

app.listen(process.env.PORT || 6000, () => {
    console.log(`Listening on port: ${process.env.PORT || 6000}`);
});
