import express from 'express';
import { addGuru, deleteGuru, getDataGuru, getSelectedGuru, updateGuru } from '../controllers/GuruControllers.js';

const router = express.Router();

router.get('/guru', getDataGuru);
router.get('/guru/:id', getSelectedGuru);
router.post('/guru', addGuru);
router.patch('/guru/:id', updateGuru);
router.delete('/guru/:id', deleteGuru);

export default router;
