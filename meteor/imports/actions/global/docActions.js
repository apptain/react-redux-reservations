//bad? https://subvisual.co/blog/posts/79-a-bridge-between-redux-and-meteor
//http://marmelab.com/blog/2015/11/27/meteor-webpack-react-redux.html
//medium?
//https://medium.com/front-end-developers/how-we-redux-part-1-introduction-18a24c3b7efe#.9gjieumw1

import { CALL_API } from 'redux-api-middleware'
import actionTypes from '../../actionTypes/global'
import settings from '../../settings' 

export function queried(docs) {
  return {
    type: actionTypes.docs.queried,
    docs: docs
  }
}

export function select(id) {
	debugger
  return {
    [CALL_API]: {
      method: 'get',
      endpoint: settings.apiUrl + '/methods/docs/select/' + id,
      headers: { 'Content-Type': 'application/json' },
      types: [
        actionTypes.docs.select.request,
        actionTypes.docs.select.success,
        actionTypes.docs.select.failure,
      ]
    }
  }
}

//Couch doc carries doc type
export function change(docs, changeRequests) {
  return {
    [CALL_API]: {
      method: 'post',
      endpoint: settings.apiUrl + '/methods/docs/change-request',
      body: JSON.stringify(docs),
      headers: { 'Content-Type': 'application/json' },
      types: [
        actionTypes.docs.docsChangeRequest.request,
        actionTypes.docs.docsChangeRequest.success,
        actionTypes.docs.docsChangeRequest.failure,
      ]
    }
  }
}
