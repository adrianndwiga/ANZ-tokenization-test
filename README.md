# ANZ-test

## Run unit test

```sh
npm test
```

## Run app

```sh
npm start
```

## Run tokenize from curl

```sh
curl -X POST http://localhost:8181/tokenize -d '["444-111-111","333-111-222"]' -H 'Content-Type: application/json'
```

## Run detokenize from curl

```sh
curl -X POST http://localhost:8181/detokenize -d '["444-111-111","333-111-222"]' -H 'Content-Type: application/json'
```
