const { Model } = require("objection");
class Guitar extends Model {
  static get tableName() {
    return "guitars";
  }
  static get relationMappings() {
    const Guitar = require("./Guitar");
    return {
      guitars: {
        relation: Model.BelongsToOneRelation,
        modelClass: Guitar,
        join: {
          from: "guitars.location_id",
          to: "locations.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "make",
        "model",
        "year",
        "color",
        "pickups",
        "price",
        "condition",
        "location_id",
        "image",
        // "created_at",
        // "updated_at"
      ],
      properties: {
        id: { type: "integer" },
        make: { type: "string", minLength: 1, maxLength: 255 },
        model: { type: "string", minLength: 1, maxLength: 255 },
        year: { type: "integer", minLength: 1, maxLength: 255 },
        color: { type: "string", minLength: 1, maxLength: 255 },
        pickups: { type: "string", minLength: 1, maxLength: 255 },
        price: { type: "integer", minLength: 1, maxLength: 255 },
        condition: { type: "integer", minLength: 1, maxLength: 255 },
        location_id: { type: "integer", minLength: 1, maxLength: 255 },
        image: { type: "string", minLength: 1, maxLength: 255 },
        // created_at: { type: "string", minLength: 1, maxLength: 255 },
        // updated_at: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}
module.exports = Guitar;