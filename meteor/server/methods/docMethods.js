import * as Collections from '/imports/collections';

export default function () {
  Meteor.methods({
    'docsUpsert': function (collectionName, docs) {
      var upsert = function (doc) {
    	//	return Collections[collectionName].upsert(
					
      }
      if (Array.isArray(docs)) {
        docs.forEach(function(doc) {
          doc = upsert(doc);
        })
      } else {
        //We are assuming it's an object. Will add checks to ensure
        docs = upsert(docs);
      }
      return docs;
    }
  });
}
