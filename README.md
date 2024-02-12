# PetFamily
Trabalho desenvolvimento no âmbito da UC por Luís Bastos

# Acesso ao backend
o serviço de backend está alojado em [render.com](https://pet-family-backend.onrender.com/)

# Instruções Deploy to Firebase:

1) build app: 
	set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build
2) aceder a firebase console e criar um novo projeto
	https://console.firebase.google.com/

3) cmd: npm install firebase-tools -g

4) cmd: firebase login

5) cmd: firebase init hosting

6) cmd: firebase deploy --only hosting

url gerado: https://pet-family-frontend.web.app

