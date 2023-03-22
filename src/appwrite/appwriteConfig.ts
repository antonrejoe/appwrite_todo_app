
import { Client, Account, Databases } from "appwrite";

import { v4 as uuidv4 } from "uuid"



const client = new Client();
export const account = new Account(client);


// we we are setting the end point refer notion
client
    .setEndpoint("http://localhost/v1")  // this thing just to points to me that's all
    .setProject("641868f49fa640c47513");



const databases = new Databases(client);

