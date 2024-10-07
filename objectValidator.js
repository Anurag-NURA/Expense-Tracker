/*Object Validator function which matches constraint keys with object keys and matches it's data type*/
export function objectValidator(object, schema) {
  let errors = [];

  // Validator function to validate an object against a schema
  function validate(obj, schema, parentKey = "") {
    Object.keys(schema).forEach((key) => {
      const expectedType = schema[key];
      const currentKey = parentKey ? `${parentKey}.${key}` : key; // For nested keys

      if (!(key in obj)) {
        //If defined key in the schema is not present in the passed object
        errors.push(new Error(`${currentKey} is missing.`));
      } else if (Array.isArray(expectedType)) {
        // If expected type is an array in the passed object
        if (!Array.isArray(obj[key])) {
          errors.push(new Error(`${currentKey} should be an array.`));
        } else {
          // Check each element of the array
          obj[key].forEach((item, index) => {
            if (typeof expectedType[0] === "object") {
              // Nested object in array than same function is called through recursion
              validate(item, expectedType[0], `${currentKey}[${index}]`);
            }
          });
        }
      } else if (typeof expectedType === "function") {
        // Handle primitive types, if different type of value from the one defined in schema is entered
        if (typeof obj[key] !== expectedType.name.toLowerCase()) {
          errors.push(
            new Error(
              `${currentKey} is invalid. Expected type ${expectedType.name}.`,
            ),
          );
        }
      } else if (typeof expectedType === "object") {
        // Nested object validation, again recursion
        validate(obj[key], expectedType, currentKey);
      }
    });
  }

  // Start the validation
  validate(object, schema);

  // Return error messages if there are any
  return errors.length > 0 ? errors.map((error) => error.message) : [];
}

//Object Constraint Schema
const exampleSchema = {
  name: String,
  age: Number,
  friends: [
    {
      id: Number,
      name: String,
    },
  ],
  Degree: {
    name: String,
    year: Number,
    subjects: [String],
  },
};

//Example Object
const exampleObject = {
  name: "John Doe",
  age: 30,
  friends: [
    {
      id: 1,
      name: "Jane Doe",
    },
  ],
  Degree: {
    name: "B.Tech",
    year: 2020,
    subjects: ["Maths", "Science"],
  },
};

objectValidator(exampleObject, exampleSchema); // Returns empty array if object is valid
