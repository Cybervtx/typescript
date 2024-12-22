import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"


const peopleAccount: PeopleAccount = new PeopleAccount(1, "Diogo", 1)
const companyAccount: CompanyAccount = new CompanyAccount("Dio", 20)

peopleAccount.deposit()
companyAccount.deposit()


// console.log(peopleAccount)
// console.log(companyAccount)
