class Person{
	firstName : string;
	lastName : string;
	greet()
		{
			console.log("From parent class");
		}	
	setFullName(fname: string, lname: string){
		this.firstName = fname;
		this.lastName = lname;
	}

	
}

class Admin extends Person{
	
	
}

class Manager extends Person {
	
	
}

let admin = new Admin();

let manager = new Manager();

function PersonEcho<T extends Person>(arg : T): T {
	return arg;
}

var foo = PersonEcho(admin);