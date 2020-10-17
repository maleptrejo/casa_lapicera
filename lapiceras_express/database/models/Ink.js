module.exports = (sequelize, dataTypes) => {
    let alias = `Inks`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
       
        color: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: `inks`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        paranoid: true
    };
    const Ink = sequelize.define(alias, cols, config)

    Ink.associate = (models) => {
        Ink.belongsToMany(models.Products,{
                    as: 'products',
                    through: 'inks_products',
                    foreignKey: 'ink_id',
                    otherKey:'product_id'
        })
        Ink.belongsToMany(models.Refills,{
                    as: 'refills',
                    through: 'inks_refills',
                    foreignKey: 'ink_id',
                    otherKey:'refill_id'
        })

   
    }

    return Ink;
}