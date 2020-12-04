module.exports = (sequelize, dataTypes) => {
    let alias = `Colors`;
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
        color: {
            type: dataTypes.STRING
        },

    };
    let config = {
        tableName: `colors`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Color = sequelize.define(alias, cols, config)

    Color.associate = (models) => {
        Color.belongsToMany(models.Products,{
                    as: 'products',
                    through: 'products_colors',
                    foreignKey: 'color_id',
                    otherKey:'product_id'
                })
       

   
    }

    return Color;
}