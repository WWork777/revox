import Image from "next/image";
import "./About.scss";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="home-block about">
        <Image
          src={"/Home/About/about.jpg"}
          alt="Студия звукозаписи в кемерово"
          width={700}
          height={700}
        />

        <div className="about-text">
          <h2>Что мы делаем</h2>
          <Image
            src={"/Home/About/about.jpg"}
            alt="Студия звукозаписи в кемерово"
            width={700}
            height={700}
          />
          <p>
            VOX — современная&nbsp;вокальная&nbsp;студия в&nbsp;Кемерово,
            где&nbsp;можно не&nbsp;просто&nbsp;<span>научиться петь</span>,
            но&nbsp;и&nbsp;<span>создавать</span> свою&nbsp;музыку.
          </p>
          <p>
            Здесь поддерживают на&nbsp;<span>любом</span> уровне —
            от&nbsp;первых шагов до&nbsp;уверенных выступлений и&nbsp;записи
            собственных треков.
          </p>
          <p>
            Это первая студия в&nbsp;городе, где&nbsp;есть полноценное
            направление по&nbsp;<span>экстрим</span>-вокалу —
            от&nbsp;скрима&nbsp;до&nbsp;гроула.
          </p>
          <p>
            Уникальная возможность освоить <span>сонграйтинг</span> и&nbsp;
            <span>сведение</span> треков у&nbsp;опытных педагогов
            и&nbsp;звукорежиссёров.
          </p>
          <p>
            Множество мастер-классов, караоке-баттлы, творческие встречи
            и&nbsp;выезды на&nbsp;природу создают атмосферу вдохновения
            и&nbsp;развития.
          </p>
          <button className="cta-about" type="button">
            <Link href={"tel:+7 905 916-92-86"}>Позвонить нам</Link>
          </button>
        </div>
      </div>
    </>
  );
}
