import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const SiswaModels = db.define(
  'siswa',
  {
    name_siswa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    umur_siswa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender_siswa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default SiswaModels;
// (async () => await db.sync())();
