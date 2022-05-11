/**
  * This program is implementing a simple program that calculates the area of a circle using the 
  * TextIO java library to get user input.
  * @author Wasswa Enock Male
 */
 import java.io.*;
 import static lang.java.Math;
class TextInput{
    public static void main(String[] args){
        // Declare the variables here
        double radius;
        double area;

        // Here, I declared and initialized the value of the 'pi'
        double pi = 3.14;
        // Using the TextIO to allow a user input the radius
        TextIO.put("Enter the radius of the circle: ");
        radius = TextIO.getInDouble();

        // Now calculate the area of the circle.
        area = pi * Math.pow(radius,2);
        TextIO.put("The area of the circle is "+area);
    }
}