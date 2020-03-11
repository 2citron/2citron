using System;
using System.Text;

namespace CegepVicto.TechInfo.H2020.P2.DA1939902.JeuVie
{
    public class JeuVie
    {
        private int xTaille;
        private int yTaille;
        private int chance;
        private int[,] grilleJeu;
        private int[,] grilleÉtat;
        private bool voirTransi;
        private bool enTransi = false;
        private ushort coin;
        private bool stable = false;
        private static JeuVie instance;
        public static JeuVie GetInstance()
        {
            if (instance == null)
            {
                instance = new JeuVie();
            }
            return instance;
        }
        public static JeuVie GetInstance(int chance)
        {
            if (instance == null)
            {
                instance = new JeuVie(chance);
            }
            return instance;
        }
        public static JeuVie GetInstance(int x, int y)
        {
            if (instance == null)
            {
                instance = new JeuVie(x, y);
            }
            return instance;
        }
        public static JeuVie GetInstance(int x, int y, int chance)
        {
            if (instance == null)
            {
                instance = new JeuVie(x, y, chance);
            }
            return instance;
        }

        private JeuVie() : this(50, 50, 25) { CréerJeu(); }

        private JeuVie(int chance) : this(50, 50, chance) { CréerJeu(); }

        private JeuVie(int yTaille, int xTaille) : this(yTaille, xTaille, 25) { CréerJeu(); }

        private JeuVie(int yTaille, int xTaille, int chance)
        {
            this.xTaille = xTaille;
            this.yTaille = yTaille;
            this.chance = chance;
            CréerJeu();
        }
        /// <summary>
        /// Créer les tableaux avec les tailles données et assigne les états (mort = 0, vivant = 1) selon la chance d'être vivant passé en paramètre
        /// </summary>
        private void CréerJeu()
        {
            grilleJeu = new int[xTaille, yTaille];
            grilleÉtat = new int[xTaille, yTaille];
            Random r = new Random();
            int rng;
            for (int i = 0; i < grilleJeu.GetLength(0); i++)
            {
                for (int j = 0; j < grilleJeu.GetLength(1); j++)
                {
                    rng = r.Next(1, 101);
                    if (rng <= chance)
                    {
                        grilleJeu[i, j] = 1;
                    }
                    else
                    {
                        grilleJeu[i, j] = 0;
                    }
                }
            }
        }
        /// <summary>
        /// Vérifie si on veut voir la transition (pour l'affichage)
        /// Vérifie si on est en transition
        ///     Si oui, met à jour la grille
        ///     Si non, calcul la nouvelle transition
        /// Vérifie si on est en équilibre 
        /// </summary>
        public void FaireTransition()
        {
            if (voirTransi)
            {
                if (enTransi)
                {
                    MAJGrille();
                }
                else
                {
                    CalculNouvelleTransition();
                }
            }
            else
            {
                CalculNouvelleTransition();
                MAJGrille();
            }
            Equilibrium();
        }
        /// <summary>
        /// Met à jour la grille de jeu en utilisant les valeurs de transition (mourant = 8, naissant = 2)
        /// pour mettre les valeurs d'état (mort = 0, vivant = 1)
        /// </summary>
        private void MAJGrille()
        {
            for (int i = 0; i < grilleÉtat.GetLength(0); i++)
            {
                for (int j = 0; j < grilleÉtat.GetLength(1); j++)
                {
                    if (grilleÉtat[i, j] == 2)
                    {
                        grilleJeu[i, j] = 1;


                    }
                    else if (grilleÉtat[i, j] == 8)
                    {
                        grilleJeu[i, j] = 0;

                    }
                    else
                    {
                        grilleJeu[i, j] = grilleÉtat[i, j];
                    }
                }
            }
        }
        /// <summary>
        /// Calcul le nombre de voisins pour chaque case et assigne l'état de la case dans le tableau de transition
        /// </summary>
        private void CalculNouvelleTransition()
        {
            for (int x = 0; x < grilleJeu.GetLength(0); x++)
            {
                for (int y = 0; y < grilleJeu.GetLength(1); y++)
                {
                    int voisins = CalculVoisins(x, y);
                    AssigneEtat(voisins, x, y);
                }
            }
        }
        /// <summary>
        /// Prend la position en paramètre et retourne le nombre de voisins
        /// </summary>
        /// <param name="x">position sur l'axe x</param>
        /// <param name="y">position sur l'axe y</param>
        /// <returns>nombre de voisins en int</returns>
        private int CalculVoisins(int x, int y)
        {
            int voisins = 0;
            if (EstUnCoin(x, y))
            {
                if (coin == 1)
                {
                    voisins += grilleJeu[0, 1];
                    voisins += grilleJeu[1, 0];
                    voisins += grilleJeu[1, 1];
                }
                else if (coin == 2)
                {
                    voisins += grilleJeu[0, yTaille - 2];
                    voisins += grilleJeu[1, yTaille - 1];
                    voisins += grilleJeu[1, yTaille - 2];
                }
                else if (coin == 3)
                {
                    voisins += grilleJeu[xTaille - 1, 1];
                    voisins += grilleJeu[xTaille - 2, 0];
                    voisins += grilleJeu[xTaille - 2, 1];
                }
                else if (coin == 4)
                {
                    voisins += grilleJeu[xTaille - 1, yTaille - 2];
                    voisins += grilleJeu[xTaille - 2, yTaille - 1];
                    voisins += grilleJeu[xTaille - 2, yTaille - 2];
                }
            }
            else if (EstSurLeBord(x, y))
            {
                if (x == 0)
                {
                    voisins += grilleJeu[x, y - 1];
                    voisins += grilleJeu[x, y + 1];
                    voisins += grilleJeu[x + 1, y - 1];
                    voisins += grilleJeu[x + 1, y];
                    voisins += grilleJeu[x + 1, y + 1];
                }
                else if (y == 0)
                {
                    voisins += grilleJeu[x - 1, y];
                    voisins += grilleJeu[x - 1, y + 1];
                    voisins += grilleJeu[x, y + 1];
                    voisins += grilleJeu[x + 1, y];
                    voisins += grilleJeu[x + 1, y + 1];
                }
                else if (x == xTaille - 1)
                {
                    voisins += grilleJeu[x - 1, y - 1];
                    voisins += grilleJeu[x - 1, y];
                    voisins += grilleJeu[x - 1, y + 1];
                    voisins += grilleJeu[x, y - 1];
                    voisins += grilleJeu[x, y + 1];
                }
                else if (y == yTaille - 1)
                {
                    voisins += grilleJeu[x - 1, y - 1];
                    voisins += grilleJeu[x - 1, y];
                    voisins += grilleJeu[x, y - 1];
                    voisins += grilleJeu[x + 1, y - 1];
                    voisins += grilleJeu[x + 1, y];
                }
            }
            else
            {
                voisins += grilleJeu[x - 1, y - 1];
                voisins += grilleJeu[x - 1, y];
                voisins += grilleJeu[x - 1, y + 1];
                voisins += grilleJeu[x, y - 1];
                voisins += grilleJeu[x, y + 1];
                voisins += grilleJeu[x + 1, y - 1];
                voisins += grilleJeu[x + 1, y];
                voisins += grilleJeu[x + 1, y + 1];
            }
            return voisins;
        }
        /// <summary>
        /// Prend en paramètre la position et vérifie si la case est sur un coin
        /// Si oui donne la signature du coin (1, 2, 3 ou 4)
        /// </summary>
        /// <param name="x">position sur l'axe x</param>
        /// <param name="y">position sur l'axe y</param>
        /// <returns>bool</returns>
        public bool EstUnCoin(int x, int y)
        {
            if (x == 0 && y == 0)
            {
                coin = 1;
                return true;
            }
            else if (x == 0 && y == yTaille - 1)
            {
                coin = 2;
                return true;
            }
            else if (x == xTaille - 1 && y == yTaille - 1)
            {
                coin = 4;
                return true;
            }
            else if (x == xTaille - 1 && y == 0)
            {
                coin = 3;
                return true;
            }
            return false;
        }
        /// <summary>
        /// Prend la position en paramètre en vérifie si la case est sur un bord
        /// </summary>
        /// <param name="x">position sur l'axe x</param>
        /// <param name="y">position sur l'axe y</param>
        /// <returns>bool</returns>
        public bool EstSurLeBord(int x, int y)
        {
            if (x == 0 || y == 0 || x == xTaille - 1 || y == yTaille - 1)
            {
                return true;
            }
            return false;
        }
        /// <summary>
        /// Prends le nombre de voisins et la position de la case pour assigner son état 
        /// </summary>
        /// <param name="voisins">nombre de voisins</param>
        /// <param name="x">position sur l'axe x</param>
        /// <param name="y">position sur l'axe y</param>
        private void AssigneEtat(int voisins, int x, int y)
        {
            if (voisins == 3 && grilleJeu[x, y] == 0)
            {
                grilleÉtat[x, y] = 2;
            }
            else if (voisins == 3 && grilleJeu[x, y] == 1)
            {
                grilleÉtat[x, y] = grilleJeu[x, y];
            }
            else if (voisins == 2)
            {
                grilleÉtat[x, y] = grilleJeu[x, y];
            }
            else if ((voisins < 2 || voisins > 3) && grilleJeu[x, y] == 1)
            {
                grilleÉtat[x, y] = 8;
            }
            else if ((voisins < 2 || voisins > 3) && grilleJeu[x, y] == 0)
            {
                grilleÉtat[x, y] = grilleJeu[x, y];
            }
        }
        /// <summary>
        /// Vérifie si le jeu est fini
        /// </summary>
        private void Equilibrium()
        {
            StringBuilder tab1 = new StringBuilder();
            for (int i = 0; i < grilleJeu.GetLength(0); i++)
            {
                for (int j = 0; j < grilleJeu.GetLength(1); j++)
                {
                    tab1.Append(grilleJeu[i, j]);
                }
            }
            StringBuilder tab2 = new StringBuilder();
            for (int i = 0; i < grilleJeu.GetLength(0); i++)
            {
                for (int j = 0; j < grilleJeu.GetLength(1); j++)
                {
                    tab2.Append(grilleÉtat[i, j]);
                }
            }
            if (tab1.ToString() == tab2.ToString())
            {
                stable = true;
            }
        }
        /// <summary>
        /// Vérifie si on voit la transition 
        /// Change l'état de enTransi
        /// Renvoie les tableaux 
        /// </summary>
        /// <returns>string</returns>
        public override string ToString()
        {
            StringBuilder affiche = new StringBuilder();
            for (int i = 0; i < grilleÉtat.GetLength(0); i++)
            {
                for (int j = 0; j < grilleÉtat.GetLength(1); j++)
                {
                    if (!voirTransi)
                    {
                        if (grilleJeu[i, j] == 1)
                        {
                            affiche.Append("X");
                        }
                        else if (grilleJeu[i, j] == 0)
                        {
                            affiche.Append(" ");
                        }
                    }
                    else if (voirTransi)
                    {
                        if (enTransi)
                        {
                            if (grilleÉtat[i, j] == 0)
                            {
                                affiche.Append(" ");
                            }
                            else
                            {
                                affiche.Append(grilleÉtat[i, j]);
                            }
                        }
                        else
                        {
                            if (grilleJeu[i, j] == 1)
                            {
                                affiche.Append("X");
                            }
                            else if (grilleJeu[i, j] == 0)
                            {
                                affiche.Append(" ");
                            }
                        }
                    }

                }
                affiche.Append("\n");
            }
            enTransi = !enTransi;
            return affiche.ToString();
        }
        public bool Stable
        {
            get { return this.stable; }
        }
        public bool VoirTransi { set => voirTransi = value; }
    }
}