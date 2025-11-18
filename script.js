function isSameType(value1, value2) {
  const isNaN1 = Number.isNaN(value1);
  const isNaN2 = Number.isNaN(value2);

  // If both are NaN → true
  if (isNaN1 && isNaN2) return true;

  // Only allow number or string types
  const validTypes = ["number", "string"];

  const type1 = typeof value1;
  const type2 = typeof value2;

  // If types differ → false
  if (type1 !== type2) return false;

  // If type is not number/string → false
  if (!validTypes.includes(type1)) return false;

  return true;
}
