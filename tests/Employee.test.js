
const Employee = require("../lib/Employee");

test('Creates employee',() => {
    const employee = new Employee('David', 999, 'David@github.com');

    expect(employee.name).toBe("David");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

