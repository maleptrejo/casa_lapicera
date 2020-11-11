module.exports = (sequelize, dataTypes) => {
    let alias = `Products_ocasions`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       product_id: {
        type: dataTypes.INTEGER,
    },
    ocasion_id: {
        type: dataTypes.INTEGER,
    },
       

    };
    let config = {
        tableName: `products_ocasions`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Products_ocasions = sequelize.define(alias, cols, config)

    

    return Products_ocasions;
}