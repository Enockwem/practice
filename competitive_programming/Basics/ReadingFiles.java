import java.io.*;
class ReadingFiles{
    public static void main(String[] args) throws IOException{
        int i;
        FileInputStream fin;
        String name;
        String filename = "./text_files/names.txt";

        try{
            fin = new FileInputStream(filename);
        }catch(Exception e){
            System.out.println("File not found!");
            return;
        }

        // Read characters of the file until the EOF character is encountered.
        System.out.println(fin.read());
    }
}