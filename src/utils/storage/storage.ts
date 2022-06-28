import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_SUFFIX = 'FREETIMEHUNTER_APP::';
function keyWithSuffix(key: string): string {
  return STORAGE_SUFFIX.concat(key);
}

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(keyWithSuffix(key));
    __DEV__ && console.log(`dataStoreLoad:${value}`);
    return Promise.resolve(value);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(keyWithSuffix(key), value);
    __DEV__ && console.log(`dataStoreSave:${value}`);
    return Promise.resolve(true);
  } catch {
    return Promise.reject(false);
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function loadObject(key: string): Promise<any | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(keyWithSuffix(key));
    __DEV__ && console.log(`dataStoreLoad:${jsonValue}`);
    return jsonValue != null ? Promise.resolve(JSON.parse(jsonValue)) : null;
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveObject(key: string, value: any): Promise<boolean> {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(keyWithSuffix(key), jsonValue);
    __DEV__ && console.log(`dataStoreSave:${jsonValue}`);
    return Promise.resolve(true);
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string): Promise<boolean> {
  try {
    await AsyncStorage.removeItem(keyWithSuffix(key));
    return Promise.resolve(true);
  } catch {
    return false;
  }
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<boolean> {
  try {
    await AsyncStorage.clear();
    return Promise.resolve(true);
  } catch {
    return false;
  }
}
