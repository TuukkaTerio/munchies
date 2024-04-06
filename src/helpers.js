// --------------------------------------------------------------
// General helper functions
// --------------------------------------------------------------

// Checks that a value is not undefined, null or an empty string.
export function isSet(value) {
    return value !== null && value !== undefined && value !== '';
}

export function preventScroll() {
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
    return;
}

export function allowScroll() {
    const body = document.body;
    body.style.height = "auto";
    body.style.overflowY = "visible";
    return;
}
