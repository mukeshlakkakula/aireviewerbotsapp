import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("670d0f5c001614864600"); // Replace with your Appwrite Project ID

const account = new Account(client);

export { account };

export const registerUser = async (email, password) => {
  try {
    await account.create("unique()", email, password);
  } catch (error) {
    console.error("Registration error:", error);
  }
};

export const loginUser = async (email, password) => {
  try {
    await account.createSession(email, password);
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
