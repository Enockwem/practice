/**This program shows how to use the labeled break statement.
    @author WASSWA ENOCK MALE
 */
class LabeledBreak{
    public static void main(String[] args){
        outer: for(int i = 0; i < 3; i++){
            System.out.println("Outer i "+ i);
            for(int j = 1; j < 100; j ++){
                System.out.println("Inner j "+j);
                if(j == 10) break outer;
                // if(j == 10) continue outer;
            }
        }
    }
}