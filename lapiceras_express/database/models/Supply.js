module.exports = (sequelize, dataTypes) => {
    let alias = `Supplies`;
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
        img_main: {
            type: dataTypes.STRING
        },
        
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
        tableName: `supplies`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        paranoid: true
    };
    const Supply = sequelize.define(alias, cols, config)

    Supply.associate = (models) => {
       Supply.belongsTo(models.Brands, {
           as: "brands",
           foreignKey: "brand_id",
           onDelete: 'CASCADE'
       })
   
        Supply.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id"
        })
        Supply.belongsTo(models.Discounts, {
            as: "discounts",
            foreignKey: "discount_id"
        })
        
     
    }

    return Supply;
}