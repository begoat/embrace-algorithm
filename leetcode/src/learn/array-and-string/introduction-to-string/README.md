### Immutable String - Problems & Solutions

#### Tips:
* You should be aware of the time complexity of these built-in operations.

* For instance, if the length of the string is N, the time complexity of both finding operation and substring operation is O(N).

* Also, in languages which the string is immutable, you should be careful with the concatenation operation (we will explain this in next article as well).

* Never forget to take the time complexity of built-in operations into consideration when you compute the time complexity for your solution.

#### Immutable String
```java
public class Main {
    public static void main(String[] args) {
        String s = "";
        int n = 10000;
        for (int i = 0; i < n; i++) {
            s += "hello";
        }
    }
}
```

In Java, since the string is immutable, concatenation works by first allocating enough space for the new string, copy the contents from the old string and append to the new string.

Therefore, the time complexity in total will be:

   5 + 5 × 2 + 5 × 3 + … + 5 × n
= 5 × (1 + 2 + 3 + … + n)
= 5 × n × (n + 1) / 2,

which is O(n2).

#### Solution
1. **If you did want your string to be mutable, you can convert it to a char array.**
2.  If you have to concatenate strings often, it will be better to use some other data structures like StringBuilder. The below code runs in O(n) complexity.

#### reference:
  * https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1184/