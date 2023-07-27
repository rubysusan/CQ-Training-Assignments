using CustomException;
char sport;
Console.WriteLine("Enter the character corresponding to the sports name: "); 
sport=char.Parse(Console.ReadLine());
switch(sport)
{
    case 'c':
        Console.WriteLine("Cricket");
        break;
    case 'f':
        Console.WriteLine("Football");
        break;
    case 'h':
        Console.WriteLine("Hockey");
        break;
    case 't':
        Console.WriteLine("Tennis");
        break;
    case 'b':
        Console.WriteLine("Badminton");
        break;
    default:
        try { throw new MyException("Invalid Input"); }
        catch(MyException e) { Console.WriteLine(e.Message);
            break;
        }   
        
}