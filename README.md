# AYA

1. You have to group the below words by having the same letter but different position
    
    - Given these 15 words

        ````
        ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']
        ````

    - Create a function that print something like

        ````
        ALEXIS - XISELA
        AMOR - ROMA - OMAR - MORA - RAMO - ARMO - MARO - ORAM
        MONJA - JAMON - MOJAN
        ESPONJA - JAPONES
        ````

    - Coding Result

        ![image](https://user-images.githubusercontent.com/88071882/202830643-07cd57ba-d6a0-4cd1-8fe5-713b36651ca2.png)


2. You have to remove the parentheses and reverse the word inside.

    ````
    foo(bar) => foorab
    (bar) => rab

    foo(bar)blim => foorabblim
    foo(foo(bar))blim => foobaroofblim
    ````

    - Coding Result

        ![image](https://user-images.githubusercontent.com/88071882/202830610-1120f51f-93d5-4827-8393-b9fdf5bf86e1.png)


3. Write a function that would return the Nth largest element from start or the end (default from the end) in an array, and then provide a set of test cases against that function.


    ````
    - Note: That is the Nth largest element in the sorted order, not the Nth distinct element.
    Given [3,2,1,5,6,4], n = 2, from = end, return 5
    ````

    - Coding Result

        ```
        5
        1
        6
        6
        ```


4. Write a function that would: arrange an array of positive integers to form the largest number or the smallest number. (default largest)


    ````
    - Note: Return a string instead of an integer in case the result is too large.
    For example, given [2, 20, 24, 6, 8], type = largest, the largest formed number is 8624220.
    ````

    - Coding Result

        ```
        8624220
        2022468
        ```
