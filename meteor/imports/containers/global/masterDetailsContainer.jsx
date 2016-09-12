import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader'

import * as actions from '../../actions/global'
import Grid from '../../components/global/grid'
import Modal from '../../components/global/modal'
import Form from '../../components/global/form'

const MasterDetailsContainer = React.createClass({
  propTypes: {
    schema: PropTypes.object.isRequired,
		collection: PropTypes.object.isRequired,
    collectionName: PropTypes.string.isRequired,
    columnDefs: PropTypes.array.isRequired
  },
  componentDidMount() {
    //TODO move into actions/reducers
    const docsSub = Meteor.subscribe('docs', this.props.collectionName)
    setTimeout(this.handleSubs(docsSub), 0)
  },
  handleSubs(docsSub) {
    Meteor.autorun(() => {
      if(docsSub.ready()) {
        this.props.docsReady(
					this.props.collection.find().fetch())
      }
    })
  },
  onRowSelected(e) {
    this.props.docModalShow(e.node.data)
  },
  render() {
    return (
      <div className="grid">
        { this.props.docs ?
          <Grid
						rowData={this.props.docs}
						columnDefs={this.props.columnDefs}
						onRowSelected={this.onRowSelected.bind(this)}
					/>
          :
          <div>No Data</div>
        }
      </div>
    )
  }
})

var mapStateToProps = function(state) {
  return {
    doc: state.docs.doc,
    docs: state.docs.docs,
    docSelectPending: state.docs.docSelectPending,
    docsQueryPending: state.docs.docsQueryPending,
    docsChangePending: state.docs.docsChangePending
  }
}

var mapDispatchToProps = function(dispatch) {
  return {
    docsReady(docs) {
      dispatch(actions.docs.queried(docs))
    },
    docModalShow(doc) {
      dispatch(actions.overlays.add(doc._id,(
        <Modal id={doc._id || 'new' + this.collectionName}
          onClose={this.docModalClose}>
          <Form
            schema={this.schema}
            doc={doc}
            onSubmit={this.docUpsert}
           	formId={doc._id || 'new' + this.collectionName}
          />
        </Modal>
      )))
    },
    docModalClose(id) {
      dispatch(actions.overlays.remove(id))
    },
    docUpsert(doc) {
      dispatch(actions.docs.upsert(doc))
    },
    //Would be a good place for any entire dataset searches
  }
}

export {MasterDetailsContainer}

export default connect(mapStateToProps,mapDispatchToProps)(MasterDetailsContainer)
