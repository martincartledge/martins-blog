---
title: Sorting Data in Go
date: "2020-04-26T22:40:32.169Z"
description: "Learning Go - Week 10"
---

This is the fifth entry of my weekly series _Learning Go_. Last week I covered a few more pieces of the `Slice` and `Map` type. This week I will be talking about the `Struct` and `Interface` types.

This is the tenth entry of my weekly series _Learning Go_. Last week I talked about [Pointers, Marshalling, and Unmarshalling Data in Go](). This week I will be talking about how to sort your data in a Go Program. Let's get to it.

I will be showing you multiple examples of how to sort your data, these examples can be grouped into two catagories:

- using the `sort` package
- writing custom sorting functions

## Using the `sort` Package

- Can be used with built-in types (`string`, `int`, etc), as well as user-defined types
- Sorting happens "in-place". Changes to a `slice`, for example, would not return a new `slice`
- Much like the `array` method `sort` in JavaScript, the `sort` package in Go compares the ascii values for `string` sorting

Let's try sorting a `string`:

```go
package main

import (
	"fmt"
	"sort"
)

func main() {
	str := []string{"c", "a", "b"}

	sort.Strings(str)

	fmt.Println(str)
	// [a, b, c]
}
```

```go
str := []string{"c", "a", "b"}
```

Inside of our `func` `main` we create a new variable with the identifier `str`

The value of `str` is a `slice` of values that are of type `string`. We use a _composite literal_ to assign those values

```go
sort.Strings(str)
```
We then use the `sort` package to invoke the `Strings` method and pass the `str` variable as the only arugment

> Note: the `sort` methods are specific to their built-in type i.e. `string` -> `Strings`, `int` -> `Ints`, etc.

```go
fmt.Println(str)
// [a, b, c]
```
We use the `fmt` package to print the result, and we can see that the value of `str` has now been properly sorted

Let me show you an example of sorting values of type `int`

```go
package main

import (
	"fmt"
	"sort"
)

func main() {
	ints := []int{4, 1, 9, 3, 8}

	sort.Ints(ints)

	fmt.Println(ints)
	// [1, 3, 4, 8, 9]
}
```

Inside of our `func` `main` we create a new variable with the identifier `ints`

The value of `ints` is a `slice` of values that are of type `int`. We use a *composite literal* to assign those values

```go
sort.Ints(ints)
```
We then use the `sort` package to invoke the `Ints` method and pass the `ints` variable as the only argument

```go
fmt.Println(ints)
// [1, 3, 4, 8, 9]
```
We use the `fmt` package to print the result, and we can see that the value of `ints` has now been properly sorted

But what if you need something a little more in-depth, or customized? Well, you can certianly do that with ease in Go. Let me show you some examples of some custom sorting functions that can add a lot of value to your programs.

## Custom Sort Functions
