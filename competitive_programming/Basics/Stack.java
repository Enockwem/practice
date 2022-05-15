class Stack{
    public int[] stck;
    public int top;

    // Below is the constructor of the Stack class
    Stack(int size){
        top = -1;
        stck = new int[size];
    }

    // pop() method for the stack class.
    void pop(){
        if(isEmpty())return;
        else top--;
    }

    // push() method that pushes and item to the top of the stack.
    void push(int item){
        if(stck.length == top) return;
        stck[top++] = item;
    }

    // This method checks whether the stack is actually empty.
    boolean isEmpty(){
        if(top == -1) return true;
        else return false;
    }

    // This method checks whether the array used to store the stack is actually full.
    boolean isFull(){
        if(top == stck.length) return true;
        else return false;
    }

    // This method is gonna used to display the items in a stack.
    void display(){
        for(int i: stck){
            System.out.println(i);
        }
    }
}

class TestStack{
    public static void main(String[] args){
        int size = 4;
        Stack stack = new Stack(size);


        for(int i = 0; i < 4; i++){
            stack.push(i*2);
        }

        stack.display();
    }
}