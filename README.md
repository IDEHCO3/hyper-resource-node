# Project to build APIs of 3rd level

Steps to run this project:
1. git clone https://github.com/IDEHCO3/hyper-resource-node.git
2. Inside hyper-resource-node folder, execute: npm i 
3. In hyper-resource-node folder, setup database settings inside ormconfig.json file.
4. Still in hyper-resource-node folder, using reverse engineerings in database such as postgres, execute: npx typeorm-model-generator -h localhost -p 5432 -d my-database -u my-user -x my-password -e postgres -o ./src/entity/ -s public

4.1. Or you can create your models/entities in src/entity/entities/  based on typeorm. 

5 Verify if all models/entities were generated inside src/entity/entities/ 

6. Still in hyper-resource-node folder, execute: npm run generate-all
7. In hyper-resource-node folder execute: npm run start
8. See in http://localhost:3000/api
