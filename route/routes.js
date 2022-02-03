
import express, { Router } from 'express';
import { getApplicantList,createApplication,getUserById,updateUserById, getFile} from '../controller/getRequest.js';

const route = express.Router()

// route.get('/',getRequest)
// application
route.get('/ApplicantList',getApplicantList)

route.get('/user/:id',getUserById)

route.post('/createApplication',createApplication)

route.put('/user/:id',updateUserById)

route.get('/user/file/:name', getFile)

export default route