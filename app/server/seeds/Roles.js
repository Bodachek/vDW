/**
 * A list of Roles to pre-fill the Collection.
 * @type {*[]}
 */
var rolesSeeds = [
  {role: "BigFic-200", department: "Big Ficticious Company", status: "active", priority: 10},
  {role: "BigFic-100", department: "Smaller Ficticious Company", status: "active", priority: 20},
  {role: "LilFic-200", department: "Little Ficticious Company", status: "suspended", priority: 300}  
];

/**
 * Initialize the Roles collection if empty with seed data.
 */
if (Roles.find().count() === 0) {
  _.each(rolesSeeds,  function(roles) {
    Roles.insert(roles);
  });
}
