
import express, { Router } from 'express';
import { getApplicantList,createApplication,getUserById} from '../controller/getRequest.js';

const route = express.Router()

// route.get('/',getRequest)
// application
route.get('/ApplicantList',getApplicantList)

route.get('/user/:id',getUserById)

route.post('/createApplication',createApplication)

export default route