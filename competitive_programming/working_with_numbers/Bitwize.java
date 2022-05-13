/**
    This program is aimed at learning and practicing Bitwize operators in programming.
    For this particular program, I am using Java programming language.
 */
class Bitwize{
    public static void main(String[] args){
        // Looking at the Bitwize operators, they include; ~, ^, |, &
        // int a = 3;
        // int b = 4;
        // int c = 5;
        // a |= c;
        // System.out.println("Bitwise NOT operator(~a) ->"+(~a)); // This Bitwise 'NOT' operator, inverts each bit of the original bit.
        // System.out.println("Bitwise 'AND' or \"&\" operator ie (5&65) -> "+(c&b)); // The Bitwise 'and' returns a '1' iff the two operands are a '1'
        // System.out.println("Bitwise 'OR' or \"|\" operator ie (5|65->"+(c|b)); // This Bitwise 'OR' returns a '1' iff any of the tow operands is a '1'
        // System.out.println("Bitwise 'exclusive OR' or \"^\" operator ie (5^65)->"+(c^b)); // The Bitwise 'exclusive OR' returns a 1 if only one of the two operands is a one.
        // System.out.println(a);
        // System.out.println(10|9);

        /** I want to try the program with a boolean example */
        boolean a = false;
        boolean b = true;
        System.out.println(!a^b);
        System.out.println(a^!b);
        System.out.println(a^b);
        System.out.println(a|b);
        System.out.println(a&b);
        // System.out.println((~a));



         
    }
}