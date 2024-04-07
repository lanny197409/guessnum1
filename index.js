import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        
        int min = 1;
        int max = 100;
        
        System.out.println("Welcome to the Number Guessing Game!");
        System.out.println("Think of a number between 1 and 100, and I'll try to guess it.");
        System.out.println("Once I make a guess, let me know if it's too low, too high, or correct.");
        System.out.println("Enter 'c' if my guess is correct.");
        
        boolean guessedCorrectly = false;
        
        while (!guessedCorrectly) {
            int guess = random.nextInt(max - min + 1) + min;
            System.out.println("Is your number " + guess + "?");
            System.out.print("Enter 'l' if it's too low, 'h' if it's too high, or 'c' if it's correct: ");
            String feedback = scanner.nextLine().toLowerCase();
            
            switch (feedback) {
                case "l":
                    min = guess + 1;
                    break;
                case "h":
                    max = guess - 1;
                    break;
                case "c":
                    guessedCorrectly = true;
                    System.out.println("Yay! I guessed it!");
                    break;
                default:
                    System.out.println("Invalid input. Please enter 'l', 'h', or 'c'.");
            }
        }
        
        scanner.close();
    }
}
