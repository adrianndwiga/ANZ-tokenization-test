const assert = require('assert');
const tokenize = require('./tokenize');
const detokenize = require('./detokenize');

describe('index', () => {
    it('should assert true', () => {
        assert.strictEqual(1, 1);
    });
});

const accountNumbers = ['4111-1111-1111-1111'];
const tokenizedAccountNumbers = ['some hash'];
const tokens = {
    '4111-1111-1111-1111': 'some hash'
};

describe('tokenize list', () => {
    it('should tokenize list', () => {
        // when
        const result = tokenize(tokenizer(tokens), accountNumbers);

        // then
        assert.strictEqual(result.length, accountNumbers.length);
        result.forEach((token, index) => {
            assert.strictEqual(token, tokenizedAccountNumbers[index])
        })
    });
})

describe('detokenize list', () => {
    it('should return account numbers', () => {
        // when
        const result = detokenize(tokenizer(tokens), tokenizedAccountNumbers);

        // then
        assert.strictEqual(result.length, accountNumbers.length);
        result.forEach((accountNumber, index) => {
            assert.strictEqual(accountNumber, accountNumbers[index])
        })
    });
})

function tokenizer(tokens) {
    return {
        tokenize: (key) => {
            return tokens[key];
        },
        detokenize: (value) => {
            for(const key in tokens)
                if (value === tokens[key]) {
                    return key;
                }
        }
    }
}
