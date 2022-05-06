// System.out is a byte stream for the PrintStream
// Though the most common output method is the 'println' and the 'print'
class WriteDemo{
    public static void main(String[] args){
        int a;
        a = 'A';
        System.out.write(a);
        System.out.write('\n');
    }
}