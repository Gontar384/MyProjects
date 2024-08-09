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
        HashMap<String,String> monthsMap = new HashMap<>();
        monthsMap.put("1","Jan"); monthsMap.put("01","Jan"); monthsMap.put("january", "Jan"); monthsMap.put("jan", "Jan");
        monthsMap.put("2","Feb"); monthsMap.put("02","Feb"); monthsMap.put("february", "Feb"); monthsMap.put("feb", "Feb");
        monthsMap.put("3","Mar"); monthsMap.put("03","Mar"); monthsMap.put("march", "Mar"); monthsMap.put("mar", "Mar");
        monthsMap.put("4","Apr"); monthsMap.put("04","Apr"); monthsMap.put("april", "Apr"); monthsMap.put("apr", "Apr");
        monthsMap.put("5","May"); monthsMap.put("05","May"); monthsMap.put("may", "May");
        monthsMap.put("6","Jun"); monthsMap.put("06","Jun"); monthsMap.put("june", "Jun"); monthsMap.put("jun", "Jun");
        monthsMap.put("7","Jul"); monthsMap.put("07","Jul"); monthsMap.put("july", "Jul"); monthsMap.put("jul", "Jul");
        monthsMap.put("8","Aug"); monthsMap.put("08","Aug"); monthsMap.put("august", "Aug"); monthsMap.put("aug", "Aug");
        monthsMap.put("9","Sep"); monthsMap.put("09","Sep"); monthsMap.put("september", "Sep"); monthsMap.put("sep", "Sep");
        monthsMap.put("10","Oct"); monthsMap.put("october", "Oct"); monthsMap.put("oct", "Oct");
        monthsMap.put("11","Nov"); monthsMap.put("november", "Nov"); monthsMap.put("nov", "Nov");
        monthsMap.put("12","Dec"); monthsMap.put("december", "Dec"); monthsMap.put("dec", "Dec");

        System.out.println("Enter month");
        String userMonth = monthsMap.get(sc.nextLine().toLowerCase());

        List<Task> taskStream = tasks.stream()
                .filter(task -> task.getMonth().equals(userMonth))
                        .toList();

            for (Task task : taskStream) {
                System.out.println(task);
            }

        if (taskStream.isEmpty()){
            System.out.println("There is no tasks in " + userMonth);
        }
    }
}

