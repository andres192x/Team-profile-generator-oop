const Manager = require('../lib/manager');

test('Creates new Manager', () => {
    const employee = new Manager('David', 999, 'david@hotmail.com', 4161234567);

    expect(employee.name).toBe("David");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})