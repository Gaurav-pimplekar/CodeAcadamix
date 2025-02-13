import { FaArrowCircleRight, FaCode, FaClipboardList, FaExclamationTriangle } from 'react-icons/fa';

const JsChap28 = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-semibold mb-4">JavaScript Features Explained</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. The let Keyword</h2>
        <p>The <code>let</code> keyword is used to declare variables that can be reassigned later. It has block scope, unlike <code>var</code> which has function scope.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`let a = 5;
a = 10;
console.log(a);  // Outputs: 10`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. The const Keyword</h2>
        <p>The <code>const</code> keyword is used to declare constants, which cannot be reassigned after their initial value is set. Like <code>let</code>, it has block scope.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const b = 5;
b = 10;  // This will throw an error`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Arrow Functions</h2>
        <p>Arrow functions provide a shorter syntax for writing functions. They also don't bind their own <code>this</code> context.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const add = (a, b) => a + b;
console.log(add(2, 3));  // Outputs: 5`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. The {`{a,b}`} = Operator (Destructuring)</h2>
        <p>Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a, b);  // Outputs: 1 2`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. The [a,b] = Operator (Array Destructuring)</h2>
        <p>Array destructuring allows you to assign variables to elements of an array.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const arr = [1, 2];
const [a, b] = arr;
console.log(a, b);  // Outputs: 1 2`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. The ... Operator (Spread/Rest)</h2>
        <p>The <code>...</code> operator has two main uses: the spread operator (to spread an iterable object) and the rest parameter (to collect remaining arguments).</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  // Spread operator
console.log(arr2);  // Outputs: [1, 2, 3, 4]`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. For/Of Loop</h2>
        <p>The <code>for...of</code> loop is used to iterate over iterable objects (arrays, strings, maps, etc.).</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);  // Outputs: 1 2 3
}`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Map Objects</h2>
        <p><code>Map</code> objects store key-value pairs where both keys and values can be any data type. They preserve the insertion order of the keys.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1'));  // Outputs: value1`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Set Objects</h2>
        <p><code>Set</code> objects store unique values of any type and ensure that each value is only stored once.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const set = new Set();
set.add(1);
set.add(2);
set.add(1);  // Duplicate value will be ignored
console.log(set);  // Outputs: Set { 1, 2 }`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Classes</h2>
        <p>JavaScript classes are a way to create reusable blueprints for creating objects. Classes provide a more structured way to handle object-oriented programming in JavaScript.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log('Hello, ' + this.name);
  }
}

const person1 = new Person('John', 25);
person1.greet();  // Outputs: Hello, John`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">11. Promises</h2>
        <p>Promises represent the completion (or failure) of an asynchronous operation. They allow chaining of operations using <code>.then()</code> and <code>.catch()</code> for error handling.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Operation successful');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">12. Symbol</h2>
        <p><code>Symbol</code> is a primitive value used to create anonymous and unique identifiers for object properties.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`const sym = Symbol('description');
console.log(sym);  // Outputs: Symbol(description)`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">13. Default Parameters</h2>
        <p>Default parameters allow you to assign default values to function parameters if no argument is passed.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
greet();  // Outputs: Hello, Guest`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">14. Function Rest Parameter</h2>
        <p>The <code>...rest</code> parameter allows a function to accept any number of arguments as an array.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));  // Outputs: 10`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">15. String.includes()</h2>
        <p>The <code>includes()</code> method checks if a string contains a certain substring.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`let str = 'Hello, world!';
console.log(str.includes('world'));  // Outputs: true`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">16. String.startsWith()</h2>
        <p>The <code>startsWith()</code> method checks if a string starts with a certain substring.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`let str = 'Hello, world!';
console.log(str.startsWith('Hello'));  // Outputs: true`}
        </pre>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">17. String.endsWith()</h2>
        <p>The <code>endsWith()</code> method checks if a string ends with a certain substring.</p>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-200 p-4 rounded-md">
          {`let str = 'Hello, world!';
console.log(str.endsWith('world!'));  // Outputs: true`}
        </pre>
      </section>

      {/* Add more sections for the rest of the topics */}
      
    </div>
  );
};

export default JsChap28;
