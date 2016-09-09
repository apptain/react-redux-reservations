import {Content, Comments} from '/imports/collections';

export default function () {
  // SimpleRest.setMethodOptions('docs/change', options);
  Meteor.methods({
    'docsUpsert': function (docs) {
      var changeFunction = function (doc) {
          return docs.update({'_id': doc._id},
              {status: "canceled"}, {change: "true"});
      }
      if (Array.isArray(docs)) {
        docs.forEach(function(doc) {
          doc = changeFunction(doc);
        })
      } else {
        //We are assuming it's an object. Will add checks to insure
        docs = changeFunction(docs);
      }
      return docs;
    }
  });
}
