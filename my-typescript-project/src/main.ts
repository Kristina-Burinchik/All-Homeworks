import { User } from "./interfaces/User";
import { Person } from "./interfaces/Person";
import { ObjectManipulator } from "./classes/ObjectManipulator";
import { map } from "./utils/map";
import { filter } from "./utils/filter";
import { add } from "./utils/add";

const users: User[] = [
  { name: "Max Mustermann", age: 25, occupation: "Chimney sweep", car: "VW" },
  { name: "Kate Müller", age: 23, occupation: "Astronaut", children: 2 },
];

const persons: Person[] = [
  { name: "Max Mustermann", age: 25, occupation: "Chimney sweep" },
  { name: "Jane Doe", age: 32, role: "Administrator" },
  { name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { name: "Bruce Willis", age: 64, role: "World saver" },
];

const obj = { a: 1, b: 2 };
const manipulator = new ObjectManipulator(obj);
const updated = manipulator.set("a", 42);
console.log(updated.getObject());

const mappedArray = map((x: number) => x * 2, [1, 2, 3]);
console.log(mappedArray);

const filteredArray = filter((x: number) => x > 1, [1, 2, 3]);
console.log(filteredArray);

const sum = add(5);
const total = sum(10);
console.log(total);
