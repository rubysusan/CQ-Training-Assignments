using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeApp
{
    public class Rectangle:Shape
    {
        public int Length { get; set; }
        public int Breadth { get; set; }
        public Rectangle(int num,int len,int bred):base(num)
        {
            NoOfSides = num;
            Length = len;
            Breadth = bred;
        }
        public override double CalculateArea()
        {
            return Length * Breadth;
        }
    }
}
