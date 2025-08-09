import conf from "../conf/conf.js";
import { Client, Account, Databases, Storage, Query, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket; // same as storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint - this IS required!
            .setProject(conf.appwriteProjectId); // Your Appwrite Project ID

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }   

    async create_post({ title, slug, content, featuredImage, status, userId }){

        try {
            // Validate and sanitize the document ID (slug)
            let documentId = slug;
            
            // If slug is empty, too long, or contains invalid characters, use ID.unique()
            if (!documentId || 
                documentId.length > 36 || 
                !/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(documentId)) {
                console.log('Invalid slug detected, using ID.unique():', documentId);
                documentId = ID.unique();
            }
            
            console.log('Creating post with documentId:', documentId);
            
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, // Database ID
                conf.appwriteCollectionId, // Collection ID
                documentId, // Document ID - validated slug or unique ID
                { 
                    title,
                    content,
                    featuredImage,
                    status,
                    userId 
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
                    status
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

    // Test method to check bucket access
    async test_bucket_access(){
        try {
            console.log('Testing bucket access...');
            const files = await this.bucket.listFiles(conf.appwriteBucketId);
            console.log('Bucket files:', files);
            return files;
        } catch (error) {
            console.error("Bucket access test failed:", error);
            return false;
        }
    }

    // this get file preview method is very fast so it needs no async/await
    get_file(fileId){
        try {
            console.log('get_file called with fileId:', fileId);
            console.log('Using bucket ID:', conf.appwriteBucketId);
            const url = this.bucket.getFilePreview(
                conf.appwriteBucketId, // Bucket ID
                fileId // File ID only - removing optional parameters to test
            );
            console.log('Generated URL:', url);
            return url;
        } catch (error) {
            console.error("Appwrite service :: get_file :: error :", error);
            return false; // if there is an error then we can return false
        }
    }

    // Alternative method using getFileView for direct file access
    get_file_view(fileId){
        try {
            console.log('get_file_view called with fileId:', fileId);
            const url = this.bucket.getFileView(
                conf.appwriteBucketId, // Bucket ID
                fileId // File ID
            );
            console.log('Generated view URL:', url);
            return url;
        } catch (error) {
            console.error("Appwrite service :: get_file_view :: error :", error);
            return false;
        }
    }

    // alias method for getFilePreview - same as get_file but with different naming convention
    getFilePreview(fileId){
        try {
            console.log('getFilePreview called with fileId:', fileId);
            const url = this.bucket.getFilePreview(
                conf.appwriteBucketId, // Bucket ID
                fileId // File ID only - removing optional parameters to test
            );
            console.log('Generated URL from getFilePreview:', url);
            return url;
        } catch (error) {
            console.error("Appwrite service :: getFilePreview :: error :", error);
            return false; // if there is an error then we can return false
        }
    }








}



const service = new Service();
export default service; // exporting the object so that we can use it in other files without creating a new instance