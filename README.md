# Project to build APIs of 3rd level

Steps to run this project:
1. Git clone https://github.com/IDEHCO3/hyper-resource-node.git
2. Inside hyper-resource-node folder, execute: npm i 
3. Setup database settings inside ormconfig.json file
4. Still in hyper-resource-node folder, using reverse engineerings in database such as postgres, execute: npx typeorm-model-generator -h localhost -d my-database -u my-user -x my-password -e postgres -o ./src/entity/entities -s public
4.1 Or you can create your models/entities in src/entity/entities/  based on typeorm. 
5 Verify if all models/entities were generated inside src/entity/entities/ 
6. Still in hyper-resource-node folder, execute: npm run generate-routers
7. In hyper-resource-node folder execute: npm run start
8. See in http://localhost:3000/api
