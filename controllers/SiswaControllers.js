import Siswa from '../models/SiswaModels.js';

export const getAllSiswa = async (req, res) => {
  try {
    const response = await Siswa.findAll();
    res.status(200).json({
      message: 'Success Get Siswa',
      status: 200,
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const getSelectedSiswa = async (req, res) => {
  try {
    const response = await Siswa.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'Get Selected Siswa',
      status: 200,
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const addSiswa = async (req, res) => {
  const { name, umur, gender } = req.body;
  if (name == null || name == undefined)
    return res.status(400).json({
      message: 'Please Input Your Name!',
    });

  try {
    await Siswa.create({
      name_siswa: name,
      umur_siswa: umur,
      gender_siswa: gender,
    });
    res.status(201).json({
      message: 'Successfully Created Siswa',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateSiswa = async (req, res) => {
  const { name, umur, gender } = req.body;
  try {
    await Siswa.update(
      {
        name_siswa: name,
        umur_siswa: umur,
        gender_siswa: gender,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      message: 'Success Update Siswa',
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const deleteSiswa = async (req, res) => {
  try {
    await Siswa.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: 'Success Delete Siswa',
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
