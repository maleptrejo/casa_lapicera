module.exports = (sequelize, dataTypes) => {
    let alias = `Refills`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        
        stock: {
            type: dataTypes.INTEGER,
        },
        supply_id: {
            type: dataTypes.INTEGER
        },
       
       
        code: {
            type: dataTypes.INTEGER,
        },
        name: {
            type: dataTypes.STRING
        },
        ink: {
            type: dataTypes.STRING
        },
        img_main: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: `refills`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`
    };
    const Refill = sequelize.define(alias, cols, config)

    Refill.associate = (models) => {
       Refill.belongsTo(models.Supplies, {
           as: "refills",
           foreignKey: "supply_id",
           onDelete: 'CASCADE'
       })     
    }

    return Refill;
}