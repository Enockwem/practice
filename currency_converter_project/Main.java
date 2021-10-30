package currency_converter_project;

import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.util.Arrays;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;
import javax.swing.WindowConstants;
import javax.swing.plaf.ColorUIResource;


public class Main{
   private JFrame frame;
   private JLabel lblMessage,label2, label3;
   private JTextField textField;
   private JLabel lbl1;
   private JComboBox<String> comboBox;
   private JComboBox<String> comboBox2;
   private String froEnum;
   private String toEnum;
   public static void main(String[] args) {
      EventQueue.invokeLater(new Runnable(){
         public void run(){
            try{
               Main window = new Main();
               window.frame.setVisible(true);
            }catch(Exception e){
               e.printStackTrace();
            }
         }
      });
   }
   /**
    * Creating the application in the constructor below
    */
   Main(){
      initialize();
   }
   /**
    * Initialize the contents of the frame
    */
   private void initialize(){
      // FlowLayout flowlayout = new FlowLayout();
      // final String[] currString = {"DOLLAR","UG","KSHS","POUND","BD","KWD","EURO", "CDOLLAR"};
      final String[] currString = {"Select the currency",Currency.UGX.toString(),Currency.DOLLAR.toString(),Currency.POUND.toString(),
         Currency.EURO.toString(),Currency.CDOLLAR.toString(),Currency.KSHS.toString(),
         Currency.KWD.toString(),Currency.BHD.toString()};
      final List<String> currency = Arrays.asList(Arrays.copyOfRange(currString, 1, 9));
      frame = new JFrame();
      frame.setTitle("Currency Converter");
      frame.setBounds(200, 200, 200, 200);
      frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
      frame.getContentPane().setLayout(null);
      
      lbl1 = new JLabel("*** Welcome to the currency converter system ***");
      lbl1.setBounds(140*3,50,700,50);
      lbl1.setFont(new Font("Tahoma",Font.BOLD,20));
      frame.getContentPane().add(lbl1);

      JButton btnConvert = new JButton("Convert");
      btnConvert.addActionListener(new ActionListener(){
         @Override
         public void actionPerformed(ActionEvent arg0) {
            if(currency.contains(froEnum) && currency.contains(toEnum)){
               if(textField.getText().isEmpty()){
                  lblMessage.setText("The textField is empty, Fill in the amount you want to convert");
               }else{
                  lblMessage.setText(toEnum+": "+Converter.convertMoney(froEnum, toEnum, Double.parseDouble(textField.getText().strip())));
               }
            }else{
               lblMessage.setText("Currency not select");
            }
         }
         
      });
      btnConvert.setForeground(new ColorUIResource(140, 190, 120));
      btnConvert.setBackground(Color.lightGray);
      btnConvert.setFont(new Font("Tahoma",Font.BOLD,12));
      btnConvert.setBounds(140*5,200,90,20);
      frame.getContentPane().add(btnConvert);
      /**
       * This field accepts the amount the user wants to convert to another currency.
       */
      textField = new JTextField();
      textField.setBounds(140*5,100,100,30);
      frame.getContentPane().add(textField);
      textField.setColumns(10);
      // Adding a label to the screen.
      lblMessage = new JLabel("Value");
      lblMessage.setBounds(140*5,150,400,50);
      frame.getContentPane().add(lblMessage);
      /**
       * Creating a comboBox containing the different currencies that 
       * can be converted to and fro.
       */
       label2 = new JLabel("From");
       label2.setBounds(200,100,70,30);
       frame.getContentPane().add(label2);


       comboBox = new JComboBox<>(currString);
       comboBox.setSelectedIndex(0);
       comboBox.setMaximumRowCount(10);
       comboBox.addItemListener(new ItemListener(){
         @Override
         public void itemStateChanged(ItemEvent arg0) {
           if(arg0.getStateChange() == ItemEvent.SELECTED){
            if(comboBox.getSelectedItem().toString().equals("Select the currency")){
               label2.setText("From");
               // label2.setFont("Tahoma",Font.BOLD,12);
            }else{
               froEnum = comboBox.getSelectedItem().toString();
               label2.setText(froEnum);
            }
           }
         }
       });
       comboBox.setBounds(280,100,100,50);
       frame.getContentPane().add(comboBox);

       /**
       * Creating another comboBox containing the different currencies that 
       * can be converted to and fro.
       */

       label3 = new JLabel("To");
       label3.setBounds(200, 200, 30, 30);
       frame.getContentPane().add(label3);
      comboBox2 = new JComboBox<>(currString);
      comboBox2.setSelectedIndex(0);
      comboBox2.setMaximumRowCount(10);
      comboBox2.addItemListener(new ItemListener(){
         @Override
         public void itemStateChanged(ItemEvent arg0) {
            if(arg0.getStateChange() == ItemEvent.SELECTED){
               if(comboBox2.getSelectedItem().toString().equals("Select the currency")){
                  label3.setText("To");
               }else{
                  toEnum = comboBox2.getSelectedItem().toString();
                  label3.setText(toEnum);
               }
            }
         }
         
      });
      comboBox2.setBounds(280,200,100,50);
      frame.getContentPane().add(comboBox2);
   }
}
