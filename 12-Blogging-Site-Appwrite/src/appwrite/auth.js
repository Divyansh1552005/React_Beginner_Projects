import conf from "../conf/conf.js";
import { Client, Account, ID, Databases, Storage } from "appwrite";

export class AuthService{
    client = new Client(); // idhar hamne directly nahi banaya .endpoint and other but in constructor becoz hame ye client and account tabhi toh bane hue chayie jab koi account banaye ie constructor use karo
    account; // yahi islie nahi banaya becoz hame account tabhi chayie jab client bane



    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint - this IS required!
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);

        // we can now do account creation using promise but below we will use async await for better readability
        

    
}   

    async create_account(email, password, name) {
        try{    
            // always study from documnetation of appwrite
            // create account takes 3 parameters email, password and name
            // name is optional but we will use it for better user experience
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if(userAccount){
                // if account is created successfully then we can return the userAccount
                // but before that  we can also call another method ie agar account succesfully bann gya hai toh login bhi karwa hi dete hai
                return this.login(email, password); // this will create a session for the user and return the user account
                 
                
            }
            else{
                return userAccount; // if account is not created then we can return the userAccount which will be null or undefined
            }
        }
        catch(error){
            throw error;
        }

    }


    async login(email, password) {
        try{
            return await this.account.createEmailPasswordSession(email, password);
            // this will create a session for the user and return the user account

        }
        catch(error){
            throw error;
        }

}

    // we are making this method to get the current user account details 
    // also suppose if user is not logged in and he reaches home page then we can redirect him to login page
    // so we can use this method to check if user is logged in or not
    // if user is logged in then we can return the user account details else we can return null
    async get_current_user(){
        try{
            return await this.account.get();
            // this will return the user account details
        }
        catch(error){
            console.log("Appwrite service :: get_current_user :: No active session (user not logged in)");
            // if there is an error getting the user account then we can return null
            // note that we can also directly throw error
            return null; // if there is no user account then we can return null
        }
    }


    async logout() {
        try{
            return await this.account.deleteSession('current'); // this will delete the current session
        }
        catch(error){
            console.error("Error Appwrite service :: logout :: error hai:", error);
            throw error; // if there is an error then we can throw the error
        }
    }

    // Update user profile information
    async update_profile(name) {
        try {
            return await this.account.updateName(name);
        } catch (error) {
            console.error("Appwrite service :: update_profile :: error :", error);
            throw error;
        }
    }

    // Update user email
    async update_email(email, password) {
        try {
            return await this.account.updateEmail(email, password);
        } catch (error) {
            console.error("Appwrite service :: update_email :: error :", error);
            throw error;
        }
    }

    // Send password reset email
    async reset_password(email) {
        try {
            // This will send a password reset email to the user
            return await this.account.createRecovery(
                email,
                `${window.location.origin}/reset-password` // Reset URL
            );
        } catch (error) {
            console.error("Appwrite service :: reset_password :: error :", error);
            throw error;
        }
    }

    // Complete password reset with secret from email
    async confirm_password_reset(userId, secret, newPassword) {
        try {
            return await this.account.updateRecovery(
                userId,
                secret,
                newPassword
            );
        } catch (error) {
            console.error("Appwrite service :: confirm_password_reset :: error :", error);
            throw error;
        }
    }

    // Update password (when user is logged in)
    async update_password(newPassword, oldPassword = '') {
        try {
            return await this.account.updatePassword(newPassword, oldPassword);
        } catch (error) {
            console.error("Appwrite service :: update_password :: error :", error);
            throw error;
        }
    }

    // Delete user account
    async delete_account() {
        try {
            // First get current user to get their ID
            const user = await this.get_current_user();
            if (!user) {
                throw new Error('No user logged in');
            }
            
            // Delete the account (this will also delete all sessions)
            return await this.account.delete();
        } catch (error) {
            console.error("Appwrite service :: delete_account :: error :", error);
            throw error;
        }
    }
    
}

// creating an object so we can later on just import objects jinpe saare methods lage lagaaye hue hai

const authservice = new AuthService(); // ab iss authservice object mein saare methods lage hue hai jaise createAccount, login, getCurrentUser, logout etc.

export default authservice; // exporting the object so that we can use it in other files without creating a new instance
// now we can use this object to call methods like authservice.account.createSession() etc.



