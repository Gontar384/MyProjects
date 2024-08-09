import java.sql.*;
import java.util.Scanner;

public class SQLConnection {


    public static Connection getConnection() throws SQLException {
        String url = "jdbc:mysql://localhost:3306/shop";
        String user = "root";
        String password = "20024062";

        return DriverManager.getConnection(url, user, password);
    }

    public static void register(String login, String password) {
        String insertQuery = "INSERT INTO users (login, password) VALUES (?, ?)";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(insertQuery)){
            ps.setString(1, login);
            ps.setString(2, password);
            ps.executeUpdate();

            System.out.println("You registered successfully!");

        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void logging(String userLogin, String userPassword){
        String selectQuery = "SELECT * FROM users WHERE login = ? ";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(selectQuery)){
            ps.setString(1, userLogin);
            ResultSet rs = ps.executeQuery();
            while (rs.next()){
            String password = rs.getString("password");
            if (password.equals(userPassword.trim())){
                System.out.println("You logged in!");
            }
            else {
                System.out.println("Wrong password!");
            }
            }
        }catch (SQLException e){
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void retrieve () {
        String selectQuery = "SELECT * FROM users";
        try (Connection conn = getConnection();
             PreparedStatement ps = conn.prepareStatement(selectQuery);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                int id = rs.getInt("id");
                String login = rs.getString("login");
                String password = rs.getString("password");
                System.out.println("ID: " + id + "\n" +
                        "Login: " + login + "\n" +
                        "Password: " + password);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
