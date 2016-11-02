/**
 * After successful addition of a new Roles document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddRolesForm: {
    /**
     * After successful form submission, go to the ListClients page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListRoles');
    }
  }
});