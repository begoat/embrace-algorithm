### Two-pointer Technique

In the previous chapter, we solve some problems by iterating the array. Typically, we only use one pointer starting from the first element and ending at the last one to do iteration. However, sometimes, we might need to use two pointers at the same time to do the iteration.

#### Summary
* To summarize, one of the typical scenarios to use two-pointer technique is that you want to
  > Iterate the array from two ends to the middle.

  > And it is worth noting that this technique is often used in a sorted array.

* This is a very common scenario of using the two-pointer technique when you need:
  > One slow-runner and one fast-runner at the same time.

  > The key to solving this kind of problems is to **Determine the movement strategy for both pointers.**

  > Similar to the previous scenario, you might sometimes need to sort the array before using the two-pointer technique. And you might need a greedy thought to determine your movement strategy.