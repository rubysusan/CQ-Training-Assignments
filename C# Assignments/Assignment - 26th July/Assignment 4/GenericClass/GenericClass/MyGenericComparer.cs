using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GenericClass
{
    public class MyGenericComparer<T> where T : IComparable
    {
        public T Compare(T x, T y)
        {
            if(x.CompareTo(y) > 0)
                return x;
            else
                return y;
        }
    }
}
