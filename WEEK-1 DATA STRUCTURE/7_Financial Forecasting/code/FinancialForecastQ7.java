public class FinancialForecastQ7 {

    public static double financast(double currentValue, double growthRate, int Years) {
        if (Years == 0) {
            return currentValue;
        }
        return (1 + growthRate) * financast(currentValue, growthRate, Years - 1);
    }
    public static void main(String[] args) {
        double currentValue = 1000;      
        double growthRate = 0.07;         
        int Years = 11;

        double futureValue = financast(currentValue, growthRate, Years);
        System.out.printf("Future value after %d years: %.2f\n", Years, futureValue);
    }
}
