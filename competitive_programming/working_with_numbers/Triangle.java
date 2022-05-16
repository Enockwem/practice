
/**
    This program prints the triangle using esterics and forcusing
    on the use of labelling the break and continue statements in java loops.
    @author WASSWA ENOCK MALE
 */
class Triangle{
    public static void main(String[] args){
        outer: for(int i = 1; i < 10; i ++){
            for(int j = 1; j<10; j++){
                if(j==i){
                    System.out.println();
                    continue outer;
                }
                System.out.print(" * ");
            }
            System.out.println();
        }
    }
}