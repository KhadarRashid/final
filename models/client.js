module.exports = (sequelize, DataTypes) => {

    let Client = sequelize.define("Client", {
        
        name:{
            type: DataTypes.STRING
        },

        email:{
            type: DataTypes.STRING

        },

        number:{
            type: DataTypes.NUMBER
        },

        typeShoot: {
            type: DataTypes.STRING
        },

        dateShoot: {
            type: DataTypes.DATE
        },
        notes: {
            type: DataTypes.STRING
        }
    })

    Client.sync( {force: true} ).then( () => {
        console.log("Synced client table")
    })

    return Client
}
