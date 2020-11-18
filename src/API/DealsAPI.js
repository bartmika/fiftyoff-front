const DEALS_KEY = "deals_data";


export function postCreateDeal(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
    console.log("Starting postCreateDeal...");

    // GET the TEXT data from localStorage.
    let textData = localStorage.getItem(DEALS_KEY);

    // If TEXT data is null then:
    if (textData === null) {
        // a. Create an empty ARRAY
        const emptyArray = [];

        // b. Convert the ARRAY to TEXT
        const emptyArrayString = JSON.stringify(emptyArray);

        // c. Save the TEXT to localStorage
        localStorage.setItem(DEALS_KEY, emptyArrayString);

        // d. Set the TEXT to be empty
        textData = emptyArrayString;
    }

    // Convert the TEXT data into an ARRAY
    const arrayData = JSON.parse(textData);

    // Push the `postData` into our ARRAY
    arrayData.push(postData);

    // Convert the ARRAY to TEXT data
    textData = JSON.stringify(arrayData);

    // Save the TEXT data to localStorage.
    localStorage.setItem(DEALS_KEY, textData);

    const responseData = { message: "Added" };
    onSuccessCallbackFunc(responseData);
}

export function getListDeals(onSuccessCallbackFunc, onFailureCallbackFunc) {
    // Get the TEXT data from localStorage.

    // If TEXT data is null:
    // a. Create an empty ARRAY

    // b. Convert the ARRAY to TEXT

    // c. Save the TEXT to localStorage

    // d. Set the TEXT to be empty

    // Convert the TEXT to ARRAY

    // Return our ARRAY
}

export function getDealDetail(id, onSuccessCallbackFunc, onFailureCallbackFunc) {
    //TODO
}
