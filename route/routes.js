
import express, { Router } from 'express';
import { getApplicantList,createApplication,getUserById,updateUserById, getFile, updateSurvey, updateApprove , updateReject, updateGrant,  updateRowsk, deleteRowsk} from '../controller/getRequest.js';

const route = express.Router()

// route.get('/',getRequest)
// application
route.get('/ApplicantList',getApplicantList)

route.get('/user/:id',getUserById)

route.post('/createApplication',createApplication)

route.put('/user/:id',updateUserById)

route.get('/user/file/:name', getFile)

route.put('/user/updateSurvey/:id', updateSurvey)

route.put('/user/updateApprove/:id', updateApprove)

route.put('/user/updateReject/:id', updateReject)

route.put('/user/updateGrant/:id', updateGrant)

route.put('/user/updaterowsk/:id', updateRowsk)

route.put('/user/deleterowsk/:id/:noOfRows', deleteRowsk)

// route.get('/user/history/rationnumber', getRation )

export default route