module.exports = (sequelize, dataTypes) => {
    let alias = `Discounts`;
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        deleted_at: {
            type: dataTypes.DATE
        },
        level: {
            type: dataTypes.DOUBLE
        }
    };
    let config = {
        tableName: `discounts`,
        timestamps: true,
        createdAt: `created_at`,
        updatedAt: `updated_at`
    };
    const Discount = sequelize.define(alias, cols, config)

    Discount.associate = (models) => {
       Discount.hasMany(models.Products, {
           as: "products",
           foreignKey: "discount_id"
        })
        Discount.hasMany(models.Supplies, {
            as: "supplies",
            foreignKey: "discount_id"
         })
    }

    return Discount;
}