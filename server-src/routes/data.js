import express from 'express';
import restfulApi from '../modules/restfulApi';

const
	router = express.Router();

router.all('/form/:id?', restfulApi.restful('Form'));

router.all('/forms', restfulApi.restful('Forms'));

export default router;