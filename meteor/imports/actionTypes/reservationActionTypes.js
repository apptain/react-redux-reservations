export default {
  //temp
  queried: "RESERVATIONS_QUERIED",

	// api calls
  select: {
    request: 'RESERVATION_SELECT_REQUEST',
    success: 'RESERVATION_SELECT_READY',
    failure: 'RESERVATION_SELECT_FAILURE'
  },
	query: {
    request: 'RESERVATIONS_QUERY_REQUEST',
    success: 'RESERVATIONS_QUERY_READY',
    failure: 'RESERVATIONS_QUERY_FAILURE'
  },
	// CRUD operations of create, update, and delete are assumed
	// Change request types
	upsert: {
    request: 'RESERVATION_UPSERT_REQUEST',
    success: 'RESERVATION_UPSERT_READY',
    failure: 'RESERVATION_UPSERT_FAILURE'
  },
	change: {
    request: 'RESERVATION_CHANGE_REQUEST',
    success: 'RESERVATION_CHANGE_READY',
    failure: 'RESERVATION_CHANGE_FAILURE'
  },
	changeIniators: {
		edit: 'RESERVATION_EDIT',
		fulfill: 'RESERVATION_FULFILL',
		cancel: 'RESERVATION_CANCEL'
	},
}
