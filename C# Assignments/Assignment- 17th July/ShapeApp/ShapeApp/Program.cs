using ShapeApp;

Shape tri=new Triangle(3,3,6);
Shape sq = new Square(4, 2);
Shape rect = new Rectangle(4, 2, 4);

tri.DisplayNoOfSides();
Console.WriteLine("Area of Triangle = "+tri.CalculateArea());

sq.DisplayNoOfSides();
Console.WriteLine("Area of Square = " + sq.CalculateArea());

rect.DisplayNoOfSides();
Console.WriteLine("Area of Rectangle = " + rect.CalculateArea());


