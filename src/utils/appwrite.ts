import { Client, Databases, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('6729992c003d8683e67f'); // Replace with your project ID

const databases = new Databases(client);
const storage = new Storage(client);

export { client, databases, storage };
