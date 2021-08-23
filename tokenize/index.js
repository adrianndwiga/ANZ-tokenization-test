function tokenize(tokenizer, accountNumbers) {
    return accountNumbers.map(accountNumber => tokenizer.tokenize(accountNumber));
}

module.exports = tokenize;
