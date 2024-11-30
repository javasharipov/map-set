import {
	Student,
	Teacher,
	Group,
	Payment,
	Salary,
	Organization,
} from './app.js'

// Example for Student Class
const student1 = new Student('John', 'Doe', '+1234567890', '123 Street')
console.log('Student Info:', student1.info())
console.log('Full Name:', student1.fullname)

student1.name = 'Mike'
console.log('Updated Name:', student1.fullname)

// Example for Teacher Class
const teacher1 = new Teacher(
	'Smith',
	'Jane',
	'456 Avenue',
	5000,
	'Senior Developer'
)
console.log('Teacher Description:', teacher1.description())
console.log('Full Name:', teacher1.fullName)

// Update teacher's name using setter
teacher1.name = 'Anna'
console.log('Updated Teacher Full Name:', teacher1.fullName)

// Example for Group Class
const teacherForGroup = new Teacher(
	'Green',
	'Alice',
	'789 Park Lane',
	5500,
	'Junior Developer'
)
const group1 = new Group(
	'Frontend Developers',
	'Room 101',
	'Intermediate',
	25,
	teacherForGroup
)
console.log('Group Full Information:', group1.fullInformation)

group1.name = 'Advanced Developers'
console.log('Updated Group Name:', group1.name)

const payment1 = new Payment(
	'Alice',
	'Bob',
	1000,
	new Date('2024-11-01'),
	'Pending'
)
console.log('Payment Status:', payment1.paymentStatus)

payment1.status = 'Completed'
console.log('Updated Payment Status:', payment1.paymentStatus)

const salary1 = new Salary('Alice', 3500, 'USD', new Date('2024-10-31'), 'Paid')
console.log('Salary Info:', salary1.salaryInfo)

salary1.status = 'Unpaid'
console.log('Updated Salary Status:', salary1.salaryInfo)

const organization1 = new Organization(
	'TechCorp',
	'John Doe',
	'123 Business Blvd',
	100
)
console.log('Organization Info:', organization1.organizationInfo)

organization1.name = 'InnovateTech'
console.log('Updated Organization Name:', organization1.name)
