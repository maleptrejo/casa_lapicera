module.exports = (sequelize, dataTypes) => {
    let alias = `Inks_products`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       product_id: {
        type: dataTypes.INTEGER,
    },
    ink_id: {
        type: dataTypes.INTEGER,
    },
       

    };
    let config = {
        tableName: `inks_products`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        // paranoid: true
    };
    const Inks_products = sequelize.define(alias, cols, config)

    

    return Inks_products;
}