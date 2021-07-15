Feature: ANZ Demo tests

    @borrowTest
    Scenario: Borrow page form validation
        Given I am on the borrow page
        When I fill the form with test data for BorrowPower test
        Then I expect to see borrowing power for BorrowPower test

    @clearTest
    Scenario: Start over button validation
        Given I am on the borrow page
        When I fill the form with test data for StartOver test
        Then I click on start over button
        Then I expect to see clear form for StartOver test

    @errorTest
    Scenario: Error validation with incorrect living expenses
        Given I am on the borrow page
        When I fill the form with test data for errorMessage test
        Then I expect to see message for errorMessage test
