// Student Class
class Student {
	constructor(name, lastName, telNumber, address) {
		this._name = name
		this._lastName = lastName
		this.telNumber = telNumber
		this.address = address
	}

	get fullname() {
		return `${this._name} ${this._lastName}`
	}

	info() {
		return `He is living at ${this.address}, his number is ${this.telNumber}, his full name is ${this._name} ${this._lastName}`
	}

	set name(newName) {
		this._name = newName
	}

	get name() {
		return this._name
	}
}

// Teacher Class
class Teacher {
	constructor(lastName, name, address, salary, level) {
		this._lastName = lastName
		this._name = name
		this.address = address
		this.salary = salary
		this.level = level
	}

	get fullName() {
		return `${this._name} ${this._lastName}`
	}

	description() {
		return `He lives at ${this.address}, earns ${this.salary}, and is a ${this.level} in programming.`
	}

	get name() {
		return this._name
	}

	set name(newName) {
		this._name = newName
	}
}

// Group Class
class Group {
	constructor(name, room, level, studentCount, teacher) {
		this._name = name
		this.room = room
		this.level = level
		this.studentCount = studentCount
		this.teacher = teacher
	}

	get fullInformation() {
		return `Group name: ${this._name}, Room: ${this.room}, Level: ${this.level}, Students: ${this.studentCount}, Mentor: ${this.teacher}`
	}

	set name(newName) {
		this._name = newName
	}

	get name() {
		return this._name
	}
}

// Payment Class
class Payment {
	constructor(from, to, amount, date, status) {
		this.from = from
		this.to = to
		this.amount = amount
		this.date = date || new Date()
		this._status = status
	}

	get paymentStatus() {
		return `Status: ${this._status}, Date: ${this.date}`
	}

	set status(newStatus) {
		this._status = newStatus
	}
}

// Salary Class
class Salary {
	constructor(to, amount, currency, date, status) {
		this.to = to
		this.amount = amount
		this.currency = currency
		this.date = date || new Date()
		this._status = status // Use a private field for storing status
	}

	get salaryInfo() {
		return `To: ${this.to}, Amount: ${this.amount}, Currency: ${this.currency}, Date: ${this.date}, Status: ${this._status}`
	}

	set status(newStatus) {
		this._status = newStatus
	}
}

// Organization Class
class Organization {
	constructor(name, founder, address, employeeCount) {
		this._name = name
		this.founder = founder
		this.address = address
		this.employeeCount = employeeCount
	}

	get organizationInfo() {
		return `Organization: ${this._name}, Founder: ${this.founder}, Address: ${this.address}, Employees: ${this.employeeCount}`
	}

	set name(newName) {
		this._name = newName
	}

	get name() {
		return this._name
	}
}

// Exporting Classes
export { Student, Teacher, Group, Payment, Salary, Organization }
