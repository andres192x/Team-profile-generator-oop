const Intern = require("../lib/intern")

test('Creates intern', () => {
    const employee = new Intern('David', 999, 'david@hotmail.com', 'UofT');

    expect(employee.name).toBe("David");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})