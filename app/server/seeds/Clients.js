/**
 * A list of Clients to pre-fill the Collection.
 * @type {*[]}
 */
var clientsSeeds = [
  {account: "BigFic-200", friendlyName: "Big Ficticious Company", status: "active", numbField: 10},
  {account: "BigFic-100", friendlyName: "Smaller Ficticious Company", status: "active", numbField: 20},
  {account: "LilFic-200", friendlyName: "Little Ficticious Company", status: "suspended", numbField: 300}  
];

/**
 * Initialize the Clients collection if empty with seed data.
 */
if (Clients.find().count() === 0) {
  _.each(clientsSeeds,  function(clients) {
    Clients.insert(clients);
  });
}
