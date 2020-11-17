const REGISTER_KEY = "register_data";

export function postLogin(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {
    let userArrayString = localStorage.getItem(REGISTER_KEY);

    // If our data was not set, we need to set it here.
    if (userArrayString === null) {
        const emptyArray = [];
        const emptyArrayString = JSON.stringify(emptyArray);
        localStorage.setItem(REGISTER_KEY, emptyArrayString);
        userArrayString = emptyArrayString;
    }

    // We need to convert the TEXT to ARRAY.
    const userArray = JSON.parse(userArrayString);

    // Iterate through all the user accounts.
    for (let userObj of userArray) {
        // Find the matching username.
        if (userObj.username === postData.username) {
            // Match the password.
            if (userObj.password === postData.password) {
                const responseData = {
                    message: "Login was a success",
                }
                onSuccessCallbackFunc(responseData);
                return;
            } else {
                const responseData = {
                    message: "Wrong password",
                };
                onFailureCallbackFunc(responseData);
                return;
            }
        }
    }

    const responseData ={
        message: "No user account found with the username",
    };
    onFailureCallbackFunc(responseData);
}
