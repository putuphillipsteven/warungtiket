module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      point: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      avatar: {
				type: Sequelize.STRING
			}
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  user.associate = (models) => {
    user.hasMany(models.transaction, {
      foreignKey: "userId",
    }),
      user.hasMany(models.event, {
        foreignKey: "userId",
      }),
      user.hasMany(models.referral, {
        foreignKey: "userId",
      });
  };
  return user;
};
