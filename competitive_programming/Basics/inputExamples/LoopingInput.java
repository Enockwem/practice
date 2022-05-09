import java.io.*;
class LoopingInput{
    public static void main(String[] args){
        // When the number of input is unknown
        // then using a loop is better.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        // Now, open the loop to recieve the input.
        System.out.println("Enter the names of students you know? ");
        String line;
        while(line=br.readLine().equals("")){
            System.out.println(line);
        }
    }
}