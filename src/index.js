import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="main-content">
      <div>
        <img
          src="./static/svg/header-logo-desktop-sticky.svg"
          alt="Home"
          style={{ margin: 15, width: 125 }}
        />
      </div>
      <div className="game-banner-2022 fflive-mobile">
        <h1 className="sr-only">Fantazzie Live</h1>
        <img
          src="./static/svg/bg-sm.svg"
          className="game-banner-2022__bg hide-for-large"
          alt=""
        />
        <img
          src="./static/svg/bg-lg.svg"
          className="game-banner-2022__bg show-for-large"
          alt=""
        />
        <img
          src="./static/svg/line-lg.svg"
          className="game-banner-2022__line show-for-large"
          alt=""
          style={{
            opacity: 1,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            visibility: "visible",
          }}
        />
        <img
          src="./static/svg/top-left-sm.svg"
          className="game-banner-2022__top-left hide-for-large"
          alt=""
          style={{
            opacity: 1,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            visibility: "visible",
          }}
        />
        <img
          src="./static/svg/top-left-lg.svg"
          className="game-banner-2022__top-left show-for-large"
          alt=""
          style={{
            opacity: 1,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            visibility: "visible",
          }}
        />
        <div className="row hide-for-large game-banner-2022__title-wrapper">
          <div className="columns">
            <div
              className="game-banner-2022__logo-wrapper"
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                visibility: "visible",
              }}
            >
              <img
                src="./static/svg/fantazzie.svg"
                className="game-banner-2022__logo"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row game-banner-2022__row">
          <div className="game-banner-2022__image-wrapper">
            <picture>
              <source
                srcSet="./static/img/fflive-img-001-sm.jpg"
                type="image/webp"
              />
              <img
                className="game-banner-2022__image hide-for-medium"
                width={600}
                height={496}
                src="./static/img/fflive-img-001-sm.jpg"
                alt=""
                style={{ opacity: 1, visibility: "visible" }}
              />
            </picture>
            <picture>
              <source
                srcSet="./static/img/fflive-img-001-lg.jpg"
                type="image/webp"
              />
              <img
                className="game-banner-2022__image show-for-medium"
                width={1680}
                height={1286}
                src="./static/img/fflive-img-001-lg.jpg"
                alt=""
                style={{ opacity: 1, visibility: "visible" }}
              />
            </picture>
          </div>
          <div
            className="columns small-centered medium-10 large-uncentered large-6 game-banner-2022__content-wrapper"
            style={{ visibility: "visible" }}
          >
            <div
              className="game-banner-2022__logo-wrapper show-for-large"
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                visibility: "visible",
              }}
            >
              <img
                src="./static/svg/fantazzie.svg"
                className="game-banner-2022__logo"
                alt=""
              />
            </div>
            <div
              className="copy game-banner-2022__content"
              style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              <p>
                Futbolun keyfine giden en hızlı yolu istediğin zaman istediğin
                yerde deneyimle. Serinin en sürükleyici ve en kapsamlı bu
                sürümünde daha önce hiç olmadığı kadar fazla ülkede izini bırak.
              </p>
            </div>
            <div
              className="game-banner-2022__plat-icons plat-icons-2022 game-banner-2022__animated-icons"
              style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              <img
                src="./static/svg/plat-appstore-white.svg"
                className="plat-icons-2022__icon"
                alt="Apple app store"
              />
              <img
                src="./static/svg/plat-googleplay-white.svg"
                className="plat-icons-2022__icon"
                alt="Google Play"
              />
            </div>
            <div
              className="game-banner-2022__app-store-buttons game-banner-2022__animated-buttons"
              style={{ opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }}
            >
              <a
                className="button button--logo"
                href="/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src="./static/svg/ios-app-store-tr.svg" alt="App Store" />
              </a>
              <a
                className="button button--logo"
                href="/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <img src="./static/svg/google-play-tr.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="c-features-2022">
        <img
          src="./static/svg/bg-sm(1).svg"
          className="c-features-2022__bg hide-for-medium"
          alt=""
        />
        <img
          src="./static/svg/bg-lg(1).svg"
          className="c-features-2022__bg show-for-medium"
          alt=""
        />
        <img
          src="./static/svg/top-left-lg(1).svg"
          className="c-features-2022__tl show-for-medium"
          alt=""
        />
        <img
          src="./static/svg/right-lg.svg"
          className="c-features-2022__tr show-for-medium"
          alt=""
        />
        <div className="c-features-2022__content-wrapper">
          <div className="row">
            <div className="columns small-centered large-9 c-features-2022__content">
              <h2 className="c-features-2022__title formatted-title">
                <i>HIZLI</i> FUTBOL MENAJERLİĞİ
              </h2>
              <div className="c-features-2022__abstract">
                <p>
                  Detaydan ödün vermeden basitlik. Futbol menajerlik ihtiyacını
                  hemen gidermen için.
                </p>
              </div>
            </div>
          </div>
          <div className="row c-features-2022__boxes">
            <div className="columns medium-4 c-feature-box-2022">
              <div className="c-feature-box-2022__image-wrapper">
                <img
                  src="./static/img/fflive-img-002.jpg"
                  className="c-feature-box-2022__image hide-for-medium"
                  alt="feature-box"
                />
                <img
                  src="./static/img/fflive-img-002-0.jpg"
                  className="c-feature-box-2022__image show-for-medium"
                  alt="feature-box"
                />
              </div>
              <h2 className="c-feature-box-2022__title">
                DÜNYANIN EN İYİ KULÜPLERİNİ YÖNET
              </h2>
              <div className="c-feature-box-2022__copy">
                <p>
                  25 ülkeden dünyanın en büyük ligleri parmaklarının ucunda.
                  Mobil oyunlarda görülmemiş bir çeşitlilik. Dünyadaki en iyi
                  oyuncuları ve genç yetenekleri takımına getir ve takımını
                  bambaşka seviyelere çıkart.
                </p>
              </div>
            </div>
            <div className="columns medium-4 c-feature-box-2022">
              <div className="c-feature-box-2022__image-wrapper">
                <img
                  src="./static/img/fflive-img-003.jpg"
                  className="c-feature-box-2022__image hide-for-medium"
                  alt="feature-box"
                />
                <img
                  src="./static/img/fflive-img-003-0.jpg"
                  className="c-feature-box-2022__image show-for-medium"
                  alt="feature-box"
                />
              </div>
              <h2 className="c-feature-box-2022__title">
                EN MEŞHUR TAKTİKLERİ YENİDEN OLUŞTUR
              </h2>
              <div className="c-feature-box-2022__copy">
                <p>
                  Dünyanın en başarılı sistemlerine göre şekillendirilen
                  taktiksel şablonlar hemen oyuna başlayıp hızla tarzını ortaya
                  koymanı sağlıyor. Takımını ligin zirvesine uçuracak taktikleri
                  bir araya getirerek farkını göster.
                </p>
              </div>
            </div>
            <div className="columns medium-4 c-feature-box-2022">
              <div className="c-feature-box-2022__image-wrapper">
                <img
                  src="./static/img/fflive-img-004.jpg"
                  className="c-feature-box-2022__image hide-for-medium"
                  alt="feature-box"
                />
                <img
                  src="./static/img/fflive-img-004-0.jpg"
                  className="c-feature-box-2022__image show-for-medium"
                  alt="feature-box"
                />
              </div>
              <h2 className="c-feature-box-2022__title">
                MAÇI İZLEMEK İÇİN EN GÜZEL YER
              </h2>
              <div className="c-feature-box-2022__copy">
                <p>
                  Maç günü şöleninin tadını çıkart ve yukarıdan gözüken dijital
                  yedek kulübesinde yerini al. Takımın o çok değerli üç puanı
                  garantilemek için çabalarken aksiyonu takip et ve planlarının
                  gerçekleşmesine şahit ol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-2022">
        <picture>
          <img
            className="cover-area video-2022__image"
            width={1920}
            height={598}
            src="./static/img/fflive-img-007.jpg"
            alt=""
          />
        </picture>
        <div className="video-2022__content-wrapper">
          <div className="video-2022__content">
            <button
              className="button-fflive button-fflive--skewed video-2022__play-btn"
              data-open="video109227430"
              aria-controls="video109227430"
              aria-haspopup="true"
              tabIndex={0}
            >
              <img src="./static/svg/play-icon-white.svg" alt="play video" />
              <span> OYNA </span>
            </button>
          </div>
        </div>
      </div>
      <div className="gp-image-text-2022">
        <div className="gp-image-text-2022__bg" />
        <img
          src="./static/svg/top-right-sm.svg"
          className="gp-image-text-2022__top-right hide-for-medium"
          alt=""
          style={{
            opacity: 1,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            visibility: "visible",
          }}
        />
        <img
          src="./static/svg/top-right-lg.svg"
          className="gp-image-text-2022__top-right show-for-medium"
          alt=""
          style={{
            opacity: 1,
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            visibility: "visible",
          }}
        />
        <div className="row gp-image-text-2022__row">
          <div className="gp-image-text-2022__image-container">
            <img
              src="./static/img/fflive-img-005.jpg"
              className="gp-image-text-2022__image"
              alt=""
              style={{ opacity: 1, visibility: "visible" }}
            />
          </div>
          <div className="columns large-6 gp-image-text-2022__content-wrapper">
            <h2
              className="gp-image-text-2022__title formatted-title"
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                visibility: "visible",
              }}
            >
              EKİP KURMAK İÇİN <i>YENİ ARAÇLAR</i>
            </h2>
            <div
              className="copy gp-image-text-2022__content"
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                visibility: "visible",
              }}
            >
              <div className="gp-image-text-2022__abstract" />
              <p>
                Gözlemleme ve transferlere yapılan köklü değişiklikler oyundaki
                en büyük yetenekleri bulup ekibine katmayı hiç olmadığı kadar
                kolaylaştırıyor.
              </p>
              <p>
                Diğer bir çok iyileştirme ve düzeltme sayesinde serinin şu ana
                kadarki en pürüzsüz ve sürükleyici oyunu.
              </p>
            </div>
            <div
              className="gp-image-text-2022__buttons"
              style={{
                opacity: 1,
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                visibility: "visible",
              }}
            >
              <a href="/" className="button-fflive button-fflive--skewed">
                <span>YENİLİKLERİ GÖR</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="req-grid-2022__wrapper element">
        <div className="row">
          <div className="columns req-grid-2022">
            <h2 className="req-grid-2022__title formatted-title">UYUMLULUK</h2>
            <ul
              className="tabs req-grid-2022__tabs"
              data-tabs="efqaf5-tabs"
              id="req-tabs"
              data-match-height="true"
              role="tablist"
            >
              <li className="tabs-title is-active" role="presentation">
                <a
                  href="/"
                  aria-selected="true"
                  role="tab"
                  aria-controls="req-tab-1"
                >
                  Akıllı telefon, iPad ve Tablet cihazları
                </a>
              </li>
            </ul>
            <div
              className="tabs-content req-grid-2022__content"
              data-tabs-content="req-tabs"
            >
              <div
                className="tabs-panel is-active"
                id="req-tab-1"
                role="tabpanel"
                aria-hidden="false"
                aria-labelledby="req-tab-1-label"
                style={{ height: 100 }}
              >
                <div className="req-grid-2022__grid row small-up-2 medium-up-1">
                  <div className="columns cols-2">
                    <div className="row medium-up-2 req-grid-2022__grid-row">
                      <div className="req-grid-2022__item columns">
                        <h2>IOS</h2>
                        <p>Minimum: iOS 10 (Metal desteği gereklidir)</p>
                      </div>
                      <div className="req-grid-2022__item columns">
                        <h2>ANDROID</h2>
                        <p>
                          Minimum: 4.4
                          <br />
                          Minimum Çözünürlük: 800x480
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="columns small-centered medium-10 large-8">
                  <div className="req-grid-2022__bottom-text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lp-fflive-2022">
        <img
          src="./static/svg/bg-sm(2).svg"
          className="lp-fflive-2022__bg hide-for-medium"
          alt=""
          width={805}
          height={522}
        />
        <img
          src="./static/svg/bg-md.svg"
          className="lp-fflive-2022__bg show-for-medium hide-for-large"
          alt=""
          width={798}
          height={281}
        />
        <img
          src="./static/svg/bg-lg(2).svg"
          className="lp-fflive-2022__bg show-for-large"
          alt=""
          width={1513}
          height={794}
        />
        <picture>
          <img
            className="lp-fflive-2022__image"
            src="./static/img/fflive-img-006.jpg"
            alt=""
          />
        </picture>
        <img
          src="./static/svg/frills-sm.svg"
          alt=""
          className="lp-fflive-2022__frills hide-for-medium"
          width="393.48"
          height={121}
        />
        <img
          src="./static/svg/frills-md.svg"
          alt=""
          className="lp-fflive-2022__frills show-for-medium hide-for-large"
          width={768}
          height={100}
        />
        <img
          src="./static/svg/frills-lg.svg"
          alt=""
          className="lp-fflive-2022__frills show-for-large"
          width="326.648"
          height={794}
        />
        <div className="row lp-fflive-2022__row">
          <div className="columns small-centered large-uncentered lp-fflive-2022__content-wrapper">
            <picture>
              <source
                srcSet="./static/svg/logo-white.svg"
                width={632}
                height={186}
                type="image/webp"
              />
              <img
                src="./static/svg/logo-white.svg"
                width={632}
                height={186}
                className="lp-fflive-2022__logo"
                alt="lp-fflive-2022__logo"
              />
            </picture>
            <div className="large-7">
              <h2 className="lp-fflive-2022__title formatted-title">
                TAKIMA KATILIN <br />
                <i>ÖDÜL KAZANIN</i>
              </h2>
            </div>
            <div className="large-6">
              <div className="copy lp-fflive-2022__copy">
                <p>
                  FFLIVE'e kayıt olun ve özellik duyurularına ve oyun
                  bilgilerine herkesten önce erişin, oyun tercihlerinize göre
                  uyarlanan içeriği ve üyelere özel ödül ve teşvikleri alın.
                </p>
              </div>
              <div className="lp-fflive-2022__buttons">
                <a
                  href="/"
                  className="button-fflive button-fflive--skewed lp-fflive-2022__button"
                >
                  <span>FFLIVE'E KAYDOL</span>
                </a>
              </div>
              <div className="lp-fflive-2022__bottom-text">
                <p>
                  Zaten üye misiniz?
                  <a href="/">Şimdi giriş yapın</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-cta-2022 social-cta-2022--animate">
        <img
          src="./static/svg/bg-sm(3).svg"
          className="social-cta-2022__bg hide-for-medium"
          alt=""
        />
        <img
          src="./static/svg/bg-md(1).svg"
          className="social-cta-2022__bg show-for-medium hide-for-large"
          alt=""
        />
        <img
          src="./static/svg/bg-lg(3).svg"
          className="social-cta-2022__bg show-for-large"
          alt=""
        />
        <div className="row social-cta-2022__row">
          <div className="columns social-cta-2022__content-wrapper">
            <h2 className="social-cta-2022__title formatted-title">
              <i>FFLive'i</i> Takip Et
            </h2>
            <div className="social-cta-2022__items">
              <div className="social-cta-2022__item-wrapper">
                <a
                  href="/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-cta-2022__item"
                >
                  <img
                    src="./static/svg/facebook-logo-2-white.svg"
                    className="social-cta-2022__icon"
                    alt="Facebook"
                  />
                  <span className="social-cta-2022__item-title sr-only">
                    Facebook
                  </span>
                </a>
              </div>
              <div className="social-cta-2022__item-wrapper">
                <a
                  href="/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-cta-2022__item"
                >
                  <img
                    src="./static/svg/twitter-logo-white.svg"
                    className="social-cta-2022__icon small-icon"
                    alt="Twitter"
                  />
                  <span className="social-cta-2022__item-title sr-only">
                    Twitter
                  </span>
                </a>
              </div>
              <div className="social-cta-2022__item-wrapper">
                <a
                  href="/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-cta-2022__item"
                >
                  <img
                    src="./static/svg/youtube-logo-white.svg"
                    className="social-cta-2022__icon large-icon"
                    alt="YouTube"
                  />
                  <span className="social-cta-2022__item-title sr-only">
                    YouTube
                  </span>
                </a>
              </div>
              <div className="social-cta-2022__item-wrapper">
                <a
                  href="/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="social-cta-2022__item"
                >
                  <img
                    src="./static/svg/instagram-logo-white.svg"
                    className="social-cta-2022__icon small-icon"
                    alt="Instagram"
                  />
                  <span className="social-cta-2022__item-title sr-only">
                    Instagram
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/" className="sticky-fflive-bar">
        <div className="sticky-fflive-bar__content">
          <p className="sticky-fflive-bar__label" id="sticky_bar">
            <img src="./static/svg/logo-white.svg" alt="logo-white" />
            Kadrosuna Katılın
          </p>
        </div>
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
