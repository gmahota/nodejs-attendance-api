run:
#Instalação do pacote
	npm install
  npm run build
  node dist/server.js

dev:
#Instalação do pacote
	npm install
  npm run build
  npm run dev

typeorm:

#Criação de migracoes
	npm run typeorm migration:create -n create_paymentsMpesaLogs
	npm run typeorm migration:run

# To Migrate
	npm run typeorm migration
# To Revert
	npm run typeorm migration:revert

docker:
  docker build . -t attendance-api
  docker run -p 5000:5000 attendance-api
