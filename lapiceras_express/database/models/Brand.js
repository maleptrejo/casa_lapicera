module.exports = (sequelize, dataTypes) => {
    let alias = `Brands`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING
        },
        img_brand: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: `brands`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`
    };
    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
       Brand.hasMany(models.Products, {
           as: "products",
           foreignKey: "brand_id"
        })
    }

    return Brand;
}