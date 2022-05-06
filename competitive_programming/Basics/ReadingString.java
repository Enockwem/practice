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
    }
}