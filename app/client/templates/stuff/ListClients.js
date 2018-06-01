Template.ListClients.helpers({

  /**
   * @returns {*} All of the Clients documents.
   */
  clientsList: function () {
    return Clients.find();
  }
});