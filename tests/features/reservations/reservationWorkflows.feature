Feature: Reservations Management

	As a an application user,
  I should be able to request a reservation be given priority over

  @watch
  Scenario: View agency details on reservation screen
    Then I see agency details for Group Key, Company, Agent Name, State, Account Type "Should be Buff", and SubAccount Code

  @watch
  Scenario: Create a reservation entry
		When I open the reservation entry form
    And I enter a reservation name of "The Rock"
    And I enter a reservation time for "2" hours in the future
    And I enter a party number "16"
    Then A reservation record matching those details should exist
		And The reservation should have a status of active
