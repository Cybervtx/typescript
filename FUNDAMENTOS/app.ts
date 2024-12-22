import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Diogo", 1)
const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20)

console.log(peopleAccount)
peopleAccount.setName('Diogo Caldas')
console.log(peopleAccount.getName())


// console.log(peopleAccount)
// console.log(companyAccount)
