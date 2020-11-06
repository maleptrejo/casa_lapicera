module.exports = (sequelize, Types) => {
    const Products_images = sequelize.define(
        //alias
        'Products_images',

        //columns
        {
            id: {
                type: Types.INT,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            product_id: {
                type: Types.INT,
                allowNull: false,
                references: {
                    model: 'Products',
                    key: 'id'
                },
            },
           image_id: {
                type: Types.INT,
                allowNull: false,
                references: {
                    model: 'Images',
                    key: 'id'
                },
            },

        },

        //config
        {
            tableName: "products_images",
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }

    )
// *****
    // Products_images.associate = function (models) {
    //     Products_images.hasMany(models.Carts, {
    //         foreignKey: 'cart_id',
    //         as: 'carts'
    //     })
    //     Products_images.hasMany(models.Products, {
    //         foreignKey: 'product_id',
    //         as: 'products'
    //     })
    // }

    return Products_images;
}