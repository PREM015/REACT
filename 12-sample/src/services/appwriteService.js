import { Databases, Storage, Query, Client, Account } from "appwrite";
import conf from "../conf/conf";

// Initialize Appwrite client
const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const account = new Account(client); // Initialize Account service

export class AppwriteService {
  constructor() {
    this.databases = new Databases(client);
    this.bucket = new Storage(client);
  }

  // Check if the user is logged in
  async getCurrentUser() {
    try {
      const user = await account.get(); // Get current logged-in user
      return user;
    } catch (error) {
      console.error("Error fetching current user:", error);
      return null;
    }
  }

  // CRUD methods for Posts, Files, etc.
  async createPost({ title, slug, content, featuredImage, status }) {
    try {
      const user = await this.getCurrentUser(); // Check if user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      const userId = user.$id; // Get the logged-in user's ID
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const user = await this.getCurrentUser(); // Ensure user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.error("Error updating post:", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      const user = await this.getCurrentUser(); // Ensure user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      const user = await this.getCurrentUser(); // Ensure user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error fetching post:", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const user = await this.getCurrentUser(); // Ensure user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Error fetching posts:", error);
      return false;
    }
  }

  // File upload and management
  async uploadFile(file) {
    try {
      const user = await this.getCurrentUser(); // Ensure user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        file
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      const user = await this.getCurrentUser(); // Ensure user is logged in
      if (!user) {
        throw new Error("User not authenticated");
      }
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId
      );
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    );
  }
}

export default new AppwriteService();
