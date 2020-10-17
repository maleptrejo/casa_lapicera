module.exports = (sequelize, dataTypes) => {
    let alias = `Products`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        code: {
            type: dataTypes.INTEGER,
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DOUBLE
        },
        description: {
            type: dataTypes.TEXT
        },
        // img_main: {
        //     type: dataTypes.STRING
        // },
        // ink: {
        //     type: dataTypes.STRING
        // },
        stock: {
            type: dataTypes.INTEGER,
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
       
        category_id: {
            type: dataTypes.INTEGER
        },
        discount_id: {
            type: dataTypes.INTEGER
        },
        limited: {
            type: dataTypes.BOOLEAN,
        }
      
    };
    let config = {
        tableName: `products`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        paranoid: true,
        
    };
    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
       Product.belongsTo(models.Brands, {
           as: "brands",
           foreignKey: "brand_id",
           onDelete: 'CASCADE',
           
       })
 
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        })
        Product.belongsTo(models.Discounts, {
            as: "discounts",
            foreignKey: "discount_id"
        })
        // Product.hasMany(models.Product_imgs, {
        //     as:"product_imgs",
        //     foreignKey: "product_id",
        //     onDelete: 'CASCADE'
        // })
        Product.belongsToMany(models.Colors,{
            as: 'colors',
            through: 'products_colors',
            foreignKey: 'product_id',
            otherKey:'color_id'
        })
        Product.belongsToMany(models.Images,{
            as: 'images',
            through: 'products_images',
            foreignKey: 'product_id',
            otherKey:'image_id'
        })
        Product.belongsToMany(models.Inks,{
            as: 'inks',
            through: 'inks_products',
            foreignKey: 'product_id',
            otherKey:'ink_id'
        })
        Product.belongsToMany(models.Ocasions,{
            as: 'ocasions',
            through: 'products_ocasions',
            foreignKey: 'product_id',
            otherKey:'ocasion_id'
        })
        Product.belongsToMany(models.Professions,{
            as: 'professions',
            through: 'products_professions',
            foreignKey: 'product_id',
            otherKey:'profession_id'
        })
     
    }

    return Product;
}