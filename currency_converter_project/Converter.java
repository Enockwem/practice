package currency_converter_project;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.ArrayList;

import java8.Person;

/**
 * This class has methods that convert from one currency to another.
 * @author WASSWA ENOCK MALE
 */
public class Converter{
   public static  double convertMoney(String from, String to, double amount){
      double[] currency_value_in_uganda_shillings = {3556.88, 4888.29, 4122.02, 2873.20, 31.96, 11779.67, 9427.25};
      String[] value = {Currency.UGX.toString(),Currency.DOLLAR.toString(),Currency.POUND.toString(),
                              Currency.EURO.toString(),Currency.CDOLLAR.toString(),Currency.KSHS.toString(),
                              Currency.KWD.toString(),Currency.BHD.toString()};
      List<String> currencyArr = Arrays.asList(value);
      if(Objects.equals(from, Currency.UGX.toString())){
         int index_value_to = currencyArr.indexOf(to) - 1;
         return (amount/currency_value_in_uganda_shillings[index_value_to]);
      }else if(Objects.equals(to, Currency.UGX.toString())){
         int index_value_from = currencyArr.indexOf(from) - 1;
         return (amount * currency_value_in_uganda_shillings[index_value_from]);
      }else{
         int index_value_from = currencyArr.indexOf(from) - 1;
         // System.out.println(currency_value_in_uganda_shillings[index_value_from]);
         double toUgx = amount*currency_value_in_uganda_shillings[index_value_from];
         int index_value_to = currencyArr.indexOf(to) - 1;
         // System.out.println(currency_value_in_uganda_shillings[index_value_to]);
         return toUgx/currency_value_in_uganda_shillings[index_value_to];
      }
   }

   List<Person> loadPeople(File file) throws IOException{
      BufferedReader br = new BufferedReader(new FileReader(file));
      List<Person> list = new ArrayList<>();
      String line;
      while((line = br.readLine())!=null){
         String[] l = line.strip().split(" ");
         list.add(new Person(l[0],l[1],Integer.parseInt(l[2]), l[3],l[4]));
      }
      br.close();
      return list;
   }
}
