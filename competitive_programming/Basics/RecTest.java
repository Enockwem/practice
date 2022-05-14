class Recursion{
    int values[];

    Recursion(int i){
        values = new int[i];
    }

    // displace method using the recursion method.
    void printArray(int i){
        if(i == 0) return;
        else printArray(i-1);
        System.out.println("[" + (i-1)+ "]: " + values[i-1]);
    }
}

// Below, I have created a class called RecTest.
class RecTest{
    public static void main(String[] args){
        Recursion ob = new Recursion(10);
        int i;
        for(i = 0; i < 10; i++) ob.values[i] = i;

        ob.printArray(10);
    }
}