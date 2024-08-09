import java.util.Scanner;

public class App {

    public static void panel() {

        Scanner sc = new Scanner(System.in);

        while (true) {

            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Exit");

            int userChoice = sc.nextInt();

            switch (userChoice) {

                case 1 -> {
                    System.out.println("Enter login and password to register");
                    String userLogin = sc.next();
                    String userPassword = sc.next();
                    SQLConnection.register(userLogin, userPassword);
                }
                case 2 -> {
                    System.out.println("Enter login and password to login");
                    String userLogin = sc.next();
                    String userPassword = sc.next();
                    SQLConnection.logging(userLogin, userPassword);
                }
                case 3 -> {
                    sc.close();
                    System.out.println("Leaving");
                    System.exit(0);
                }
            }
        }
    }
}
