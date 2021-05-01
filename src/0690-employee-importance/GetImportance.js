// https://leetcode.com/problems/employee-importance/

class Employee {
    constructor(id, importance, subordinates) {
        this.id = id
        this.importance = importance
        this.subordinates = subordinates
    }
}

function GetImportance(employees, id) {
    let map = new Map()
    for (let employee of employees) {
        map.set(employee.id, employee)
    }

    const helper = (employee) => {
        let result = 0

        employee.subordinates.forEach(subId => {
            result += helper(map.get(subId))
        })
        return result + employee.importance
    }

   let target = map.get(id)

   return helper(target)
}


console.log(GetImportance([new Employee(...[1,2,[2]]), new Employee(...[2,3,[]])],2))