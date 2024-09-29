export function objectValidator(object, schema) {
  let errors = Object.keys(schema)
    .filter(function (key) {
      return typeof object[key] !== schema[key].name.toLowerCase();
    })
    .map(function (key) {
      return new Error(key + " is invalid.");
    });

  if (errors.length > 0) {
    const errorMessage = errors.map((errors) => {
      return errors.message;
    });
    return errorMessage;
  } else {
    return [];
  }
}
