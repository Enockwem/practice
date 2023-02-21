class Group{
    constructor(){
        this.group = [];
    }

    add(value){
        if(this.group.length === 0){
            this.group.push(value);
        }else{
            if(this.group.indexOf(value) !== -1){
                this.group.push(value);
            }
        }
    }

    delete(value){
        if(this.group.indexOf(value) != -1){
            // remove it
            const index = this.group.indexOf(value);
            this.group = this.group.filter(element => element != value);
        }else{
            console.error("It is not a member of the group");
        }
    }

    has(value){
        return true?this.group.indexOf(value) !== -1: false;
    }

    static from(obj){
        let grp = new Group();
        for(const ob of obj){
            grp.add(ob);
        }

        return grp;
    }
    get length(){
        // This can help return the length of the group;
        return 0;
    }
}

// Creating an iterator class.
class GroupIterator{
    constructor(group){
        this.index = 0;
        this.group = group;
    }

    next(){
        if(this.index == this.group.group.length) return {done:true};

        let value = this.group.group.at(this.index);
        this.index++;
        return {value, done:false};
    }
}

// Now let's make the Group class iteratable
Group.prototype[Symbol.iterator] = function(){
    return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }