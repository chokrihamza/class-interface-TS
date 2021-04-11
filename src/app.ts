interface Greetable{
  readonly name: string;

  greeting(phrase:string):void
}

class Person implements Greetable{
  name: string;
  age: number;
  constructor(name:string, age:number) {
    this.age = age;
    this.name = name;
  }
  greeting(phrase:string) {
    console.log(`${phrase }`+this.name)
  }
}


let user1=new Person("sami",20)

user1.name="ala"
user1.greeting("hi how are you ")