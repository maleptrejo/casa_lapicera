module.exports = (sequelize, dataTypes) => {
    let alias = `Ocasions`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING
        },
       

    };
    let config = {
        tableName: `ocasions`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Ocasion = sequelize.define(alias, cols, config)

    Ocasion.associate = (models) => {
        Ocasion.belongsToMany(models.Products,{
                    as: 'products',
                    through: 'products_ocasions',
                    foreignKey: 'ocasion_id',
                    otherKey:'product_id'
                })
    
   
    }

    return Ocasion;
}