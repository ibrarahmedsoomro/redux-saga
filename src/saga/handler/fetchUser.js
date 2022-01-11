import {call, put , takeEvery} from 'redux-saga/effects'
import fetchUsers from '.././request/fetchUsers'

function* handleUsers(){
    try{
        const user = yield call(fetchUsers)
        yield put({type : "GET_USERS_SUCESS" , user : user})
    }catch(err){
        yield put({type : "GET_USER_FAILED", message : err.message})
    }
}

function* watcherUserSaga(){
    yield takeEvery("GET_USERS_REQUESTED", handleUsers)
}

export default watcherUserSaga