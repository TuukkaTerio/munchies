// --------------------------------------------------------------
// General helper functions
// --------------------------------------------------------------

// Checks that a value is not undefined, null or an empty string.
export function isSet(value) {
    return value !== null && value !== undefined && value !== '';
}
