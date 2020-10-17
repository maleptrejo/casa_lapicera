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
        
    };
    let config = {
        tableName: `refills`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        paranoid: true
    };
    const Refill = sequelize.define(alias, cols, config)

    Refill.associate = (models) => {
        Refill.belongsTo(models.Brands, {
            as: "brands",
            foreignKey: "brand_id",
            onDelete: 'CASCADE',
            
        })
  
         Refill.belongsTo(models.Categories, {
             as: "categories",
             foreignKey: "category_id"
         })
         Refill.belongsTo(models.Discounts, {
             as: "discounts",
             foreignKey: "discount_id"
         })  
         Refill.belongsToMany(models.Inks,{
            as: 'inks',
            through: 'inks_refills',
            foreignKey: 'refill_id',
            otherKey:'ink_id'
        })
        Refill.belongsToMany(models.Images,{
            as: 'images',
            through: 'refills_images',
            foreignKey: 'refill_id',
            otherKey:'image_id'
        })
    }

    return Refill;
}