using System;
using System.Threading;

namespace CegepVicto.TechInfo.H2020.P2.DA1939902.JeuVie
{
    class Program
    {
        static void Main(string[] args)
        {
            JeuVie JV = JeuVie.GetInstance(100,30,25);
            JV.VoirTransi = false;
            while (!JV.Stable)
            {
                Console.SetCursorPosition(0, 1);
                Console.WriteLine(JV.ToString());
                JV.FaireTransition();
                Thread.Sleep(50);
                //Console.ReadLine();
            }
            Console.WriteLine("EQUILIBRIUM!!!");
            Console.ReadLine();
        }
    }
}
