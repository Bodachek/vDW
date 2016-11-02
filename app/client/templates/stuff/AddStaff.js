/**
 * After successful addition of a new Staff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStaffForm: {
    /**
     * After successful form submission, go to the ListStaff page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ListStaff');
    }
  }
});