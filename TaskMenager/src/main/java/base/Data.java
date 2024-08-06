package base;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;



public class Data {

    Scanner sc = new Scanner(System.in);

    String name;
    String time;
    String month;

    List<Task> tasks = new ArrayList<>();
    Calendar cal = Calendar.getInstance();
    String[]months = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
    String[]weekDays = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

    public void addTask(){
        try {
        System.out.println("Enter description");
        name = sc.nextLine();

        System.out.println("Enter dd/MM HH:mm");
        String dateInput = sc.nextLine();
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM HH:mm");

            Date date = dateFormat.parse(dateInput);

            if (date != null){
                cal.setTime(date);
                cal.set(Calendar.YEAR, 2024);
                }

//            time = dateFormat.format(cal.getTime());    format - dd/MM HH:mm

            time = cal.get(Calendar.HOUR_OF_DAY) + ":" +
                    cal.get(Calendar.MINUTE) + " " +
                    months[cal.get(Calendar.MONTH)] + " " +
                    cal.get(Calendar.DAY_OF_MONTH) + " (" +
                    weekDays[cal.get(Calendar.DAY_OF_WEEK)-1] + ")";

            month = months[cal.get(Calendar.MONTH)];

            Task task = new Task(name, time, month);
            tasks.add(task);

            } catch (ParseException e) {
                System.out.println("Enter date correctly!");
            }
    }

    public void displayTasks(){
        System.out.println();
        tasks
                .forEach(task -> System.out.println(task+"\n"));

        if (tasks.isEmpty()){
            System.out.println("There are no tasks to show");
            System.out.println();
        }
    }

    public void removing(){
        System.out.println("Enter task name to remove");
        String remove = sc.nextLine();
        int temp = tasks.size();
        tasks.removeIf(task -> task.name.equals(remove));
        if (temp == tasks.size()){
            System.out.println("There is no such task");
        }
        else {
            System.out.println("Task '" + remove + "' has been removed");
        }
    }

    public void byMonth(){

        System.out.println("Enter month");
        String userMonth = sc.nextLine();


        if (userMonth.equals("1") || userMonth.equals("01") || userMonth.equals("january") ||
                userMonth.equals("January") || userMonth.equals("jan") || userMonth.equals("Jan") ){
            userMonth = "Jan";
        }
        if (userMonth.equals("2") || userMonth.equals("02") || userMonth.equals("february") ||
                userMonth.equals("February") || userMonth.equals("feb") || userMonth.equals("Feb") ){
            userMonth = "Feb";
        }
        if (userMonth.equals("3") || userMonth.equals("03") || userMonth.equals("march") ||
                userMonth.equals("March") || userMonth.equals("mar") || userMonth.equals("Mar") ){
            userMonth = "Mar";
        }
        if (userMonth.equals("4") || userMonth.equals("04") || userMonth.equals("april") ||
                userMonth.equals("April") || userMonth.equals("apr") || userMonth.equals("Apr") ){
            userMonth = "Apr";
        }
        if (userMonth.equals("5") || userMonth.equals("05") || userMonth.equals("may") ||
                userMonth.equals("May") ){
            userMonth = "May";
        }
        if (userMonth.equals("6") || userMonth.equals("06") || userMonth.equals("june") ||
                userMonth.equals("June") || userMonth.equals("jun") || userMonth.equals("Jun") ){
            userMonth = "Jun";
        }
        if (userMonth.equals("7") || userMonth.equals("07") || userMonth.equals("july") ||
                userMonth.equals("July") || userMonth.equals("jul") || userMonth.equals("Jul") ){
            userMonth = "Jul";
        }
        if (userMonth.equals("8") || userMonth.equals("08") || userMonth.equals("august") ||
                userMonth.equals("August") || userMonth.equals("aug") || userMonth.equals("Aug") ){
            userMonth = "Aug";
        }
        if (userMonth.equals("9") || userMonth.equals("09") || userMonth.equals("september") ||
                userMonth.equals("September") || userMonth.equals("sep") || userMonth.equals("Sep") ){
            userMonth = "Sep";
        }
        if (userMonth.equals("10") ||  userMonth.equals("october") ||
                userMonth.equals("October") || userMonth.equals("oct") || userMonth.equals("Oct") ){
            userMonth = "Oct";
        }
        if (userMonth.equals("11") ||  userMonth.equals("november") ||
                userMonth.equals("November") || userMonth.equals("nov") || userMonth.equals("Nov") ){
            userMonth = "Nov";
        }
        if (userMonth.equals("12") ||  userMonth.equals("december") ||
                userMonth.equals("December") || userMonth.equals("dec") || userMonth.equals("Dec") ){
            userMonth = "Dec";
        }

        String finalUserMonth = userMonth;
        List<Task> taskStream = tasks.stream()
                .filter(task -> task.getMonth().equals(finalUserMonth))
                        .toList();

            for (Task task : taskStream) {
                System.out.println(task);
            }

        if (taskStream.isEmpty()){
            System.out.println("There is no tasks in " + userMonth);
        }
    }
}

