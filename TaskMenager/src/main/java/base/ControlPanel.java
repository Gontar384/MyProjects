package base;

import java.util.Scanner;

public class ControlPanel {
    public static void panel(){
        Scanner sc = new Scanner(System.in);
        int userChoice;
        Data data = new Data();

        System.out.println("Welcome to task menager!");
        System.out.println("Press number to: ");

        while (true){

            System.out.println("1. Add task");
            System.out.println("2. Remove task");
            System.out.println("3. Show tasks by month");
            System.out.println("4. Show all tasks");
            System.out.println("5. Exit");

            userChoice = sc.nextInt();

            switch(userChoice){
                case 1 -> data.addTask();
                case 2 -> data.removing();
                case 3 -> data.byMonth();
                case 4 -> data.displayTasks();
                case 5 -> {
                    System.out.println("Leaving app");
                    sc.close();
                    System.exit(0);
                }
            }
        }
    }
}
