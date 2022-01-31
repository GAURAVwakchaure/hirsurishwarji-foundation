
import express, { Router } from 'express';
import View from '../client/src/Components/View.js';
import { getApplicantList,createApplication,getUserById} from '../controller/getRequest.js';

const route = express.Router()

// route.get('/',getRequest)
// application
route.get('/ApplicantList',getApplicantList)

route.get('/:id',getUserById)

route.get('/user/:id', View)

route.post('/createApplication',createApplication)

export default route