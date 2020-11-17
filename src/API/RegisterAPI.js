const REGISTER_KEY = "register_data";

export function postRegister(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
    let userArrayString = localStorage.getItem(REGISTER_KEY);

    // If nothing was returned from the localStorage then that means we
    // need to create our data.
    if (userArrayString === null) {
        const arr = [];
        const arrString = JSON.stringify(arr)
        localStorage.setItem(REGISTER_KEY, arrString);
        userArrayString = arrString;
    }

    const userArray = JSON.parse(userArrayString);
    console.log("OUTPUT", userArray)

    //TODO: Validation...

    userArray.push(postData);

    userArrayString = JSON.stringify(userArray);

    // Save back to the get local storage.
    localStorage.setItem(REGISTER_KEY, userArrayString);

    // Call our success callback
    const responseData = {
        message: "Registration was a success!",
    }
    onSuccessCallbackFunc(responseData);
}
