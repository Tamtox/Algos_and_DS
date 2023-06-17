// Hash table - is a data structure that uses hash functions to map keys to values of array for quick access.

// Hash function - is a function that takes an input and returns a fixed-size number.
// Hash functions are used in hash tables, to quickly locate a data record (e.g., a dictionary definition) given its search key (the headword).
// Hash function has to be deterministic - for a given input it should always return the same output.

class HashTable<K, V> {
  private table: { [key: string]: V } = {};

  public put(key: K, value: V): void {
    const hashedKey = this.hash(key);
    this.table[hashedKey] = value;
  }

  public get(key: K): V | undefined {
    const hashedKey = this.hash(key);
    return this.table[hashedKey];
  }

  public remove(key: K): void {
    const hashedKey = this.hash(key);
    delete this.table[hashedKey];
  }

  private hash(key: string): string {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return String(hashValue);
  }
}

// Hash table collisions - are when two keys get mapped to the same index in an array.
