import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'

import * as actions from '../../actions/global'
import Grid from '../../components/global/grid'

const MasterDetailsContainer = React.createClass({
  propTypes: {
    schema: PropTypes.object.isRequired,
		collection: PropTypes.object.isRequired, 
    collectionName: PropTypes.string.isRequired,
    columnDefs: PropTypes.array.isRequired
  },
  componentDidMount() {
    //TODO move into actions/reducers
    const docsSub = Meteor.subscribe(this.props.collectionName)
    setTimeout(this.handleSubs(docsSub), 0)
  },
  handleSubs(docsSub) {
    Meteor.autorun(() => {
      if(docsSub.ready()){
        this.props.docsReady(
					this.props.collection.find().fetch())
      }
    })
  },
  render() {
    return (
      <div className="grid">
        { this.props.docs ?
          <Grid rowData={this.props.docs} columnDefs={this.props.columnDefs} />
          :
          <div>No Data</div>
        }
      </div>
    )
  }
})

var mapStateToProps = function(state){
  if(state.docs.doc._id) {
    this.docModalShow(state.docs.doc)
  }

  return {
    doc: state.docs.doc,
    docs: state.docs.docs,
    docSelectPending: state.docs.docSelectPending,
    docsQueryPending: state.docs.docsQueryPending,
    docsChangePending: state.docs.docsChangePending
  }
}

var mapDispatchToProps = function(dispatch){
  return {
    docsReady: function(docs){
			debugger
      dispatch(actions.docs.queried(docs))
    },
    docModalShow: function(doc) {
      dispatch(actions.overlays.add(doc._id,(
        <Modal id='content'>
          <Form
            schema={this.props.schema}
            doc={doc}
            onSubmit={this.props.docUpsert}
            formId={this.props.collectionName}
          />
        </Modal>
      )))
    },
    docModalClose: function(e) {
      //TODO Change to key?
      dispatch(actions.overlays.remove(e.target.id))
    },
    docUpsert: function(doc){
      if(doc) {
        if (!doc.agentId) {
          doc.agentId = agentId
        }
        dispatch(actions.docs.docUpsert(doc))
      }
    },
    //Would be a good place for any entire dataset searches
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MasterDetailsContainer)

