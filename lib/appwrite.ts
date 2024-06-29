import { Client, Account, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.joyboy.aora",
  projectId: "667faf37000c449c85f9",
  databaseId: "667fb143002a71c2e5d8",
  userCollectionId: "667fb1720030c84642d9",
  videoCollectionId: "667fb1b40001c5a84f48",
  storageId: "667fb3f2001e0f769e90",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

// just an example
export const createUser = () => {
  account.create(ID.unique(), "me@joyboy.com", "alahalah", "Agung Enjoy").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
