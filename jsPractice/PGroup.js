class PGroup {
  // Your code here
  "use strict";
  constructor(){
    this.group = [];
  }

  add(item){
    // You have to first check whether the item is in the group
    if(!this.group.includes(item)){
      this.group.push(item);
      let pg = new PGroup();
      pg.group = [...this.group];
      return pg;
    }
  }

  delete(item){
    if(this.group.includes(item)){
      let pg = new PGroup();
      const newArr = this.group.filter(element => element != item);
      this.group = newArr;
      pg.group = [...newArr];
      return pg;
    }
  }

  has(item){
    return this.group.includes(item);
  }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
// SyntaxError: Unexpected identifier 'a'
// The most convenient way to represent the set of member values is still as an array since arrays are easy to copy.

// When a value is added to the group, you can create a new group with a copy of the original array that has the value added (for example, using concat). When a value is deleted, you filter it from the array.

// The class’s constructor can take such an array as argument and store it as the instance’s (only) property. This array is never updated.

// To add a property (empty) to a constructor that is not a method, you have to add it to the constructor after the class definition, as a regular property.

// You need only one empty instance because all empty groups are the same and instances of the class don’t change. You can create many different groups from that single empty group without affecting it.
