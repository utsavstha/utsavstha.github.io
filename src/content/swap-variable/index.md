---
title: 'Swap two numbers without using a temporary variable'
date: '2019-01-09T22:12:03.284Z'
---

Can you remember what was the first program you wrote? It was probably the famous print "Hello world" :D. Okay then what was the second one? addition? subtraction? I know third one was definitely swap two numbers. The traditional (usually the only) method to do that is

```c
int x = 10;
int y = 5;
int temp = 0;

temp = x;
x    = y;
y    = temp;
```
Looks fine, there is absolutely no problem doing this. But have you ever wondered is there a way to accomplish this without a temporary variable? Well look no further :D

```c
int x = 10, y = 5; 
  
x = x + y;  // x now becomes 15 
y = x - y;  // y becomes 10 
x = x - y;  // x becomes 5 
```

That's all. I was blown the first time I saw this, so simple and elegant :D. First thing that hit me of was, "why the hell did I not think of this? :D "

Here are a few implementations for this in different programming languages

##C
```c
#include <stdio.h> 
int main() 
{ 
  int x = 10, y = 5; 
  
  // Code to swap 'x' and 'y' 
  x = x + y;  // x now becomes 15 
  y = x - y;  // y becomes 10 
  x = x - y;  // x becomes 5 
  
  printf("After Swapping: x = %d, y = %d", x, y); 
  
  return 0; 
} 
```

##JAVA

```java
import java.*; 
  
class Geeks { 
  
    public static void main(String a[]) 
    { 
        int x = 10; 
        int y = 5; 
        x = x + y; 
        y = x - y; 
        x = x - y; 
        System.out.println("After swaping:"
             + " x = " + x + ", y = " + y); 
    } 
} 
```

##PHP

```php
<?php 
$x = 10; $y = 5; 
  
// Code to swap 'x' and 'y' 
$x = $x + $y; // x now becomes 15 
$y = $x - $y; // y becomes 10 
$x = $x - $y; // x becomes 5 
  
echo "After Swapping: x = ",  
       $x, "," , "y = ", $y; 
  
?> 
```

##PYTHON
```py
x = 10
y = 5
     
# x now becomes 15 
x = x + y   
  
# y becomes 10 
y = x - y  
  
# x becomes 5 
x = x - y   
print("After Swapping: x =",x ," y =", y)
```

##C SHARP

```cs
using System; 
  
class GFG { 
public static void Main() 
    { 
        int x = 10; 
        int y = 5; 
        Console.WriteLine("Before swap:"); 
        Console.WriteLine("x value: " + x); 
        Console.WriteLine("y value: " + y); 
        x = x + y; 
        y = x - y; 
        x = x - y; 
        Console.WriteLine("After swap:"); 
        Console.WriteLine("x value: " + x); 
        Console.WriteLine("y value: " + y); 
    } 
}
```