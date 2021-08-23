function detokenize(tokenizer, tokenizedAccountNumbers) {
    return tokenizedAccountNumbers.map(tokenizedAccountNumber => tokenizer.detokenize(tokenizedAccountNumber));
}

module.exports = detokenize;