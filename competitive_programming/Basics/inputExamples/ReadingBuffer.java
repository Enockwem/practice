import java.io.*;
class ReadingBuffer{
    public static void main(String[] args)throws IOException{
        char c;
        String k;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter characters, 'q' to quit: ");
        // Read characters.
        do{
            c = (char) br.read();
            System.out.println(c);
        }while(c != 'q');
    }
}