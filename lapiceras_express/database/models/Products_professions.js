module.exports = (sequelize, dataTypes) => {
    let alias = `Products_professions`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       product_id: {
        type: dataTypes.INTEGER,
    },
    profession_id: {
        type: dataTypes.INTEGER,
    },
       

    };
    let config = {
        tableName: `products_professions`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Products_professions = sequelize.define(alias, cols, config)

    

    return Products_professions;
}