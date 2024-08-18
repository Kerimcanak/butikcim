import { customerToken, storeToken, adminToken } from "../backend/token.json";

export const verifyEndpoint = (token) => {
    if (token === customerToken) {
        console.log("token says you are a customer")
        return 'customer';
    } else if (token === storeToken) {
        console.log("token says you are a store")
        return 'store';
    } else if (token === adminToken) {
        console.log("token says you are an admin")
        return 'admin';
    } else {
        return null;
    }
}