import conf from "../conf/conf";
import { Client, Account, Databases, Storage, ID } from "appwrite";

export class AuthService {
    client = new Client(); // idhar hamne directly nahi banaya .endpoint and other but in constructor becoz hame ye client and account tabhi toh bane hue chayie jab koi account banaye ie constructor use karo
    


    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

        this.account = new Account(this.client);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
}

// creating an object so we can later on just import objects jinpe saare methods lage lagaaye hue hai

const authservice = new AuthService();

export default authservice;

