import java.util.Arrays;
import java.util.Comparator;

public class SearchExample {

    
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    
    public static Product binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);
            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Chair", "Furniture"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Phone", "Electronics"),
            new Product(105, "Table", "Furniture")
        };
        System.out.println("Linear Search:");
        Product found1 = linearSearch(products, "Phone");
        System.out.println(found1 != null ? found1 : "Product not found");
        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        System.out.println("\nBinary Search:");
        Product found2 = binarySearch(products, "Phone");
        System.out.println(found2 != null ? found2 : "Product not found");
    }

        
       
}
