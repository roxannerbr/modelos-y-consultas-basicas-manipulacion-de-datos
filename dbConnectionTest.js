const {sequelize}=require('./src/database/models')

const dbConnectionTest=async()=>{
    try{
        await sequelize.authenticate()
        console.log('La conexón fue un éxito');
    }catch(error){
        console.log('No se estableció la conección', error)
    }
}

module.exports=dbConnectionTest