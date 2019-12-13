exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("locations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("locations").insert([
        {
          name: "Dallas",
          address: "8 Roth Drive, Dallas TX, 75001"
        },
        {
          name: "New York",
          address: "00 Rowland Court, New York City NY, 10001"
        },
        {
          name: "Phoenix",
          address: "996 3rd Plaza, Phoenix AZ, 85383"
        },
        {
          name: "Kansas City",
          address: "2 Pierstorff Circle, Kansas City MO, 64030"
        },
        {
          name: "Hollywood",
          address: "443 Burning Wood Way, Hollywood CA, 90038"
        }
      ]);
    });
};
