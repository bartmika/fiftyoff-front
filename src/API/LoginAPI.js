


export function postLogin(postData, onSuccessCallbackFunc, onFailureCallbackFunc) {

    if (postData.username === "bart" && postData.password === "123") {
        const responseData = {
            "accessToken": "123",
            "firstName": "Bart",
            "lastName": "Mika",
        }
        onSuccessCallbackFunc(responseData);

    } else {
        const responseData = {
            message: "Wrong username or password",
        }
        onFailureCallbackFunc(responseData);
    }
}
