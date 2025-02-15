import { openDB } from "idb";

const DB_NAME = "conference-db";
const STORE_NAME = "formData";
const DB_VERSION = 2;

// Open IndexedDB instance
export const getDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
        console.log("Created object store 'formData'");
      }
    },
  });
};

// Save data to IndexedDB
export const saveToIndexedDB = async (data) => {
  try {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    await store.put({ id: 1, ...data }); // Always overwrite with id = 1
    await tx.done;
    console.log("Data saved to IndexedDB:", data);
  } catch (error) {
    console.error("Error saving to IndexedDB:", error);
  }
};

// Load data from IndexedDB
export const loadFromIndexedDB = async () => {
  try {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const data = await store.get(1); // Get the latest saved data (id = 1)
    return data || {};
  } catch (error) {
    console.error("Error loading from IndexedDB:", error);
    return {};
  }
};
