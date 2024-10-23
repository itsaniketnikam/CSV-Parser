module.exports = (sequelize, DataTypes) => {
    const Purchase = sequelize.define('clientPurchase', {
        id: {
            type: DataTypes.UUID, // Or DataTypes.INTEGER for auto-increment
            defaultValue: DataTypes.UUIDV4, // Generates UUID by default
            primaryKey: true
          },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      totalSaleAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      purchaseDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      vendor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      merchantId: {
        type: DataTypes.UUID,
        allowNull: false
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Purchase;
  };
  