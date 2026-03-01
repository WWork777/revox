import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-[#dbdbdb] px-5">
      <div className="max-w-360 mx-auto">
        {/* Десктопная версия (md и выше) */}
        <div className="hidden lg:block  py-[60px]">
          <div className="flex justify-between items-center gap-[60px]">
            {/* Левая колонка с навигацией */}
            <div className="flex flex-col justify-between h-full gap-[25px]">
              <div className="flex items-center gap-[30px] uppercase">
                <NavLink href="/#services">Услуги</NavLink>
                <NavLink href="/#projects">Проекты</NavLink>
                <NavLink href="/#team">Команда</NavLink>
                <NavLink href="/learning/#record">Звукозапись</NavLink>
                <NavLink href="/learning/#cert">Сертификаты</NavLink>
              </div>
              <PrivacyLink href="/personal" />
            </div>

            {/* Правая колонка с контактами */}
            <div className="flex flex-col justify-between h-full gap-[25px]">
              <div className="flex flex-col items-end gap-[10px] font-[450]">
                <a
                  href="tel:+79059169286"
                  className="hover:text-white transition-colors"
                >
                  +7 905 916-92-86
                </a>
                <a
                  href="mailto:voxmusickemerovo@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  voxmusickemerovo@gmail.com
                </a>
              </div>
              <div className="flex justify-end gap-[15px]">
                <SocialLink href="https://vk.com/voxkemerovo" type="vk" />
                <SocialLink
                  href="https://t.me/voxmusickemerovo"
                  type="telegram"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Мобильная версия (до md) */}
        <div className="lg:hidden  py-10">
          <div className="flex flex-col gap-8">
            {/* Меню навигации */}
            <div className="flex flex-col items-end gap-[30px] uppercase">
              <NavLink href="/#services">Услуги</NavLink>
              <NavLink href="/#projects">Проекты</NavLink>
              <NavLink href="/#team">Команда</NavLink>
              <NavLink href="/learning/#record">Звукозапись</NavLink>
              <NavLink href="/learning/#cert">Сертификаты</NavLink>
            </div>

            {/* Контакты и соцсети */}
            <div className="flex flex-col items-end gap-5">
              <div className="flex gap-5">
                <SocialLink href="https://vk.com/voxkemerovo" type="vk" />
                <SocialLink
                  href="https://t.me/voxmusickemerovo"
                  type="telegram"
                />
              </div>
              <a
                href="tel:+79059169286"
                className="text-[#dbdbdb] hover:text-white transition-colors text-sm"
              >
                +7 905 916-92-86
              </a>
              <a
                href="mailto:voxmusickemerovo@gmail.com"
                className="text-[#dbdbdb] hover:text-white transition-colors text-sm"
              >
                voxmusickemerovo@gmail.com
              </a>
            </div>

            {/* Политика конфиденциальности */}
            <PrivacyLink href="/personal" />
          </div>
        </div>

        {/* Блок о разработчике */}
        {/* Блок о разработчике - альтернативная версия без кастомных классов */}
        <div className="py-6 border-t border-[#dbdbdb]/10">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-0 sm:justify-between">
            <span className="text-[#dbdbdb]/40 text-xs uppercase tracking-wider text-center sm:text-left">
              Разработка сайта
            </span>
            <a
              href="https://virlab42.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 bg-[#dbdbdb]/5 rounded-lg hover:bg-[#dbdbdb]/10 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto max-w-full"
              aria-label="Сайт разработчика"
            >
              <div className="bg-[#dbdbdb]/10 p-1 sm:p-1.5 rounded-md group-hover:bg-[#FFA6D0]/10 transition-colors flex-shrink-0">
                <img
                  src="/site.png"
                  alt="Логотип разработчика"
                  className="h-9 sm:h-6 md:h-7 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1 sm:flex-initial">
                <span className="text-white font-semibold text-sm sm:text-base group-hover:text-[#FFA6D0] transition-colors truncate">
                  Вирлаб
                </span>
                <span className="text-[#dbdbdb]/60 text-[12px] sm:text-xs">
                  Создание и продвижение сайтов
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Компонент для навигационных ссылок с анимацией подчеркивания
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-[#dbdbdb] no-underline font-medium text-base w-fit pb-1
                 bg-gradient-to-r from-[#FFA6D0] to-[#FFA6D0] bg-no-repeat 
                 bg-[length:0_2px] bg-bottom hover:bg-[length:100%_2px] 
                 hover:text-white transition-all duration-300"
    >
      {children}
    </Link>
  );
}

// Компонент для ссылки политики конфиденциальности
function PrivacyLink({ href }) {
  return (
    <a
      href={href}
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#сonfidentiality"
      className="text-[#FFA6D0] no-underline font-normal text-base w-fit pb-1
                 bg-gradient-to-r from-[#FFA6D0] to-[#FFA6D0] bg-no-repeat 
                 bg-[length:0_2px] bg-bottom hover:bg-[length:100%_2px] 
                 hover:text-white transition-all duration-300
                 lg:self-auto self-end"
    >
      Политика конфиденциальности
    </a>
  );
}

// Компонент для социальных ссылок с иконками
function SocialLink({ href, type }) {
  const vkIcon = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 48C0 25.3726 0 14.0589 7.02944 7.02944C14.0589 0 25.3726 0 48 0H52C74.6274 0 85.9411 0 92.9706 7.02944C100 14.0589 100 25.3726 100 48V52C100 74.6274 100 85.9411 92.9706 92.9706C85.9411 100 74.6274 100 52 100H48C25.3726 100 14.0589 100 7.02944 92.9706C0 85.9411 0 74.6274 0 52V48Z"
        fill="currentColor"
      />
      <path
        d="M53.2082 72.042C30.4165 72.042 17.4167 56.417 16.875 30.417H28.2916C28.6666 49.5003 37.0831 57.5836 43.7498 59.2503V30.417H54.5001V46.8752C61.0835 46.1669 67.9993 38.667 70.3326 30.417H81.083C79.2913 40.5837 71.7913 48.0836 66.4579 51.1669C71.7913 53.6669 80.3334 60.2086 83.5834 72.042H71.7497C69.208 64.1253 62.8751 58.0003 54.5001 57.1669V72.042H53.2082Z"
        fill="#181f24"
      />
    </svg>
  );

  const telegramIcon = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="500" cy="500" r="500" fill="currentColor" />
      <path
        d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
        fill="#181f24"
      />
    </svg>
  );

  return (
    <Link
      href={href}
      className="text-[#dbdbdb] hover:text-white transition-colors"
    >
      {type === "vk" ? vkIcon : telegramIcon}
    </Link>
  );
}

export default Footer;
