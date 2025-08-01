import conf from "../conf/conf";
import { Client, Account, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket; // same as storage

    constructor(){
        this.client
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

        // this.client.setEndpoint(conf.appwriteUrl); // Your Appwrite Endpoint, not needed as per latest Appwrite documentation

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }   

    async create_post(title , slug , content , featuredImage, status, UserId){

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug, // Document ID,  instead of slug we can also use 'unique()' generates a unique ID
                { 
                    title,
                    content,
                    featuredImage,
                    status,
                    UserId 
                }
            )
        } 
        catch (error) {
            console.error("Appwrite service :: create_post :: error :", error);
            
        }
    }

    // becoz slug se uniqely identify karna hai post ko
    async update_post(slug , {title, content , featuredImage, status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug, // Document ID
                { 
                    title,
                    content,
                    featuredImage,
                    status,
                    UserId 
                }
            )
        } 
        catch (error) {
            console.error("Appwrite service :: update_post :: error :", error);
        }
    }


    async delete_post(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug // Document ID
            )
            return true;
        }
        
        
        catch (error) {
            console.error("Appwrite service :: delete_post :: error :", error);
            return false;
        }

    }


    async get_post(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, // Database ID
                conf.appwriteCollectionId, // Collection ID
                slug // D ocument ID
            )
        } 
        catch (error) {
            console.error("Appwrite service :: get_post :: error :", error);
            return false; // if there is an error then we can return false
        }
    }

    
    // ye query tabhi laga skte ho agar indexes bana rakhe ho appwrite mein
    // agar indexes nahi bana rakhe ho toh ye query kaam nahi karegi
    async get_all_posts(queries = [Query.equal("status", "active")]){ // by default we are getting only published posts
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, // Database ID
                conf.appwriteCollectionId, // Collection ID
                queries, // Queries to filter the documents, by default we are getting only published posts
            )
        } 
        catch (error) {
            console.error("Appwrite service :: get_all_posts :: error :", error);
            return false; // if there is an error then we can return false
        }
    }

    // file upload services
    async upload_file(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId, // Bucket ID
                ID.unique(), // Unique ID for the file, you can also use 'file.name' to use the original file name
                file // File object
            )
        } catch (error) {
            console.error("Appwrite service :: upload_file :: error :", error);
            return false; // if there is an error then we can return false
            
        }
    }


    async delete_file(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId, // Bucket ID
                fileId // File ID
            )
        } catch (error) {
            console.error("Appwrite service :: delete_file :: error :", error);
            return false; // if there is an error then we can return false
        }
    }

    // this get file preview method is very fast so it needs no async/await
    get_file(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId, // Bucket ID
                fileId // File ID
            )
        } catch (error) {
            console.error("Appwrite service :: get_file :: error :", error);
            return false; // if there is an error then we can return false
        }
    }








}



const service = new Service();
export default service; // exporting the object so that we can use it in other files without creating a new instance