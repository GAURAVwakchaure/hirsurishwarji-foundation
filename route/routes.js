
import express, { Router } from 'express';
import { getApplicant,userApplication,getUserById} from '../controller/getRequest.js';

const route = express.Router()

// route.get('/',getRequest)

route.get('/ApplicantList',getApplicant)

route.get('/:id',getUserById)

route.post('/createApplication',userApplication)

export default route