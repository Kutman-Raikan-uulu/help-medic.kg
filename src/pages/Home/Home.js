import React from "react";
import classes from "./Home.module.css";

import Cards from "../../components/Cards/Cards";

import imagesSiz from "../../assets/images/siz.jpg";
import imagesMedicines from "../../assets/images/medicines.jpg";
import imagesFood from "../../assets/images/food.jpg";
import imagesIcon1 from "../../assets/images/icon-1.png";
import imagesIcon2 from "../../assets/images/icon-2.png";
import imagesIcon3 from "../../assets/images/icon-3.png";

function Home(props) {
  return (
    <div className={classes.Home}>
      <div className={classes.Home__header}>
        <header>
          <h1>Поможем врачам!</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button>посмотреть что нужно</button>
        </header>
      </div>

      <main>
        <section className={classes.Home__necessity}>
          <header>
            <h2>Что нужно врачам</h2>
          </header>
          <div className={classes.Home__necessity_list}>
            <article>
              <img src={imagesSiz} alt="img" />
              <h3>С.И.З.</h3>
              <p>острая нехватка средства индивидуальной защиты для врачей</p>
            </article>
            <article>
              <img src={imagesFood} alt="img" />
              <h3>Еда</h3>
              <p>lorem ipsum sid dolor amet food</p>
            </article>
            <article>
              <img src={imagesMedicines} alt="img" />
              <h3>Лекарства</h3>
              <p>Постоянная нехватка лекарств для больных ковид</p>
            </article>
          </div>
        </section>
        <section>
          <header>
            <h2>объявление необходимых продуктов</h2>
          </header>
          <div></div>
          <div className={classes.Home_buttons}>
            <button>Все</button>
            <button>Лекарства</button>
            <button>С.И.З.</button>
            <button>Еда</button>
            <button>Что-еще</button>
            <button>Что-еще</button>
          </div>
          <Cards></Cards>
          <button>загрузить еще</button>
        </section>
        <section className={classes.Home__target}>
          <header>
            <h2>Цель сайта</h2>
          </header>
          <div className={classes.Home__target_list}>
            <article>
              <img src={imagesIcon1} alt="icon" />
              <h3>Посмотрите что нужно врачам</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </article>
            <article>
              <img src={imagesIcon2} alt="icon" />
              <h3>Посмотрите что нужно врачам</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </article>
            <article>
              <img src={imagesIcon3} alt="icon" />
              <h3>остановим ковид вместе!</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </article>
          </div>
        </section>
        <section>
          <header>
            <h2>поделитесь с ссылкой сайта и помогите врачам!</h2>
            <p>help-medic.kg</p>
          </header>
        </section>
      </main>
    </div>
  );
}

export default Home;
