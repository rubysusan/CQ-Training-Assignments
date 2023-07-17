using ConsoleApp6;
DateTime dt = DateTime.Now;
Employee emp= new Employee(111,"RUBY", dt, "HR",15000,'P');
IBonusCalculator ib = null;
if(emp.JobType=='P')
{
   ib = new PermanentEmployeeBonusCalculator();
}
else if (emp.JobType == 'C')
{
   ib = new ContractEmployeeBonusCalculator();

}
Console.WriteLine("Bonus Amount for Type " + emp.JobType + " Employee =" + ib.CalculateBonus(emp));


