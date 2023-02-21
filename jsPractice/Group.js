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
        return this.group.includes(value);
    }

    static from(obj){
        let grp = new Group();
        for(const ob of obj){
            grp.add(ob);
        }

        return grp;
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false