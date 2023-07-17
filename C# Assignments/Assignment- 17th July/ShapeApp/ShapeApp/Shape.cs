using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeApp
{
    public abstract class Shape
    {
        public int NoOfSides { get; set; }
        public void DisplayNoOfSides()
        {
            Console.WriteLine("No. of sides = "+NoOfSides);
        }
        public Shape(int num)
        {
            NoOfSides = num;            
        }
        public abstract double CalculateArea();
    }
}
