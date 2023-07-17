using ConsoleApp6;
DateTime dt = DateTime.Now;
Employee emp= new Employee(111,"RUBY", dt, "HR",15000,'P'); 
if(emp.JobType=='P')
{
    IBonusCalculator ip = new PermanentEmployeeBonusCalculator();
    Console.WriteLine("Bonus Amount for Type "+emp.JobType+" Employee =" + ip.CalculateBonus(emp));
}
else if (emp.JobType == 'C')
{
    IBonusCalculator ic = new ContractEmployeeBonusCalculator();
    Console.WriteLine("Bonus Amount for Type "+emp.JobType+" Employee =" + ic.CalculateBonus(emp));
}



