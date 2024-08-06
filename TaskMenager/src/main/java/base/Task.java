package base;


public class Task {

    String name;
    String time;
    String month;

    public Task(String name, String time, String month) {
        this.name = name;
        this.time = time;
        this.month = month;
    }

    public String getMonth() {
        return month;
    }

    @Override
    public String toString() {
        return "Name: " + name + "\n" + "Time: " + time;
    }
}
