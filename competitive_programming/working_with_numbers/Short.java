class Short{
    public static void main(String[] args){
        int c = 10;
        int e = 0;
        int demon = 9;
        int num = 81;
        boolean ration = demon == 9 ? 0:num/demon;
        if(demon != 0 && num / demon > 10){
            System.out.println("This is  a short-circuit operator");
        }else{
            System.out.println("The condition was not favoring so much");
        }

        if(c == 10 & e++ < 10)System.out.println("This is cool for sure.");
    }
}