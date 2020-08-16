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
    //    Product.belongsTo(models.Brands, {
    //        as: "brands",
    //        foreignKey: "brand_id"
    //    })
    //    Product.belongsTo(models.Discounts, {
    //         as: "discounts",
    //         foreignKey: "discount_id"
    //     })
        // Product.belongsTo(models.Categories, {
        //     as: "categories",
        //     foreignKey: "category_id"
        // })
        // Product.hasMany(models.Product_imgs, {
        //     as:"product_imgs",
        //     foreignKey: "product_id"
        // })
        // Product.belongsToMany(models.Colors,{
        //     as: 'colors',
        //     through: 'products_colors',
        //     foreignKey: 'product_id',
        //     otherKey:'color_id'
        // })
        //  Product.belongsToMany(models.Ocasions,{
        //     as: 'ocasions',
        //     through: 'products_ocasions',
        //     foreignKey: 'product_id',
        //     otherKey:'color_id'
        // })
     
    }

    return Refill;
}