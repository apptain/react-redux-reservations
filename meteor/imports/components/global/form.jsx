import React, { PropTypes, Component } from 'react'
import { ReactiveVar } from 'meteor/reactive-var'
import { Blaze } from 'meteor/blaze'
import { Template } from 'meteor/templating'
import { AutoForm } from 'meteor/aldeed:autoform'


const Form = React.createClass({
  propTypes: {
    schema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    doc: PropTypes.object,
    formId: PropTypes.string,
    buttonText: PropTypes.string
  },
  componentDidMount: function() {
    const container = this.refs.blazeContainer
    this.doc = new ReactiveVar(this.props.doc)
    // this.formResetting = new ReactiveVar(this.props.formResetting)
    const data = {
      schema: this.props.schema,
      formId: this.props.formId || 'form',
      buttonText: this.props.buttonText || 'Save',
      doc: this.doc,
      eventMap: {
        onSubmit: this.props.onSubmit
      }
    }
    const template = Template['Form']
    template.created = function () {
     AutoForm.addHooks(this.data.formId, {
        onError: function (type, error) {
          //TODO Add error handling logging for anything not a standard validation
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
          //TODO refactor out submit map for now
          this.template.data.eventMap.submit(insertDoc)
        }
      })
    }
    template.helpers({
      document: function(){
        if(this.doc) {
          var doc = this.doc.get()

          //TODO Move to utiltity and perform out of component
          var key, keys = Object.keys(doc)
          var n = keys.length
          var newdoc = {}
          while (n--) {
            key = keys[n]
            var newKey = key.substr(0, 1).toLowerCase() + key.substr(1)
            newKey = newKey.replace(/ID/g, "Id")
            newdoc[newKey] = doc[key]
          }

          return newdoc
        }
      }
    })
    template.events({
      'submit form': function (e) {
        e.preventDefault()
        // This would happen down the event chain, but since we are stopping
        $('.btn-primary').prop('disabled', false)
      }
    })

    this.blazeView = Blaze.renderWithData(template, data, container)
  },
  componentWillUnmount: function() {
    Blaze.remove(this.blazeView)
  },
  componentWillReceiveProps: function(props) {
    this.doc.set(props.doc)
  },
  render: function() {
    return (
      <div>
        <div ref="blazeContainer"></div>
      </div>
    )
  }
})

export default Form
