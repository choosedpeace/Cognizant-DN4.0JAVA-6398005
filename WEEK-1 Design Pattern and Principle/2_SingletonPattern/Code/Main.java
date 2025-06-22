public class Main {
    public static void main(String[] args) {
        Logger Ch1 = Logger.getInstance();
        Ch1.log("First log message");

        Logger Ch2 = Logger.getInstance();
        Ch2.log("Second log message");

        if (Ch1 == Ch2) {
            System.out.println("Same instance used. Singleton confirmed.");
        } else {
            System.out.println("Different instances. Singleton failed.");
        }
    }
}
