using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShapeApp
{
    public class Square:Shape
    {
        public int Length { get; set; }
        public Square(int num,int len):base(num)
        {
            NoOfSides = num;
            Length = len;
        }
        public override double CalculateArea()
        {
            return Length * Length;
        }
    }
}
