import express from 'express';
import { addSiswa, deleteSiswa, getAllSiswa, getSelectedSiswa, updateSiswa } from '../controllers/SiswaControllers.js';

const router = express.Router();

router.get('/siswa', getAllSiswa);
router.get('/siswa/:id', getSelectedSiswa);
router.post('/siswa', addSiswa);
router.patch('/siswa/:id', updateSiswa);
router.delete('/siswa/:id', deleteSiswa);

export default router;
