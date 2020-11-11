module.exports = (sequelize, dataTypes) => {
    let alias = `Products_colors`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       product_id: {
        type: dataTypes.INTEGER,
    },
    color_id: {
        type: dataTypes.INTEGER,
    },
       

    };
    let config = {
        tableName: `products_colors`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Products_colors = sequelize.define(alias, cols, config)

    

    return Products_colors;
}