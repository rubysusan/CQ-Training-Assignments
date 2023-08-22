namespace EmployeeModel
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; }
        = string.Empty;
        public string DateOfBirth { get; set; }
        public int Age { get; set; }

        public string DateOfJoining { get; set; }

        public string Country { get; set; } = string.Empty;
    }
}