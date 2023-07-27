using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtensionClass
{
    public static class Extention
    {
        public static int WordCount(this string str,string word)
        {
            int count = 0;
            string[] temp = str.Split(' ');
            foreach (string word2 in temp)
            {
                if(word.Equals(word2,StringComparison.OrdinalIgnoreCase))
                    count++;
            }
            return count;
        }
    }
}
