module.exports = (sequelize, dataTypes) => {
    let alias = `Product_imgs`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        route: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: `product_imgs`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        paranoid: true
    };
    const Product_imgs = sequelize.define(alias, cols, config)

    Product_imgs.associate = (models) => {
        Product_imgs.belongsTo(models.Products, {
            as: "products",
            foreignKey: "product_id",
            onDelete: 'CASCADE'
        })
    }

    return Product_imgs;
}