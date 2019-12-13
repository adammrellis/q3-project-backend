const { Model } = require("objection");
class Location extends Model {
  static get tableName() {
    return "locations";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "name",
        "address",
      ],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "string", minLength: 1, maxLength: 255 },
      }
    };
  }
}
module.exports = Location;