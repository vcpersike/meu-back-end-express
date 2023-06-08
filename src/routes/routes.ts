import express from 'express';
import {
    createImage,
    getAllImages,
    updateImage,
    deleteImage,
} from '../controllers/imageController';
import {
    createAudio,
    getAllAudios,
    updateAudio,
    deleteAudio,
} from '../controllers/audioController';
import {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
} from '../controllers/userController';


const router = express.Router();

// Rotas para Imagem (Image)
router.post('/images', createImage);
router.get('/images', getAllImages);
router.put('/images/:id', updateImage);
router.delete('/images/:id', deleteImage);

// Rotas para Áudio (Audio)
router.post('/audios', createAudio);
router.get('/audios', getAllAudios);
router.put('/audios/:id', updateAudio);
router.delete('/audios/:id', deleteAudio);

// Rotas para Usuário (User)
router.post('/users', createUser);
router.get('/users', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;