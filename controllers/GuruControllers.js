import Guru from '../models/GuruModels.js';

export const getDataGuru = async (req, res) => {
  try {
    const response = await Guru.findAll();
    res.status(200).json({
      message: 'Get Data Guru',
      status: 200,
      data: response,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export const getSelectedGuru = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).json({ message: 'Data Guru Not Found' });
  try {
    const response = await Guru.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: 'Success Get Selected Guru',
      status: 200,
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const addGuru = async (req, res) => {
  const { name, umur, gender, telp } = req.body;
  if (!name) return res.status(400).json({ message: 'Please Input Your Name' });
  try {
    await Guru.create({
      name_guru: name,
      umur_guru: umur,
      gender_guru: gender,
      no_telp: telp,
    });
    res.status(201).json({
      message: 'Success Created Guru',
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
export const updateGuru = async (req, res) => {
  const id = req.params.id;
  const { name, umur, gender, telp } = req.body;
  if (!id) return res.status(404).json({ message: 'Guru Not Found' });
  try {
    await Guru.update(
      {
        name_guru: name,
        umur_guru: umur,
        gender_guru: gender,
        no_telp: telp,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      message: 'Success Updated Guru',
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};
export const deleteGuru = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(404).json({ message: 'Deleted Not Found' });
  try {
    await Guru.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: 'Success Deleted Guru',
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
