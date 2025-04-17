import { Client, Account } from "appwrite";
import conf from "../conf/conf";

// Create and configure Appwrite client
const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
const account = new Account(client);

// Service for handling user authentication (signup, login, etc.)
export const authService = {
  createAccount: async (data) => {
    try {
      const response = await account.create(data.email, data.password, data.name);
      return response;
    } catch (error) {
      console.error("Error creating account:", error);
      throw error;
    }
  },
  
  login: async (email, password) => {
    try {
      const response = await account.createSession(email, password);
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      console.error("Error fetching current user:", error);
      throw error;
    }
  },
  
  logout: async () => {
    try {
      await account.deleteSession('current');
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  }
};

export default authService;
