import java.io.*;
import java.util.*;

class LetterInitialDemo{
    public static void main(String[] args) throws IOException{
        LetterInitials letter = new LetterInitials();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // Tell the use to enter a there names.
        System.out.println("Hello, hope you are doing well.");
        System.out.println("What is your Name(enter all your names): ");
        
        String[] names = br.readLine().split(" ");
        String[] initials = new String[names.length];
        int i = 0;
        for(String a: names){
            initials[i] = "initial_"+a.charAt(i);
            i++;
        }

        for(String p: initials){
            System.out.println(p);
            // How to list all the methods in a given class instance created in the main method.
        }
    }
}