import java.io.*;
class PrintWriterDemo{
    public static void main(String[] args){
        PrintWriter pw = new PrintWriter(System.out, true);
        pw.println("This is a string.");
        int i = -7;
        pw.println(i);
        double d = 4.5e-7;
        System.out.println("I have worked well as a medical person");
    }
}