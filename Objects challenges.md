Day 7 — Objects and arrays of objects: complete challenge catalogue
Topics: object creation, property access, nested objects, dynamic keys, lists of records, search, filtering, updates, and ranking.

Objects basics
1. Create and access — Easy
Context: Objects use key–value pairs and dot notation reads a property.
Description: Declare one object named person with exactly two properties: name (a string) and age (a number). Use dot notation to print only the name value, not the entire object.
Sample output:

Sara
2. Update a property — Easy
Context: A property can be changed without recreating the entire object.
Description: Start with let car = { brand: "Toyota" }. Update the existing brand property directly; do not create a second object. Finally print the changed object.
Sample output:

{ brand: "Honda" }
3. Add a new property — Easy
Context: Assigning to a missing key creates that property.
Description: Start with let book = { title: "JS Basics" }. Add a new numeric property named price with the value 20, keep the original title, then print the final object.
Sample output:

{ title: "JS Basics", price: 20 }
4. Bracket notation basics — Easy
Context: Bracket notation is required when a property name comes from a variable.
Description: Declare let key = "age" and let user = { age: 25 }. Read the property using the variable as the key—use user[key], not user.key—and print the result.
Sample output:

25
5. Check property existence — Medium
Context: The in operator checks whether an object owns or inherits a named property.
Description: Given let item = { name: "Pen" }, use the in operator to test whether the object contains a property called "price". Print the boolean result.
Sample output:

false
6. Delete a property — Medium
Context: The delete keyword removes a property from an object.
Description: Given let user = { name: "Sara", temp: "remove me" }, remove only the temp property using delete. Print the object afterward and verify that name remains.
Sample output:

{ name: "Sara" }
7. Nested access — Medium
Context: Nested objects require one property access for each level.
Description: Given a car object whose specs property is another object, navigate through both levels with dot notation and print only the nested color value.
Sample output:

blue
8. Build an object from variables — Medium
Context: Property shorthand works when the variable name matches the desired key.
Description: Declare separate variables name = "Omar" and age = 22. Build a person object containing those values under the same property names, preferably using property shorthand, then print it.
Sample output:

{ name: "Omar", age: 22 }
9. Dynamic key access in a loop — Hard
Context: Loop through known keys and use bracket notation to read their values.
Description: Create scores = { math: 90, art: 70, sport: 85 } and subjects = ["math", "art", "sport"]. Loop over subjects; for each subject, use bracket notation to print its name and matching score.
Sample output:

math 90
art 70
sport 85
10. Compare object properties — Hard
Context: Objects are compared property by property when checking their contents.
Description: Given objects a and b, compare a.x with b.x and a.y with b.y. Combine both comparisons with &&, then print one boolean showing whether both properties match.
Sample output:

false
11. Conditionally update a nested property — Hard
Context: Conditions can protect updates to values nested inside objects.
Description: Given product = { name: "Shoe", stock: { quantity: 5 } }, check the nested quantity first. Decrease it by one only when it is greater than zero; never allow a negative stock quantity.
Sample output:

4
12. Build and validate a profile — Extreme
Context: Data validation checks both the type and validity of every required field.
Description: Create a profile with name, age, email, and isActive. Write isValidProfile(profile) that returns true only when name is a non-empty string, age is a number greater than zero, and isActive is a boolean. Use typeof and combine every required check with &&.
Sample output:

true
Arrays of objects
13. Access a field in the first record — Easy
Context: First access the array index, then the object property.
Description: Given an array containing at least two student objects, access index 0 first and then its name property. Print the name only.
Sample output:

Sara
14. Loop and print all names — Easy
Context: Each array element is an object whose properties can be read inside a loop.
Description: Loop through the complete student array by index. On each iteration, access the current object’s name property and print one name per line.
Sample output:

Sara
Omar
15. Print two fields per record — Easy
Context: One loop iteration can read several properties of the same object.
Description: Loop through an array of product objects. For every product, print its name and price together on one line; do not print the raw object.
Sample output:

Pen 5
Book 20
16. Count records — Easy
Context: The array's .length counts records, regardless of their object structure.
Description: Given any array of objects, print its number of records using the array’s .length property. The solution must still work if records are added or removed.
Sample output:

3
17. Find a record by exact match — Medium
Context: A search function may return the entire matching object or null.
Description: Write findById(list, id). Loop through list, compare each record’s id with the target, and immediately return the entire matching object. If no record matches, return null.
Sample output:

{ id: 2, name: "Omar" }
18. Sum a numeric field — Medium
Context: The accumulator pattern works with object properties as well as raw numbers.
Description: Given product objects with a numeric price, start a total at zero and add every product’s price in one loop. Print the final total only after the loop finishes.
Sample output:

35
19. Filter records by a boolean field — Medium
Context: Build a new array by pushing records whose boolean property is true.
Description: Given product objects containing a boolean inStock property, create a new array. Loop over every product and push only those currently in stock into the result; leave the original array unchanged.
Sample output:

[{ name: "Pen", inStock: true }]
20. Find the youngest student — Medium
Context: Use the minimum-value pattern, comparing each student's age.
Description: Given a non-empty array of students with age, start with the first student as the current youngest. Compare every remaining age and replace the candidate when a smaller age is found, then print the whole youngest student object.
Sample output:

{ name: "Sara", age: 18 }
21. Update a specific record — Hard
Context: Find a matching object in a loop and update its property directly.
Description: Loop through an array of products until a record has name === "Pen". Increase that record’s quantity by 10 directly, leave all other products unchanged, then print the updated Pen record or complete array.
Sample output:

{ name: "Pen", quantity: 15 }
22. Count records matching a condition — Hard
Context: Combine an object-property comparison with a counter.
Description: Start a counter at zero. Loop through all student records and increase the counter only when student.age >= 20; print the final count after the loop.
Sample output:

2
23. Find the record with the highest value and its index — Hard
Context: Track both the best record and its position whenever a larger property value is found.
Description: Given a non-empty product list with prices, track both the current most expensive object and its index. Whenever a higher price appears, update both values, then print the selected object and its final position.
Sample output:

{ name: "Book", price: 20 }
1
24. Build a mini leaderboard — Extreme
Context: Create a sorted result manually by repeatedly selecting the highest remaining score; do not use .sort().
Description: Given player objects with name and score, return a new array containing only names from highest score to lowest. Do not use .sort(). Make a copy so the original list is not changed, repeatedly select the highest unused score, and add that player’s name to the result.
Sample output:

["Sara", "Omar", "Lina"]
DAY7_OBJECTS_ARRAYS_OF_OBJECTS_ALL_CHALLENGES.md
10 Ko