# HP-35 Emulator Project

![HP-35 Scientific Calculator](http://hpmemoryproject.org/pict/wall_b/hp35.jpg)

The HP-35 was Hewlett-Packard's first pocket calculator and the world's first scientific pocket calculator. Read more on [Wikipedia](https://en.wikipedia.org/wiki/HP-35).

## Project Assignment

The goal of this project is to reverse engineer the functionality of the HP 35 calculator as a React application.

Optionally, the base HP-35 functionality may be enhanced with (portions of) the functionality of the later and more advanced, programmable HP-25 calculator, or, taking it even further, the capabilities of current HP graphing calculators.

## Reverse Engineering the HP-35

The best way to understand how the HP-35 works is to read the user manual and experiment with an HP Scientific Calculator emulator in [RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation) mode. Although there is no emulator for the original HP-35, there are free HP Prime Calculator apps for Android, iOS, Windows and Mac. The functionality of these apps is a superset of that of the original HP-35 but the base functionality is available and all emulators can be configured to operate in RPN mode (the only mode available on the original HP-35).

### RPN stack

You'll find some hints on how to elegantly handle the RPN stack in your application state [here](https://github.com/remarcmij/calculator-project-class8/blob/master/RPN%20stack.md).

### Standardized execute

In order to enable cross-project unit tests and programmability we need the various projects to standardize on the way the calculator functions can be invoked.
This is documented [here](https://github.com/remarcmij/calculator-project-class8/blob/master/Standarized%20execute.md).

### Rydberg test

Your calculator should be able to compute the Rydberg constant from a number of fundamental physical constants. Please refer to [_Rydberg constant_](https://github.com/remarcmij/calculator-project-class8/blob/master/Rydberg%20constant.md) for full details.

### HP-35 Instruction Manual

http://www.cs.columbia.edu/~sedwards/hp35colr.pdf

### HP-25 Instruction Manual

http://sliderulemuseum.com/Calculators/HP-25_OwnersHandbook.pdf

### Free HP Prime Apps

- [For Android](https://play.google.com/store/apps/details?id=com.hp.primecalculator.free) (Google Play)
- [For iOS](https://itunes.apple.com/us/app/hp-prime-free/id1208226883?mt=8) (App Store)
- For Windows and Mac: ftp://ftp.hp.com/pub/calculators/Prime/
- [HP Prime Manual](http://h10032.www1.hp.com/ctg/Manual/c04773072) (for Windows version)


## Technologies and Concepts

The following technologies and concepts are expected to be used for this project:

- React
- Styled Components
- OOP
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) (computation vs presentation)
- Unit testing

### Orthogonality

>Orthogonality is a critical concept if you want to produce systems that are easy to design, build, test, and extend. However, the concept of orthogonality is rarely taught directly. Often it is an implicit feature of various other methods and techniques you learn. This is a mistake. Once you learn to apply the principle of orthogonality directly, you'll notice an immediate improvement in the quality of systems you produce. What Is Orthogonality? "Orthogonality" is a term borrowed from geometry. Two lines are orthogonal if they meet at right angles, such as the axes on a graph. In vector terms, the two lines are independent. Move along one of the lines, and your position projected onto the other doesn't change.
>
>In computing, the term has come to signify a kind of independence or decoupling. Two or more things are orthogonal if changes in one do not affect any of the others. In a well-designed system, the database code will be orthogonal to the user interface: you can change the interface without affecting
>
>Source: Hunt, Andrew. _The Pragmatic Programmer._ Pearson Education. Kindle Edition.


![hardware illustration](./docs/assets/hardware.jpg)