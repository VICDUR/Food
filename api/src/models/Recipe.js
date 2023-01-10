const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING(800),
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      defaultValue: 20
    },
    diets: {
      type: DataTypes.STRING
    },
    steps: {
      type: DataTypes.STRING(800),
    },
    image: {
      type: DataTypes.STRING(150)
    }

  },
    {
      timestamps: false,
    }
  );
};
