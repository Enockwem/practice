class Test{
    int a, b;
    Test(int i, int j){
        a = i;
        b = j;
    }

    // pass an object to the method.
    void meth(Test o){
        // This method only creates the new values for the parameters passed in the method.
       o.a *= 2;
       o.b /= 2;
    }
}

// Another class within the same file.
class CallByRef{
    public static void main(String[] args){
        Test test = new Test(15, 20);
        System.out.println("a and b before call: "+test.a+" "+test.b);

        // call the method meth in the test class
        test.meth(test);

        System.out.println("a and b after call: "+ test.a+" "+test.b);        
    }
}