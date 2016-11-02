/**
 * A list of Staff to pre-fill the Collection.
 * @type {*[]}
 */
var staffSeeds = [
  {account: "BigFic-200", friendlyName: "Big Ficticious Company", status: "active", numbField: 10},
  {account: "BigFic-100", friendlyName: "Smaller Ficticious Company", status: "active", numbField: 20},
  {account: "LilFic-200", friendlyName: "Little Ficticious Company", status: "suspended", numbField: 300}  
];

/**
 * Initialize the Staff collection if empty with seed data.
 */
if (Staff.find().count() === 0) {
  _.each(staffSeeds,  function(staff) {
    Staff.insert(staff);
  });
}
