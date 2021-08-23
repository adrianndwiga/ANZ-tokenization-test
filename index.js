const express = require('express');
const detokenize = require('./detokenize');
const tokenize = require('./tokenize');
const loki = require('lokijs');

const app = express();

const db = new loki('tokens.db');

const tokens = db.addCollection('tokens');

tokens.insert({
    accountNumber: '4111-1111-1111-1111',
    token: 'fvMymE7X0Je1IzMDgWooV5iGBPw0yoFy'
});
tokens.insert({
    accountNumber: '4444-3333-2222-1111',
    token: 'L4hKuBJHxe67ENSKLVbdIH8NhFefPui2'
});
tokens.insert({
    accountNumber: '4444-1111-2222-3333',
    token: 'ZA5isc0kVUfvlxTE5m2dxIY8AG76KoP3'
});

function tokenizer() {
    return {
        tokenize: (key) => {
            return tokens.findOne({ accountNumber: key}).token;
        },
        detokenize: (value) => {
            return tokens.findOne({ token: value}).accountNumber;
        }
    }
}

app.use(express.json());

app.post('/tokenize', (req, res) => {
    const response = tokenize(tokenizer(), req.body);
    res.send(response);
});

app.post('/detokenize', (req, res) => {
    const response = detokenize(tokenizer(), req.body);
    res.send(response);
});

const port = 8181;
app.listen(port, () => console.log(`Listening on port ${port}!`));
