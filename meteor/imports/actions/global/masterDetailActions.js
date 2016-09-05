import actionTypes from '../../actionTypes'
import Form from '../../components/global/form'
import Modal from '../../components/global/modal'

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
