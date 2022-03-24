import "./HomePage.scss";

const HomePage = () => {
   return (
      <main id="homePage">
         <div className="text-center h2 border-bottom p-2 bg-primary text-white">Task Manager</div>

         <p>
            <div className="fw-bold">Czym jest TaskManager? </div>
            <div>Jest to system to zarządzania zadaniami w projekcie. Twórz własne projekty
               Twórz zadania do projektów.

               Pomaga w tworzeniu projektu | zarządzania projektami.
               Większa produktywność | efektywność | Wygoda

               Zwiększ swoją produktywność


               Łatwy dostęp do zadań
               Wygodny interfejst ( screen edytuj zadanie )

            </div>
         </p>

         <div className="block">
            <div>
               <img src="abc" alt="act" />
            </div>
            <div>
               Tekst
            </div>
         </div>

         {
            /* 
               Twórz nowe projekty -> Obrazek
               Zarządzaj swoimi projektaimi -> Lista projektów
               Zarzązdaj pojedynczym projektem -> Lista zadań
               Dodowaj zadania
               Edutuj zadania

               


               Obrazek (Lista projektów) -> Tekst
               Teskt -> Obrazek (Lista zadań)
               Obrazek (Tworzenia zadań) -> Obrazek
               Teskt -> Obrazek (Edycja zadań)
            */
         }
      </main>
   );
};

export default HomePage;