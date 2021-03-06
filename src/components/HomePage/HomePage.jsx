import "./HomePage.scss";

const HomePage = () => {
   return (
      <main id="homePage">
         <div className="title mb-2">Task Manager</div>

         <div id="items">
            <div className="item">
               <img src="./images/project.png" alt="project" />
               <div className="description">Twórz własne projekty</div>
            </div>

            <div className="item">
               <img src="./images/form.png" alt="project" />
               <div className="description">Dodawaj zadania do projektu</div>
            </div>

            <div className="item">
               <img src="./images/tasks.png" alt="project" />
               <div className="description">Zarządzaj zadaniami w projekcie</div>
            </div>

            <div className="item">
               <img src="./images/time.png" alt="project" />
               <div className="description">Zmniejsz czas poświęcony na zarządzaniu projektem</div>
            </div>

            <div className="item">
               <img src="./images/growth.png" alt="project" />
               <div className="description">Zwiększ efektywność pracy</div>
            </div>

            <div className="item">
               <img src="./images/interface.png" alt="project" />
               <div className="description">Korzystaj w wygodnego interfejsu</div>
            </div>

            <div className="item">
               <img src="./images/responsive.png" alt="project" />
               <div className="description">Korzystaj na każdym urządzeniu</div>
            </div>
         </div>
      </main>
   );
};

export default HomePage;