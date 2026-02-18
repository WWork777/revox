import Image from "next/image";
import "./Record.scss";
import Link from "next/link";

export default function Record() {
  return (
    <>
      <div id="record" className="home-block record">
        <div className="record-title">
          <Image
            src={"/Home/Record/Record.png"}
            alt="Аутсорсинг бухгалтерского учета"
            width={650}
            height={630}
          />
        </div>

        <div className="record-text">
          <h2>Запиши свою песню</h2>
          <p>
            <span>Профессиональная</span> запись в студии с опытным
            звукорежиссёром, который подскажет и поможет выдать лучший
            результат.
          </p>
          <p>
            Сведение и мастеринг включены. <span>Коррекция нот</span> — при
            необходимости как дополнительная услуга.
          </p>
          <div className="record-text-price">
            <p>
              Один исполнитель — <span>4000 ₽</span>
            </p>
            <p>
              Дуэт и группы — <span>+1000 ₽</span> за человека
            </p>
            <p>
              Доп. коррекция нот — от <span>1000 ₽</span> до <span>3000 ₽</span>
            </p>
            <p>
              Длительность: <span>60</span> минут
            </p>
          </div>
          <button
            className="cta-about"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Link href="https://vk.com/voxkemerovo">Написать нам</Link>
          </button>
        </div>
      </div>
    </>
  );
}
