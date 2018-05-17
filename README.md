# Change Generator
A project set up and TDD exercise.

## Task
Write a program that, given a value (e.g. £8.99) and a set of banknotes (e.g. £5 + £5) calculates the denomination of change due (in this case, 1 x £1 + 1 x 1p.

## Approach
A strict TDD approach.

The following is an example I of intended functionality.

```
> cg = new ChangeGenerator('10p','5p');
> cg.returnChange();
< [2, 2, 1]
> formatter = new Formatter([2, 2, 1]);
< 2 x 2p + 1 x 1p
```