Feature: Validate CPF
  Scenario: Valid CF
    Given I access the client screen
    And type a valid CPF "709.251.970-50" and a name "Danilo"
    And click on validate button
    Then I should have the success message
  Scenario: Invalid CF
    Given I access the client screen
    And type a valid CPF "709.251.970-51" and a name "Danilo"
    And click on validate button
    Then I should have the invalid message
    Then quit the browser