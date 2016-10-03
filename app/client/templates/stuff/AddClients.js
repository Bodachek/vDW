/**
 * After successful addition of a new Clients document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddClientsForm: {
    /**
     * After successful form submission, go to the ListClients page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListClients');
    }
  }
});