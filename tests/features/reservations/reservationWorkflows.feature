Feature: Reservation Workflows

	As a an application user,
  I should be able to make long running workflow requests and view status updates on those request

  @watch
  Scenario: Change a reservation from future to current date and initiate workflow approval
		When I change a reservations date and time from one week from now until today
    Then A workflow request should initiate requiring approval for this change
