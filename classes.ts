class Person{
	private firstName : string;
	private lastName : string;
	greet()
		{
			console.log("From parent class");
		}
	getFullName(){
		//getter
		return this.firstName +" "+ this.lastName;
	}
	setFullName(fname: string, lname: string){
		this.firstName = fname;
		this.lastName = lname;
	}

	/*constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}*/

	/*getFullName(){
		return this.firstName + " "+this.lastName;
	}*/
}

class Programmer extends Person{
// inheritance
	greet()//methode over writing
	{
		console.log("Greet over writing");
	}

	greetLikePeople()
	{
		//this.greet();
		super.greet();
	}

}

/*interface Human{
	fname:string;
	lname:string;
	getFullName():string; // in interfaces only declare methode not body
}

class Foo implements Human{
	fname:string;
	lname:string;
	getFullName():string{
		return this.fname +" "+ this.lname;
	}
}*/

//var aPerson = new Person("samitha", "hmm");
/*aPerson.firstName = "samitha";
aPerson.lastName = "adikari";*/
//console.log(aPerson.firstName);
//console.log(aPerson.getFullName());

//var aProgrammer = new Programmer();
var aProgrammer : Person = new Programmer();
aProgrammer.greet();
aProgrammer.setFullName("samitha", "oopz");
console.log(aProgrammer.getFullName());
//aProgrammer.greetLikePeople() // this can't access by type perosn

//let aPerson : Person