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
        updatedAt: `updated_at`,
        deletedAt: `deleted_at`,
        paranoid: true,
        hooks: {
            afterDestroy: function (instance, options) {
                instance.getProduct().then (product=> product.destroy());
                instance.getSupply().then (supply=> supply.destroy());
                instance.getRefill().then (refill=> refill.destroy());
            },
            afterRestore: function(instance, options){
                instance.getProduct({paranoid:false}).then(product=> product.restore());
                instance.getSupply({paranoid:false}).then(supply=> supply.restore());
                instance.getRefill({paranoid:false}).then(refill=> refill.restore());

            }
        }
    };
    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
       Brand.hasMany(models.Products, {
           as: "products",
           foreignKey: "brand_id",
           onDelete: 'CASCADE',
           hooks: true
        })
        Brand.hasMany(models.Supplies, {
            as: "supplies",
            foreignKey: "brand_id",
            onDelete: 'CASCADE',
            
         })
         Brand.hasMany(models.Refills, {
            as: "refills",
            foreignKey: "brand_id",
            onDelete: 'CASCADE',
            
         })
    }

    return Brand;
}