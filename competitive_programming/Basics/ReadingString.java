import java.io.*;
import java.util.*;
class ReadingString{
    public static void main(String[] args) throws IOException{
        String name, song, stop;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        ArrayList names = new ArrayList<String>(); // This will store hte names of people entered.
        ArrayList songs = new ArrayList<String>(); // This will store the name of the song the user wants to listen to.

        // Reading the string from the BufferedReader.
        do{
            System.out.println("Enter your name: ");
            name = br.readLine();
            System.out.println("Enter the song that you want to listen to: ");
            song = br.readLine();
            System.out.println("Enter 'stop' if you want to quit the program");
            stop = br.readLine();
            names.add(name);
            songs.add(song);
        }while(!stop.equals("stop"));

        // Print the names entered with the corresponding songs that the users requested for.
        if(names.size() == songs.size()){
            for(int i = 0; i < names.size(); i++){
                System.out.println(names.get(i) + " requested for a song called "+ songs.get(i));
            }
        }

        // Now ask of the listeners to write the lyrics of the song that they requested for.
        // For the start, we will always choose the listen that called in first.
        String text;
        ArrayList lyrics = new ArrayList<String>();
        int i = 0;
        System.out.println("So, now we are going into the lyrics session.");
        System.out.println("Please, "+names.get(0)+" right in the spaces below the first 10 lines of song that you requested to listen to: ");
        System.out.println("Or type 'stop' if you want to stop and quite the program.");
        do{
           text = br.readLine();
           if(text.equals("stop")){
               break;
           }
           lyrics.add(text);
           i++;
        }while(i <= 10);
        
        // Message to display after
        if(i == 9){
            // Thank the user for being patient and completing the whole process.
            System.out.println("Thanks for being patient and completing the whole process.");
            System.out.println("You have given the first 10 lyrical lines of the song that you requested for.");
            System.out.println("This is how the song goes.");
            for(Object lyric : lyrics){
                System.out.println(lyric);
            }
        }
    }
}