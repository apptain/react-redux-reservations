//bad? https://subvisual.co/blog/posts/79-a-bridge-between-redux-and-meteor
//http://marmelab.com/blog/2015/11/27/meteor-webpack-react-redux.html
//medium?
//https://medium.com/front-end-developers/how-we-redux-part-1-introduction-18a24c3b7efe#.9gjieumw1

import actionTypes from '../../actionTypes/global'

export function docsQueried(docs) {
  return {
    type: actionTypes.masterDetails,
    docs: docs
  }
}

export function docSelect(docForm) {
  return {
    [CALL_API]: {
      method: 'get',
      endpoint: settings.apiUrl + '/methods/docs/select',
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
export function docsChange(docs, changeRequests) {
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
