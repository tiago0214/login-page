The backend is written in TypeScript, using Fastify as a route manager. \
It is developed with a modular approach, where each module has its own responsibilities. \
The project implements the Dependency Inversion Principle (DIP), making it easier to create unit tests

#### To run the project: 
>- **run** `npm install` to install all dependencies 
>- **create** .env file : use the `.env.example` to see a template 
>- **run** `docker compose up -d` to build the image from DB on docker 
>- **run** `npx prisma migrate dev` : to create the tables on the DB 
>- **run** `npm run dev` to start the backend service 

#### Scripts on the projects

`npm run dev -> run the project with typescript files` \
`npm run build -> compile the project to javascript` \
`npm run start -> run the project through the compiled version` \
`npm run test -> run the test files for once` \
`npm run test:watch -> run the test files in watch mode` 