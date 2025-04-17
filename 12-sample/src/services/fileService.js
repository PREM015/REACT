import { Storage, ID,Client } from "appwrite";
import conf from "../conf/conf";

const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
const bucket = new Storage(client);

export const fileService = {
  uploadFile: async (file) => {
    try {
      const response = await bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
      return response;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  },

  deleteFile: async (fileId) => {
    try {
      await bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      throw error;
    }
  },

  getFilePreview: (fileId) => {
    return bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
};

export default fileService;
