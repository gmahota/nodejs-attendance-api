# nodejs-attendance-api

## Prodution

### Heroku
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Docker

  docker build . -t attendance-api
  docker run -p 5000:5000 attendance-api

## Database

Using TypeOrm

### Create Migration
	npm run typeorm migration:create -n create_paymentsMpesaLogs
	npm run typeorm migration:run

### Migrate Last Updates
	npm run typeorm migration
### Rever Last Migration
	npm run typeorm migration:revert
