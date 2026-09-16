
/* ============================= DATA ============================= */
const LANGUAGES = [
  {
    id: "html-css",
    name: "HTML &amp; CSS",
    plainName: "HTML & CSS",
    group: "foundations",
    tag: ["web"],
    color: "#e2653e",
    tagline: "The structure and style underneath every website, native app webview, and email template.",
    why: "Frameworks change, but they all compile down to HTML and CSS eventually. Modern CSS (container queries, `:has()`, native nesting, `color-mix()`) has closed most of the gaps that used to require JavaScript or a preprocessor — knowing plain CSS well in 2026 means writing less code, not more.",
    lessonLinks: [
      { label: "HTML5 Master Lecture", url: "Lessons/html.html", icon: "🌐" },
      { label: "CSS3 Styling Lecture", url: "Lessons/css.html", icon: "🎨" }
    ],
    levels: {
      basic: {
        explain: "HTML describes structure using semantic elements — <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;button&gt;</code> — instead of generic <code>&lt;div&gt;</code>s wherever possible. CSS then styles that structure using selectors, the box model (margin, border, padding, content), and simple color/typography rules.",
        code:
`<!-- index.html -->
<button class="btn">Subscribe</button>

<style>
  .btn {
    padding: 10px 18px;
    background: #1b4fd1;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
  }
  .btn:hover {
    background: #123a9e;
  }
</style>`,
        task: {
          prompt: "Build a simple profile card: a heading with a name, a paragraph with a one-line bio, and a styled button labeled \"Message\". Give the card a border, rounded corners, and some padding.",
          starter:
`<div class="card">
  <!-- add heading, bio, and button here -->
</div>

<style>
  .card {
    /* add border, border-radius, padding here */
  }
</style>`,
          solution:
`<div class="card">
  <h3>Amara Chen</h3>
  <p>Frontend developer building accessible interfaces.</p>
  <button class="btn">Message</button>
</div>

<style>
  .card {
    max-width: 280px;
    padding: 20px;
    border: 1px solid #dde9f9;
    border-radius: 12px;
    font-family: sans-serif;
  }
  .btn {
    padding: 8px 14px;
    background: #1b4fd1;
    color: white;
    border: none;
    border-radius: 6px;
  }
</style>`
        }
      },
      intermediate: {
        explain: "Flexbox handles one-dimensional layout (a row or a column that needs to align and distribute space); Grid handles two-dimensional layout (rows and columns together). Media queries then adapt that layout per screen size — this is the core of responsive design.",
        code:
`.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

@media (max-width: 700px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}`,
        task: {
          prompt: "Build a navbar with a logo on the left and three links on the right, laid out with Flexbox. On screens narrower than 600px, stack the links underneath the logo instead.",
          starter:
`<nav class="nav">
  <span class="logo">Brand</span>
  <div class="links">
    <a href="#">Home</a>
    <a href="#">Docs</a>
    <a href="#">Contact</a>
  </div>
</nav>

<style>
  .nav {
    /* flex layout here */
  }
</style>`,
          solution:
`<style>
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
  }
  .links { display: flex; gap: 18px; }

  @media (max-width: 600px) {
    .nav { flex-direction: column; align-items: flex-start; gap: 10px; }
  }
</style>`
        }
      },
      advanced: {
        explain: "CSS custom properties (variables) let you build themeable components without a preprocessor. Combined with transitions and container queries, you can make a component that adapts to its own container's size — not just the viewport — and that respects a user's motion preferences.",
        code:
`.card {
  --accent: #1b4fd1;
  container-type: inline-size;
  border-radius: 12px;
  border: 1px solid var(--accent);
  transition: transform 0.2s ease;
}
.card:hover { transform: translateY(-4px); }

@container (min-width: 400px) {
  .card { display: grid; grid-template-columns: 120px 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
}`,
        task: {
          prompt: "Take the profile card from the Basic lesson and make it switch from a stacked layout to a side-by-side layout once its container is wider than 350px, using a container query. Add a subtle hover lift, respecting reduced-motion preferences.",
          starter:
`.card {
  container-type: inline-size;
  /* add hover + container query rules */
}`,
          solution:
`.card-wrapper { container-type: inline-size; }

.card {
  display: block;
  transition: transform 0.2s ease;
}
.card:hover { transform: translateY(-3px); }

@container (min-width: 350px) {
  .card { display: grid; grid-template-columns: 90px 1fr; gap: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
}`
        }
      }
    }
  },
  {
    id: "javascript",
    name: "JavaScript",
    plainName: "JavaScript",
    group: "web",
    tag: ["web"],
    color: "#1b4fd1",
    tagline: "The only language that runs natively in every browser — and, via React Native, in mobile apps too.",
    why: "JavaScript still powers the overwhelming majority of interactive websites, and its ecosystem (Node.js, React, React Native) means the same language reaches backend servers, browsers, and mobile apps. It's the most practical first language for anyone aiming at web or cross-platform mobile work.",
    levels: {
      basic: {
        explain: "Variables hold data (<code>let</code> for values that change, <code>const</code> for ones that don't). Functions package up reusable logic. The DOM API lets JavaScript read and change what's on the page in response to events like clicks.",
        code:
`const button = document.querySelector('#likeBtn');
let liked = false;

function toggleLike() {
  liked = !liked;
  button.textContent = liked ? 'Liked ♥' : 'Like';
}

button.addEventListener('click', toggleLike);`,
        task: {
          prompt: "Build a click counter: a button that shows how many times it has been clicked, starting at 0.",
          starter:
`const button = document.querySelector('#countBtn');
let count = 0;

button.addEventListener('click', function () {
  // update count and button text here
});`,
          solution:
`const button = document.querySelector('#countBtn');
let count = 0;

button.addEventListener('click', function () {
  count++;
  button.textContent = \`Clicked \${count} times\`;
});`
        }
      },
      intermediate: {
        explain: "Array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> transform data without manual loops. <code>async</code>/<code>await</code> makes asynchronous code — like a network request — read top to bottom instead of nesting callbacks.",
        code:
`async function loadProducts() {
  const res = await fetch('/api/products');
  const products = await res.json();

  const inStock = products
    .filter(p => p.stock > 0)
    .map(p => ({ name: p.name, price: p.price }));

  return inStock;
}`,
        task: {
          prompt: "Given an array of product objects (each with <code>name</code>, <code>price</code>, and <code>category</code>), write a function that returns only the names of products under $50 in the \"electronics\" category, using <code>filter</code> and <code>map</code>.",
          starter:
`const products = [
  { name: 'Earbuds', price: 39, category: 'electronics' },
  { name: 'Desk Lamp', price: 65, category: 'home' },
  { name: 'Charger', price: 19, category: 'electronics' },
];

function cheapElectronics(items) {
  // return an array of names only
}`,
          solution:
`function cheapElectronics(items) {
  return items
    .filter(p => p.category === 'electronics' && p.price < 50)
    .map(p => p.name);
}

// cheapElectronics(products) -> ['Earbuds', 'Charger']`
        }
      },
      advanced: {
        explain: "Classes and closures let you build small, reusable systems. A common pattern is the observer/pub-sub pattern: a central object that lets other parts of the app subscribe to events without knowing about each other directly.",
        code:
`class EventBus {
  #listeners = new Map();

  on(event, callback) {
    if (!this.#listeners.has(event)) this.#listeners.set(event, []);
    this.#listeners.get(event).push(callback);
  }

  emit(event, payload) {
    (this.#listeners.get(event) || []).forEach(cb => cb(payload));
  }
}

const bus = new EventBus();
bus.on('cart:add', item => console.log('Added', item));
bus.emit('cart:add', { name: 'Mug' });`,
        task: {
          prompt: "Write a <code>debounce(fn, delay)</code> higher-order function that returns a new function which only runs <code>fn</code> after <code>delay</code> ms have passed without it being called again — useful for a search input that shouldn't fire a request on every keystroke.",
          starter:
`function debounce(fn, delay) {
  // return a debounced version of fn
}`,
          solution:
`function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// const search = debounce(query => fetchResults(query), 300);
// input.addEventListener('input', e => search(e.target.value));`
        }
      }
    }
  },
  {
    id: "typescript",
    name: "TypeScript",
    plainName: "TypeScript",
    group: "web",
    tag: ["web"],
    color: "#2f6fe0",
    tagline: "JavaScript with a type system — the default choice for anything built at team scale in 2026.",
    why: "TypeScript compiles to plain JavaScript but catches whole categories of bugs before code ever runs. It's now the standard for serious frontend codebases (React, Angular, Vue all lean on it) and has overtaken plain JavaScript in professional new-project usage — worth learning right after JavaScript basics.",
    levels: {
      basic: {
        explain: "TypeScript adds type annotations to variables and functions, and <code>interface</code>s to describe the shape of objects. The compiler checks these before your code ever runs.",
        code:
`interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

function greet(user: User): string {
  return \`Hello, \${user.name}\`;
}

greet({ name: 'Mira', age: 29 }); // OK
greet({ name: 'Mira' }); // Error: missing 'age'`,
        task: {
          prompt: "Define a <code>CartItem</code> interface with <code>name</code> (string), <code>price</code> (number), and <code>quantity</code> (number). Write a function <code>total(items: CartItem[]): number</code> that returns the total cost.",
          starter:
`interface CartItem {
  // fields here
}

function total(items: CartItem[]): number {
  // sum price * quantity for each item
}`,
          solution:
`interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

function total(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}`
        }
      },
      intermediate: {
        explain: "Generics let a function or class work with any type while still being type-checked. Union types (<code>A | B</code>) describe a value that could be one of several shapes.",
        code:
`class Stack<T> {
  private items: T[] = [];

  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  get size(): number { return this.items.length; }
}

const numbers = new Stack<number>();
numbers.push(4);
numbers.push(7);`,
        task: {
          prompt: "Write a generic function <code>filterBy&lt;T&gt;(items: T[], predicate: (item: T) =&gt; boolean): T[]</code> that returns only the items matching the predicate — it should work for arrays of any type.",
          starter:
`function filterBy<T>(items: T[], predicate: (item: T) => boolean): T[] {
  // implement
}`,
          solution:
`function filterBy<T>(items: T[], predicate: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of items) {
    if (predicate(item)) result.push(item);
  }
  return result;
}

// filterBy([1,2,3,4], n => n % 2 === 0) -> [2, 4]`
        }
      },
      advanced: {
        explain: "Discriminated unions model state that can only be one thing at a time — like a network request that is loading, succeeded, or failed — and the compiler forces you to handle every case.",
        code:
`type RequestState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

function render(state: RequestState<string[]>): string {
  switch (state.status) {
    case 'loading': return 'Loading…';
    case 'success': return state.data.join(', ');
    case 'error': return \`Error: \${state.message}\`;
  }
}`,
        task: {
          prompt: "Model a simple login form's validation as a discriminated union with states <code>idle</code>, <code>submitting</code>, <code>valid</code>, and <code>invalid</code> (with a <code>reasons: string[]</code> field). Write a function that returns a status message for each state.",
          starter:
`type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  // add 'valid' and 'invalid' here

function statusMessage(state: FormState): string {
  // handle every case
}`,
          solution:
`type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'valid' }
  | { status: 'invalid'; reasons: string[] };

function statusMessage(state: FormState): string {
  switch (state.status) {
    case 'idle': return 'Ready to submit';
    case 'submitting': return 'Submitting…';
    case 'valid': return 'Looks good!';
    case 'invalid': return \`Fix: \${state.reasons.join(', ')}\`;
  }
}`
        }
      }
    }
  },
  {
    id: "python",
    name: "Python",
    plainName: "Python",
    group: "web",
    tag: ["web"],
    color: "#2f8f4e",
    tagline: "The most versatile general-purpose language — backend APIs, automation, and the backbone of AI tooling.",
    why: "Python consistently ranks as the most popular language overall in 2026 indexes, driven by AI/ML work, but it's also a serious choice for web backends (Django, FastAPI) that power both websites and the APIs mobile apps talk to. Readable syntax makes it a common first language too.",
    lessonLinks: [
      { label: "Python for Beginners (Full 13-Module Lecture)", url: "Lessons/python.html", icon: "🐍" }
    ],
    levels: {
      basic: {
        explain: "Python uses indentation instead of braces to define code blocks. Core building blocks: variables, <code>if</code>/<code>for</code>/<code>while</code>, functions with <code>def</code>, and built-in collections like lists and dictionaries.",
        code:
`def average(numbers):
    return sum(numbers) / len(numbers)

scores = [88, 92, 79, 95]
print(average(scores))  # 88.5`,
        task: {
          prompt: "Write a function <code>reverse_string(s)</code> that reverses a string without using Python's built-in <code>reversed()</code> or slicing shortcut (<code>s[::-1]</code>) — build it with a loop instead.",
          starter:
`def reverse_string(s):
    # build the reversed string with a loop
    pass`,
          solution:
`def reverse_string(s):
    result = ""
    for char in s:
        result = char + result
    return result

# reverse_string("hello") -> "olleh"`
        }
      },
      intermediate: {
        explain: "Classes bundle data and behavior together. List comprehensions build lists in one readable line. <code>try</code>/<code>except</code> handles errors without crashing the program.",
        code:
`class BankAccount:
    def __init__(self, balance=0):
        self.balance = balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount

acct = BankAccount(100)
try:
    acct.withdraw(150)
except ValueError as e:
    print(e)`,
        task: {
          prompt: "Build an <code>Inventory</code> class with a list of <code>items</code> (each a dict with <code>name</code> and <code>quantity</code>). Add a method <code>low_stock(threshold)</code> that returns the names of items with quantity below the threshold, using a list comprehension.",
          starter:
`class Inventory:
    def __init__(self, items):
        self.items = items

    def low_stock(self, threshold):
        # return list of names below threshold
        pass`,
          solution:
`class Inventory:
    def __init__(self, items):
        self.items = items

    def low_stock(self, threshold):
        return [item["name"] for item in self.items if item["quantity"] < threshold]

# Inventory([{"name": "Bolts", "quantity": 3}]).low_stock(5) -> ["Bolts"]`
        }
      },
      advanced: {
        explain: "Decorators wrap a function to add behavior without changing its code. Generators (<code>yield</code>) produce values lazily, one at a time, which is memory-efficient for large or paginated data.",
        code:
`import time
from functools import wraps

def timed(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = fn(*args, **kwargs)
        print(f"{fn.__name__} took {time.time() - start:.3f}s")
        return result
    return wrapper

@timed
def slow_add(a, b):
    time.sleep(0.1)
    return a + b`,
        task: {
          prompt: "Write a <code>memoize</code> decorator that caches a function's results by its arguments, so repeated calls with the same input skip recomputation.",
          starter:
`def memoize(fn):
    # store results in a dict keyed by args
    pass

@memoize
def slow_square(n):
    import time; time.sleep(0.2)
    return n * n`,
          solution:
`def memoize(fn):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = fn(*args)
        return cache[args]
    return wrapper

@memoize
def slow_square(n):
    import time; time.sleep(0.2)
    return n * n

# First call is slow, repeated calls with the same n are instant`
        }
      }
    }
  },
  {
    id: "swift",
    name: "Swift",
    plainName: "Swift",
    group: "mobile",
    tag: ["mobile"],
    color: "#f05138",
    tagline: "Apple's language for iOS, iPadOS, macOS, and watchOS apps — fast, safe, and built for SwiftUI.",
    why: "Swift remains the standard for native Apple-platform apps in 2026. SwiftUI has matured into the default way to build interfaces across every Apple device, and Swift's optionals and strict typing catch a huge class of bugs (like nil crashes) at compile time rather than in production.",
    levels: {
      basic: {
        explain: "<code>let</code> declares a constant, <code>var</code> a variable. Optionals (<code>Type?</code>) represent a value that might be missing, and must be safely unwrapped before use — this is Swift's core safety feature.",
        code:
`func firstLetter(of name: String?) -> String {
    guard let name = name, !name.isEmpty else {
        return "?"
    }
    return String(name.first!)
}

firstLetter(of: "Amara")  // "A"
firstLetter(of: nil)      // "?"`,
        task: {
          prompt: "Write a function <code>safeDivide(_ a: Double, by b: Double) -&gt; Double?</code> that returns <code>nil</code> instead of crashing when dividing by zero.",
          starter:
`func safeDivide(_ a: Double, by b: Double) -> Double? {
    // return nil when b == 0
}`,
          solution:
`func safeDivide(_ a: Double, by b: Double) -> Double? {
    guard b != 0 else { return nil }
    return a / b
}

// safeDivide(10, by: 2) -> Optional(5.0)
// safeDivide(10, by: 0) -> nil`
        }
      },
      intermediate: {
        explain: "Protocols define a contract that structs or classes can conform to — Swift favors this \"protocol-oriented\" style over deep class inheritance. Closures are inline functions you can pass around.",
        code:
`protocol Drawable {
    func area() -> Double
}

struct Circle: Drawable {
    var radius: Double
    func area() -> Double { .pi * radius * radius }
}

struct Rectangle: Drawable {
    var width: Double
    var height: Double
    func area() -> Double { width * height }
}

let shapes: [Drawable] = [Circle(radius: 3), Rectangle(width: 4, height: 5)]
let totalArea = shapes.reduce(0) { $0 + $1.area() }`,
        task: {
          prompt: "Define a protocol <code>Describable</code> with a method <code>describe() -&gt; String</code>. Make two structs (e.g. <code>Book</code> and <code>Movie</code>) conform to it, each returning a description string.",
          starter:
`protocol Describable {
    // add requirement
}

struct Book: Describable {
    var title: String
    // implement describe()
}`,
          solution:
`protocol Describable {
    func describe() -> String
}

struct Book: Describable {
    var title: String
    func describe() -> String { "Book: \\(title)" }
}

struct Movie: Describable {
    var title: String
    func describe() -> String { "Movie: \\(title)" }
}`
        }
      },
      advanced: {
        explain: "SwiftUI views are structs that describe UI declaratively. <code>@State</code> tracks local view state, and <code>async</code>/<code>await</code> handles asynchronous work like network calls cleanly inside a view's lifecycle.",
        code:
`struct ProfileView: View {
    @State private var name: String = "Loading…"

    var body: some View {
        Text(name)
            .task {
                name = await fetchProfileName()
            }
    }

    func fetchProfileName() async -> String {
        try? await Task.sleep(nanoseconds: 500_000_000)
        return "Amara Chen"
    }
}`,
        task: {
          prompt: "Build a SwiftUI view that shows \"Loading…\" then displays a list of mock item names after an async delay, using <code>@State</code> and <code>.task</code>.",
          starter:
`struct ItemsView: View {
    @State private var items: [String] = []

    var body: some View {
        // show a loading state, then the list
    }
}`,
          solution:
`struct ItemsView: View {
    @State private var items: [String] = []

    var body: some View {
        Group {
            if items.isEmpty {
                Text("Loading…")
            } else {
                List(items, id: \\.self) { item in
                    Text(item)
                }
            }
        }
        .task {
            try? await Task.sleep(nanoseconds: 500_000_000)
            items = ["Mug", "Notebook", "Charger"]
        }
    }
}`
        }
      }
    }
  },
  {
    id: "kotlin",
    name: "Kotlin",
    plainName: "Kotlin",
    group: "mobile",
    tag: ["mobile"],
    color: "#7f52ff",
    tagline: "Google's official language for Android — concise, null-safe, and interoperable with Java.",
    why: "Kotlin is the default choice for new Android development, and Kotlin Multiplatform is increasingly used to share business logic between Android, iOS, and web from a single codebase — making it relevant well beyond just Android in 2026.",
    levels: {
      basic: {
        explain: "<code>val</code> is a read-only reference, <code>var</code> is mutable. Kotlin's type system distinguishes nullable (<code>Type?</code>) from non-nullable types, and <code>when</code> is a more powerful version of <code>switch</code>.",
        code:
`fun parseIntOrDefault(text: String, default: Int): Int {
    return text.toIntOrNull() ?: default
}

fun describe(n: Int) = when {
    n < 0 -> "negative"
    n == 0 -> "zero"
    else -> "positive"
}

println(parseIntOrDefault("abc", 0)) // 0`,
        task: {
          prompt: "Write a function <code>safeParse(text: String): Int</code> that returns the parsed integer, or <code>-1</code> if the text isn't a valid number, using the elvis operator (<code>?:</code>).",
          starter:
`fun safeParse(text: String): Int {
    // use toIntOrNull() and ?:
}`,
          solution:
`fun safeParse(text: String): Int {
    return text.toIntOrNull() ?: -1
}

// safeParse("42") -> 42
// safeParse("nope") -> -1`
        }
      },
      intermediate: {
        explain: "Data classes auto-generate <code>equals</code>, <code>toString</code>, and more from their fields. Extension functions add new behavior to existing types without modifying them — commonly used with collection operations like <code>filter</code> and <code>map</code>.",
        code:
`data class Product(val name: String, val price: Double, val inStock: Boolean)

fun List<Product>.affordable(max: Double): List<String> =
    this.filter { it.inStock && it.price <= max }
        .map { it.name }

val catalog = listOf(
    Product("Mug", 9.99, true),
    Product("Lamp", 45.0, false)
)
println(catalog.affordable(20.0)) // [Mug]`,
        task: {
          prompt: "Create a data class <code>Task(val title: String, val done: Boolean)</code>. Write an extension function <code>List&lt;Task&gt;.pending(): List&lt;String&gt;</code> that returns titles of tasks not yet done.",
          starter:
`data class Task(val title: String, val done: Boolean)

fun List<Task>.pending(): List<String> {
    // filter + map
}`,
          solution:
`data class Task(val title: String, val done: Boolean)

fun List<Task>.pending(): List<String> =
    this.filter { !it.done }.map { it.title }

// listOf(Task("Ship report", false)).pending() -> ["Ship report"]`
        }
      },
      advanced: {
        explain: "Sealed classes model a fixed set of possible states — perfect for representing UI state — and coroutines handle async work. Jetpack Compose then reacts to state changes declaratively, similar to SwiftUI.",
        code:
`sealed class UiState {
    object Loading : UiState()
    data class Success(val items: List<String>) : UiState()
    data class Error(val message: String) : UiState()
}

@Composable
fun ItemsScreen(state: UiState) {
    when (state) {
        is UiState.Loading -> Text("Loading…")
        is UiState.Success -> LazyColumn {
            items(state.items) { Text(it) }
        }
        is UiState.Error -> Text("Error: \${state.message}")
    }
}`,
        task: {
          prompt: "Define a sealed class <code>UiState</code> with <code>Loading</code>, <code>Success(val data: String)</code>, and <code>Error(val message: String)</code>. Write a plain function <code>render(state: UiState): String</code> that returns the right message for each case using <code>when</code>.",
          starter:
`sealed class UiState {
    // define states
}

fun render(state: UiState): String {
    // when (state) { ... }
}`,
          solution:
`sealed class UiState {
    object Loading : UiState()
    data class Success(val data: String) : UiState()
    data class Error(val message: String) : UiState()
}

fun render(state: UiState): String = when (state) {
    is UiState.Loading -> "Loading…"
    is UiState.Success -> "Data: \${state.data}"
    is UiState.Error -> "Error: \${state.message}"
}`
        }
      }
    }
  },
  {
    id: "dart",
    name: "Dart &amp; Flutter",
    plainName: "Dart & Flutter",
    group: "mobile",
    tag: ["mobile", "web"],
    color: "#0acf83",
    tagline: "One codebase for iOS, Android, web, and desktop — Dart is the language, Flutter is the UI framework.",
    why: "Flutter has grown into one of the strongest cross-platform options in 2026, letting a single Dart codebase ship to mobile, web, and desktop with native-feeling performance. It's a practical choice when a team wants mobile and web reach without maintaining separate native codebases.",
    levels: {
      basic: {
        explain: "Dart syntax feels close to Java/JavaScript. It's null-safe by default (a type is non-nullable unless marked with <code>?</code>), and functions can take named parameters, which Flutter's widgets use constantly.",
        code:
`bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

void greet({required String name, String greeting = 'Hello'}) {
  print('\$greeting, \$name!');
}

greet(name: 'Amara'); // Hello, Amara!`,
        task: {
          prompt: "Write a function <code>isPrime(int n)</code> — shown above — then write <code>List&lt;int&gt; primesUpTo(int limit)</code> that returns all primes from 2 up to <code>limit</code> using it.",
          starter:
`bool isPrime(int n) {
  // implement
}

List<int> primesUpTo(int limit) {
  // use isPrime in a loop
}`,
          solution:
`bool isPrime(int n) {
  if (n < 2) return false;
  for (int i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

List<int> primesUpTo(int limit) {
  return [for (int i = 2; i <= limit; i++) if (isPrime(i)) i];
}

// primesUpTo(20) -> [2, 3, 5, 7, 11, 13, 17, 19]`
        }
      },
      intermediate: {
        explain: "Flutter UIs are built from widgets. <code>StatelessWidget</code>s render fixed content; <code>StatefulWidget</code>s hold mutable state via a <code>State</code> object and rebuild when <code>setState</code> is called.",
        code:
`class CounterPage extends StatefulWidget {
  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  int count = 0;

  void _increment() => setState(() => count++);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: \$count'),
        ElevatedButton(onPressed: _increment, child: Text('Add')),
      ],
    );
  }
}`,
        task: {
          prompt: "Build a <code>StatefulWidget</code> called <code>LikeButton</code> that toggles between \"Like\" and \"Liked ♥\" each time it's tapped, using <code>setState</code>.",
          starter:
`class LikeButton extends StatefulWidget {
  @override
  State<LikeButton> createState() => _LikeButtonState();
}

class _LikeButtonState extends State<LikeButton> {
  bool liked = false;

  @override
  Widget build(BuildContext context) {
    // return a button that toggles 'liked'
  }
}`,
          solution:
`class _LikeButtonState extends State<LikeButton> {
  bool liked = false;

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => setState(() => liked = !liked),
      child: Text(liked ? 'Liked ♥' : 'Like'),
    );
  }
}`
        }
      },
      advanced: {
        explain: "<code>FutureBuilder</code> and <code>StreamBuilder</code> connect async data directly to the widget tree, rebuilding automatically as data arrives — no manual state wiring needed. This is the foundation most state-management libraries (Provider, Riverpod, Bloc) build on top of.",
        code:
`FutureBuilder<List<String>>(
  future: fetchItems(),
  builder: (context, snapshot) {
    if (snapshot.connectionState == ConnectionState.waiting) {
      return Text('Loading…');
    }
    if (snapshot.hasError) {
      return Text('Error: \${snapshot.error}');
    }
    return Column(
      children: snapshot.data!.map((item) => Text(item)).toList(),
    );
  },
)`,
        task: {
          prompt: "Build a <code>StreamBuilder&lt;int&gt;</code> that listens to a counter <code>Stream</code> (emitting a new number every second) and displays the latest value, showing \"Waiting…\" until the first value arrives.",
          starter:
`Stream<int> counterStream() async* {
  int i = 0;
  while (true) {
    await Future.delayed(Duration(seconds: 1));
    yield i++;
  }
}

// build a StreamBuilder<int> using counterStream()`,
          solution:
`StreamBuilder<int>(
  stream: counterStream(),
  builder: (context, snapshot) {
    if (!snapshot.hasData) return Text('Waiting…');
    return Text('Count: \${snapshot.data}');
  },
)`
        }
      }
    }
  },
  {
    id: "react",
    name: "React.js",
    plainName: "React",
    group: "web",
    tag: ["web"],
    color: "#61dafb",
    tagline: "A JavaScript library for building user interfaces out of small, reusable components.",
    why: "React remains the most widely used UI library for web apps in 2026, and its component-and-hooks model carries directly over to React Native for mobile — learn the pattern once, apply it on both web and mobile.",
    levels: {
      basic: {
        explain: "React apps are built from components — functions that return JSX (HTML-like syntax in JavaScript). Data flows in through <code>props</code>, which are read-only from the component's point of view.",
        code:
`function Greeting({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Amara" />
      <Greeting name="Diego" />
    </div>
  );
}`,
        task: {
          prompt: "Build a <code>ProductCard</code> component that takes <code>name</code> and <code>price</code> props and renders them in a simple card layout.",
          starter:
`function ProductCard(props) {
  // render props.name and props.price
}`,
          solution:
`function ProductCard({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>\${price.toFixed(2)}</p>
    </div>
  );
}

// <ProductCard name="Mug" price={9.99} />`
        }
      },
      intermediate: {
        explain: "<code>useState</code> gives a component its own local, mutable state, and re-renders the component whenever that state changes. Event handlers (like <code>onClick</code>) update state in response to user input.",
        code:
`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`,
        task: {
          prompt: "Build a <code>LikeButton</code> component with a boolean <code>liked</code> state that toggles between \"Like\" and \"Liked ♥\" on click, using <code>useState</code>.",
          starter:
`function LikeButton() {
  const [liked, setLiked] = useState(false);
  // return a button that toggles 'liked' on click
}`,
          solution:
`function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? 'Liked ♥' : 'Like'}
    </button>
  );
}`
        }
      },
      advanced: {
        explain: "<code>useEffect</code> runs side effects — like fetching data — after render, and can clean up after itself. Custom hooks (functions starting with <code>use</code>) let you extract and reuse stateful logic across components.",
        code:
`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(url)
      .then(res => res.json())
      .then(json => { if (!cancelled) { setData(json); setLoading(false); } });
    return () => { cancelled = true; };
  }, [url]);

  return { data, loading };
}`,
        task: {
          prompt: "Use the <code>useFetch</code> hook above inside an <code>ItemsList</code> component: show \"Loading…\" while <code>loading</code> is true, then render the fetched items in a list.",
          starter:
`function ItemsList() {
  const { data, loading } = useFetch('/api/items');
  // render loading state, then the list
}`,
          solution:
`function ItemsList() {
  const { data, loading } = useFetch('/api/items');

  if (loading) return <p>Loading…</p>;

  return (
    <ul>
      {data.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}`
        }
      }
    }
  },
  {
    id: "nodejs",
    name: "Node.js",
    plainName: "Node.js",
    group: "backend",
    tag: ["web"],
    color: "#3c873a",
    tagline: "JavaScript running outside the browser — the runtime behind most JavaScript servers, CLIs, and build tools.",
    why: "Node lets a team share one language across frontend and backend. It's still the default runtime for JavaScript/TypeScript services in 2026, and almost every backend framework (Express, Fastify, NestJS) is built on top of it.",
    levels: {
      basic: {
        explain: "Node runs plain JavaScript files from the command line and adds built-in modules for things browsers don't do, like reading the filesystem. <code>require</code> (or <code>import</code> with ES modules) brings in other files or packages.",
        code:
`// count-lines.js
const fs = require('fs/promises');

async function countLines(path) {
  const text = await fs.readFile(path, 'utf8');
  return text.split('\\n').length;
}

countLines('notes.txt').then(n => console.log(\`\${n} lines\`));`,
        task: {
          prompt: "Write an async function <code>countWords(path)</code> that reads a text file and returns how many words it contains (splitting on whitespace).",
          starter:
`const fs = require('fs/promises');

async function countWords(path) {
  // read the file and count words
}`,
          solution:
`const fs = require('fs/promises');

async function countWords(path) {
  const text = await fs.readFile(path, 'utf8');
  return text.trim().split(/\\s+/).length;
}

// countWords('notes.txt').then(console.log)`
        }
      },
      intermediate: {
        explain: "The built-in <code>http</code> module can create a server without any framework — useful for understanding what frameworks like Express do underneath. Every request is handled by a callback that receives the request and response objects.",
        code:
`const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000);`,
        task: {
          prompt: "Extend the server above so <code>/time</code> responds with the current ISO timestamp as plain text, and any other route still returns 404.",
          starter:
`const server = http.createServer((req, res) => {
  // handle '/health', '/time', and everything else
});`,
          solution:
`const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OK');
  } else if (req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(new Date().toISOString());
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});`
        }
      },
      advanced: {
        explain: "Streams process data piece by piece instead of loading everything into memory at once — essential for large files or network data. Streams can be piped together, with transform streams modifying data as it flows through.",
        code:
`const fs = require('fs');
const { Transform } = require('stream');

const upper = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

fs.createReadStream('input.txt')
  .pipe(upper)
  .pipe(fs.createWriteStream('output.txt'));`,
        task: {
          prompt: "Write a transform stream that reverses each line's word order (e.g. \"the cat sat\" → \"sat cat the\"), then pipe a readable file through it into a writable file.",
          starter:
`const { Transform } = require('stream');

const reverseWords = new Transform({
  transform(chunk, encoding, callback) {
    // reverse word order per chunk and callback(null, result)
  }
});`,
          solution:
`const { Transform } = require('stream');

const reverseWords = new Transform({
  transform(chunk, encoding, callback) {
    const reversed = chunk.toString()
      .split('\\n')
      .map(line => line.split(' ').reverse().join(' '))
      .join('\\n');
    callback(null, reversed);
  }
});

fs.createReadStream('input.txt')
  .pipe(reverseWords)
  .pipe(fs.createWriteStream('output.txt'));`
        }
      }
    }
  },
  {
    id: "expressjs",
    name: "Express.js",
    plainName: "Express",
    group: "backend",
    tag: ["web"],
    color: "#909090",
    tagline: "The standard minimal web framework for Node.js — routes, middleware, and JSON APIs.",
    why: "Express is still the most common way to build a REST API in Node in 2026 — the backend counterpart to a React frontend or the API layer a mobile app (Swift, Kotlin, or Flutter) talks to over HTTP.",
    levels: {
      basic: {
        explain: "An Express app defines routes — a combination of an HTTP method and a URL path — each handled by a function that receives the request and sends a response, often as JSON.",
        code:
`const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(3000);`,
        task: {
          prompt: "Add a <code>POST /echo</code> route that reads a JSON body like <code>{ \"text\": \"hi\" }</code> and responds with <code>{ \"echo\": \"hi\" }</code>.",
          starter:
`app.post('/echo', (req, res) => {
  // read req.body.text and respond with it
});`,
          solution:
`app.post('/echo', (req, res) => {
  res.json({ echo: req.body.text });
});`
        }
      },
      intermediate: {
        explain: "Middleware functions run before your route handler and can inspect, modify, or reject a request — used for things like logging, authentication, and route parameters (<code>:id</code> in a path).",
        code:
`function logger(req, res, next) {
  console.log(\`\${req.method} \${req.url}\`);
  next();
}
app.use(logger);

app.get('/users/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Amara' });
});`,
        task: {
          prompt: "Write a middleware <code>requireApiKey</code> that checks for a header <code>x-api-key</code> equal to <code>\"secret123\"</code>, responding with 401 if it's missing or wrong, and calling <code>next()</code> otherwise.",
          starter:
`function requireApiKey(req, res, next) {
  // check req.headers['x-api-key']
}

app.use(requireApiKey);`,
          solution:
`function requireApiKey(req, res, next) {
  if (req.headers['x-api-key'] !== 'secret123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.use(requireApiKey);`
        }
      },
      advanced: {
        explain: "<code>express.Router()</code> lets you split routes into modules that plug into the main app. Async route handlers should wrap database or network calls in try/catch so errors don't crash the server.",
        code:
`// routes/users.js
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await db.query('SELECT id, name FROM users');
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
// app.use('/users', require('./routes/users'));`,
        task: {
          prompt: "Build a <code>users</code> router with <code>GET /</code> (all users) and <code>GET /:id</code> (one user, or 404 if not found), using a mock in-memory array instead of a real database.",
          starter:
`const router = require('express').Router();
const users = [{ id: 1, name: 'Amara' }, { id: 2, name: 'Diego' }];

router.get('/', (req, res) => {
  // return all users
});

router.get('/:id', (req, res) => {
  // return one user or 404
});`,
          solution:
`const router = require('express').Router();
const users = [{ id: 1, name: 'Amara' }, { id: 2, name: 'Diego' }];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

module.exports = router;`
        }
      }
    }
  },
  {
    id: "mysql",
    name: "MySQL",
    plainName: "MySQL",
    group: "backend",
    tag: ["web"],
    color: "#00758f",
    tagline: "A relational database — the storage layer behind most web and mobile backends.",
    why: "MySQL remains one of the most widely deployed relational databases in 2026, commonly paired with Node/Express, Python, or PHP backends to persist the data behind both websites and the APIs mobile apps call.",
    levels: {
      basic: {
        explain: "Tables have a fixed set of typed columns. <code>CREATE TABLE</code> defines the shape, <code>INSERT</code> adds rows, and <code>SELECT</code> reads them back — optionally filtered with <code>WHERE</code>.",
        code:
`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  age INT
);

INSERT INTO users (name, age) VALUES ('Amara', 29), ('Diego', 16);

SELECT name FROM users WHERE age >= 18;`,
        task: {
          prompt: "Write a query that selects the <code>name</code> and <code>age</code> of every user older than 18, ordered by age descending.",
          starter:
`-- write your SELECT statement here`,
          solution:
`SELECT name, age FROM users
WHERE age > 18
ORDER BY age DESC;`
        }
      },
      intermediate: {
        explain: "<code>JOIN</code> combines rows from two tables based on a matching column — like linking orders to the users who placed them. Aggregate functions (<code>COUNT</code>, <code>SUM</code>, <code>AVG</code>) combined with <code>GROUP BY</code> summarize data per group.",
        code:
`SELECT u.name, COUNT(o.id) AS order_count, SUM(o.total) AS total_spent
FROM users u
JOIN orders o ON o.user_id = u.id
GROUP BY u.id
ORDER BY total_spent DESC;`,
        task: {
          prompt: "Write a query that finds the top 3 customers by total amount spent, using a JOIN between <code>users</code> and <code>orders</code>, grouped and limited to 3 rows.",
          starter:
`-- join users and orders, group by user, order by total, limit 3`,
          solution:
`SELECT u.name, SUM(o.total) AS total_spent
FROM users u
JOIN orders o ON o.user_id = u.id
GROUP BY u.id
ORDER BY total_spent DESC
LIMIT 3;`
        }
      },
      advanced: {
        explain: "Transactions group multiple statements so they all succeed or all roll back together — important for things like transferring money between two rows. From application code, always use parameterized queries (placeholders) instead of string-concatenating user input, to prevent SQL injection.",
        code:
`START TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

COMMIT;

-- From Node with mysql2:
-- await connection.execute(
--   'INSERT INTO users (name, age) VALUES (?, ?)',
--   [name, age]
-- );`,
        task: {
          prompt: "Write a parameterized query (as used with the <code>mysql2</code> Node driver) that inserts a new order for a given <code>userId</code> and <code>total</code> — without concatenating the values directly into the SQL string. Then write a transaction that moves 50 units of stock from one warehouse row to another.",
          starter:
`// parameterized insert
// await connection.execute('INSERT INTO orders ... ', [ /* values */ ]);

-- transaction moving stock between two rows
START TRANSACTION;
-- ...
COMMIT;`,
          solution:
`// Node + mysql2
await connection.execute(
  'INSERT INTO orders (user_id, total) VALUES (?, ?)',
  [userId, total]
);

-- SQL transaction
START TRANSACTION;
UPDATE warehouse SET stock = stock - 50 WHERE id = 1;
UPDATE warehouse SET stock = stock + 50 WHERE id = 2;
COMMIT;`
        }
      }
    }
  }
];

const LANDSCAPE = [
  { tag: "Foundation", title: "HTML & CSS", body: "Still the substrate every framework compiles to. Modern CSS covers most layout and theming needs without extra tooling." },
  { tag: "Web · Frontend", title: "JavaScript & TypeScript", body: "JavaScript still runs most of the web; TypeScript has become the default for team-scale codebases and is now the most-used language on GitHub by contributor count." },
  { tag: "Web · Backend & AI", title: "Python", body: "Consistently the most popular language overall in 2026 rankings — the default for AI/ML tooling and a strong choice for web APIs (FastAPI, Django)." },
  { tag: "Mobile · Native", title: "Swift & Kotlin", body: "Swift is Apple's official language for iOS/SwiftUI; Kotlin is Google's official language for Android — both remain the standard when an app needs deep platform integration." },
  { tag: "Mobile & Web · Cross-platform", title: "Dart & Flutter", body: "One codebase reaching iOS, Android, web, and desktop. A strong option when a small team needs broad reach without native-per-platform overhead." },
  { tag: "Web · Full stack", title: "React, Node.js, Express & MySQL", body: "The classic JavaScript-everywhere stack: React renders the UI, Node runs the server, Express handles routing and APIs, and MySQL stores the data — still one of the most common combinations for shipping a full web (or mobile-backing) product in 2026." }
];

/* ============================= RENDER ============================= */
const GROUP_META = {
  foundations: { label: "Foundations", container: "groupFoundations" },
  web: { label: "Web development", container: "groupWeb" },
  mobile: { label: "Mobile development", container: "groupMobile" },
  backend: { label: "Frameworks & databases", container: "groupBackend" }
};

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

// Sidebar links
LANGUAGES.forEach(lang => {
  const group = document.getElementById(GROUP_META[lang.group].container);
  const btn = el('button', 'side-link', `<span class="side-dot"></span>${lang.name}`);
  btn.dataset.target = lang.id;
  group.appendChild(btn);
});

// Home cards
const cardGrid = document.getElementById('langCardGrid');
LANGUAGES.forEach(lang => {
  const card = el('button', 'lang-card');
  card.style.setProperty('--card-color', lang.color);
  card.dataset.jump = lang.id;
  const tags = lang.tag.map(t => `<span class="chip ${t}">${t}</span>`).join(' ');
  const lectureBadge = lang.lessonLinks ? `<span class="card-lecture-tag">📖 Full Lecture</span>` : '';
  card.innerHTML = `
    <div class="lang-card-top"><h3>${lang.name}</h3></div>
    <div style="margin-bottom:8px; display:flex; gap:6px; flex-wrap:wrap; align-items:center;">${tags} ${lectureBadge}</div>
    <p>${lang.tagline}</p>`;
  cardGrid.appendChild(card);
});

// Landscape rows
const landscapeGrid = document.getElementById('landscapeGrid');
LANDSCAPE.forEach(row => {
  const div = el('div', 'landscape-row');
  div.innerHTML = `<div><div class="tag">${row.tag}</div><h4>${row.title}</h4></div><p>${row.body}</p>`;
  landscapeGrid.appendChild(div);
});

// Language pages
const langPagesRoot = document.getElementById('langPages');
const LEVELS = [['basic', 'Basic'], ['intermediate', 'Intermediate'], ['advanced', 'Advanced']];

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

LANGUAGES.forEach(lang => {
  const page = el('section', 'page lang-page');
  page.id = 'page-' + lang.id;

  const tags = lang.tag.map(t => `<span class="chip ${t}">${t}</span>`).join(' ');
  const header = el('div', 'lang-header');
  header.innerHTML = `
    <div class="lang-header-top"><h2>${lang.name}</h2>${tags}</div>
    <p class="tagline">${lang.tagline}</p>
    <div class="callout"><strong>Why it matters in 2026:</strong> ${lang.why}</div>`;
  page.appendChild(header);

  // Standalone full lecture banner
  if (lang.lessonLinks && lang.lessonLinks.length > 0) {
    const lectureBanner = el('div', 'lang-lecture-banner');
    const actionBtns = lang.lessonLinks.map(l => 
      `<a href="${l.url}" class="btn-lecture"><span>${l.icon}</span> ${l.label} ↗</a>`
    ).join(' ');
    lectureBanner.innerHTML = `
      <div class="lang-lecture-banner-info">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span class="badge-new">IN-DEPTH LECTURE</span>
          <h4>Complete Step-by-Step Curriculum Available</h4>
        </div>
        <p>Looking for a complete multi-chapter lecture with dedicated syntax breakdowns, interactive checklists, and live demos?</p>
      </div>
      <div class="lang-lecture-actions">${actionBtns}</div>
    `;
    page.appendChild(lectureBanner);
  }

  const tabsWrap = el('div', 'level-tabs');
  LEVELS.forEach(([key, label], i) => {
    const tab = el('button', 'level-tab' + (i === 0 ? ' active' : ''), `<span class="num">${i + 1}</span>${label}`);
    tab.dataset.level = key;
    tabsWrap.appendChild(tab);
  });
  page.appendChild(tabsWrap);

  LEVELS.forEach(([key, label], i) => {
    const lvl = lang.levels[key];
    const panel = el('div', 'level-panel' + (i === 0 ? ' active' : ''));
    panel.dataset.level = key;

    const explain = el('p', 'lesson-text', lvl.explain);
    panel.appendChild(explain);

    const codeBlock = el('div', 'code-block');
    codeBlock.innerHTML = `<div class="code-block-head"><span>Example</span><button class="copy-btn" data-copy>Copy</button></div>`;
    const pre = document.createElement('pre');
    pre.textContent = lvl.code;
    codeBlock.appendChild(pre);
    panel.appendChild(codeBlock);

    const taskCard = el('div', 'task-card');
    taskCard.innerHTML = `
      <div class="task-head"><span class="icon">✓</span><h4>Try it yourself — ${label} task</h4></div>
      <p class="prompt">${lvl.task.prompt}</p>`;
    const starterBlock = el('div', 'code-block');
    starterBlock.innerHTML = `<div class="code-block-head"><span>Starter</span><button class="copy-btn" data-copy>Copy</button></div>`;
    const starterPre = document.createElement('pre');
    starterPre.textContent = lvl.task.starter;
    starterBlock.appendChild(starterPre);
    taskCard.appendChild(starterBlock);

    const solutionToggle = el('button', 'solution-toggle', 'Show solution');
    taskCard.appendChild(solutionToggle);

    const solutionWrap = el('div', 'solution-wrap');
    const solutionBlock = el('div', 'code-block');
    solutionBlock.innerHTML = `<div class="code-block-head"><span>Solution</span><button class="copy-btn" data-copy>Copy</button></div>`;
    const solutionPre = document.createElement('pre');
    solutionPre.textContent = lvl.task.solution;
    solutionBlock.appendChild(solutionPre);
    solutionWrap.appendChild(solutionBlock);
    taskCard.appendChild(solutionWrap);

    solutionToggle.addEventListener('click', () => {
      const open = solutionWrap.classList.toggle('open');
      solutionToggle.textContent = open ? 'Hide solution' : 'Show solution';
    });

    panel.appendChild(taskCard);
    page.appendChild(panel);
  });

  // level tab switching
  tabsWrap.querySelectorAll('.level-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabsWrap.querySelectorAll('.level-tab').forEach(t => t.classList.remove('active'));
      page.querySelectorAll('.level-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      page.querySelector(`.level-panel[data-level="${tab.dataset.level}"]`).classList.add('active');
    });
  });

  langPagesRoot.appendChild(page);
});

// Copy buttons (event delegation)
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-copy]')) {
    const pre = e.target.closest('.code-block').querySelector('pre');
    navigator.clipboard.writeText(pre.textContent).then(() => {
      const original = e.target.textContent;
      e.target.textContent = 'Copied!';
      setTimeout(() => (e.target.textContent = original), 1200);
    });
  }
});

/* ============================= NAVIGATION ============================= */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.side-link').forEach(l => l.classList.toggle('active', l.dataset.target === id));
  window.scrollTo({ top: 0, behavior: 'auto' });
  document.getElementById('sidebar').classList.remove('open');
}
showPage('home');

document.querySelectorAll('.side-link[data-target]').forEach(link => {
  link.addEventListener('click', () => showPage(link.dataset.target));
});
document.querySelectorAll('[data-jump]').forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.jump));
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

// sidebar search filter
document.getElementById('sideSearch').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.sidebar .side-link[data-target]').forEach(link => {
    const isLang = LANGUAGES.some(l => l.id === link.dataset.target);
    if (!isLang) return;
    link.style.display = link.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
});

/* ============================= HERO TYPEWRITER ============================= */
const HERO_SNIPPETS = [
  { lang: 'javascript', code: `console.log("Hello, world!");` },
  { lang: 'typescript', code: `const msg: string = "Hello, world!";\nconsole.log(msg);` },
  { lang: 'python', code: `print("Hello, world!")` },
  { lang: 'swift', code: `print("Hello, world!")` },
  { lang: 'kotlin', code: `fun main() {\n    println("Hello, world!")\n}` },
  { lang: 'dart', code: `void main() {\n  print('Hello, world!');\n}` },
  { lang: 'react (jsx)', code: `function App() {\n  return <h1>Hello, world!</h1>;\n}` },
  { lang: 'node.js', code: `console.log("Hello, world!");` },
  { lang: 'sql', code: `SELECT 'Hello, world!' AS message;` },
];

const heroCodeEl = document.getElementById('heroCode');
const heroLangEl = document.getElementById('heroLang');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let snippetIndex = 0;

function typeSnippet(text, cb) {
  let i = 0;
  heroCodeEl.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'terminal-cursor';
  heroCodeEl.appendChild(cursor);
  const interval = setInterval(() => {
    if (i >= text.length) {
      clearInterval(interval);
      if (cb) setTimeout(cb, 1400);
      return;
    }
    cursor.insertAdjacentText('beforebegin', text[i]);
    i++;
  }, 22);
}

function cycleHero() {
  const snippet = HERO_SNIPPETS[snippetIndex % HERO_SNIPPETS.length];
  heroLangEl.textContent = snippet.lang;
  if (reduceMotion) {
    heroCodeEl.textContent = snippet.code;
    snippetIndex++;
    setTimeout(cycleHero, 2600);
  } else {
    typeSnippet(snippet.code, () => {
      snippetIndex++;
      cycleHero();
    });
  }
}
cycleHero();
