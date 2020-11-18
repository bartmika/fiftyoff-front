import shortid from "shortid";

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

    // Attach a unique ID to our `postData`.
    postData.id = shortid.generate();

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
    let textData = localStorage.getItem(DEALS_KEY);

    // If TEXT data is null:
    if (textData === null) {
        // a. Create an empty ARRAY
        const emptyArray = [];

        // b. Convert the ARRAY to TEXT
        textData = JSON.stringify(emptyArray)

        // c. Save the TEXT to localStorage
        localStorage.setItem(DEALS_KEY, textData)
    }

    // Convert the TEXT to ARRAY
    const arrayData = JSON.parse(textData);

    const responseData = {
        results: arrayData,
    };
    onSuccessCallbackFunc(responseData);
}

export function getDealDetail(id, onSuccessCallbackFunc, onFailureCallbackFunc) {
    // Get the TEXT data from the localStorage

    // If TEXT data is null then:
    // a. Create an empty ARRAY data
    // b. Set the TEXT data to be the converted ARRAY (JSON.parse)
    // c. Save the TEXT to localStorage

    // Convert the TEXT data to ARRAY data.

    // Iterate through all of the deals in our local storage
    // If the id match, run "onSuccessCallbackFunc" and return the found object.
    // If no match was made from the entire array then call the "onFailureCallbackFunc"
}
