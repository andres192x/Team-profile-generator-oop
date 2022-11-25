
const Engineer = require("../lib/engineer")

test('Creates Engineer', () => {
    const employee = new Engineer('David', 999, 'david@hotmail.com', 'david@github.com');
  
    expect(employee.name).toBe("David");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.gitHub).toEqual(expect.any(String));
  })
  