//hashtable with seperate chaining to handle collusion
class HashTable {
  constructor(size) {
    this.data = Array(size);
  }

  //return a hash value between 0 and ( this.data.length - 1 )
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  //unique key !, if the same key override with nthe nwe value
  set(key, value) {
    let index = this._hash(key);

    if (!this.data[index]) {
      this.data[index] = [];
    } else {
      for (let i = 0; i < this.data[index].length; i++) {
        //chech if the key exists
        if (this.data[index][i][0] == key) {
          this.data[index][i][1] = value;
          return;
        }
      }
    }
    this.data[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.data[index]) return undefined;
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] == key) {
        return this.data[index][i][1];
      }
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (!!this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.data.length; i++) {
      if (!!this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j][1]);
        }
      }
    }
    return values;
  }
}

let hashTable = new HashTable(3);
hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
hashTable.set("key3", "value3");
hashTable.set("key4", "value4");
hashTable.set("key5", "value5");

console.log(JSON.stringify(hashTable));
console.log(hashTable.keys());
console.log(hashTable.values());
console.log(hashTable.get("key3"));
hashTable.set("key3", "value3 updated");
console.log(hashTable.get("key3"));
console.log(hashTable.keys());
console.log(hashTable.values());
