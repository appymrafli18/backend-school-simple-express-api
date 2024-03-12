import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const GuruModels = db.define(
  'guru',
  {
    name_guru: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    umur_guru: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender_guru: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    no_telp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

export default GuruModels;
// (async () => await db.sync())();
