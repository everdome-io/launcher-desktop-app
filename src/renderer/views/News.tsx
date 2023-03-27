import { FC } from 'react';
import './News.css';
import twitterIcon from 'assets/images/social-icons/twitter.png';
import discordIcon from 'assets/images/social-icons/discord.png';
import telegramIcon from 'assets/images/social-icons/telegram.png';
import telegramAccouncementsIcon from 'assets/images/social-icons/telegram_accouncements.png';
import youtubeIcon from 'assets/images/social-icons/youtube.png';
import instagramIcon from 'assets/images/social-icons/instagram.png';
import linkedinIcon from 'assets/images/social-icons/linkedin.png';
import newsImage1 from 'assets/images/news/1.png';
import newsImage2 from 'assets/images/news/2.png';
import newsImage3 from 'assets/images/news/3.png';
const newsData = [
  {
    id: 1,
    date: 'August 29, 2022',
    title: 'Sneak Peek, Everdome Phoenix Passenger Cabins',
  },
  {
    id: 2,
    date: 'August 29, 2022',
    title:
      'Valtteri Bottas And Zhou Guanyu Lead Everdome’s Metaverse VR Experience Debut',
  },
  {
    id: 3,
    date: 'August 29, 2022',
    title: 'Welcoming Everdomes New Pioneers',
  },
];
const newsImages = [newsImage1, newsImage2, newsImage3];

export const News: FC = () => {
  return (
    <section className="News">
      <div className="NewsHeader">
        <h2>News</h2>
        <span className="separator"></span>
        <div className="Social">
          <a href="#">
            <img className="SocialIcon" src={discordIcon} alt="discord" />
          </a>
          <a href="#">
            <img className="SocialIcon" src={telegramIcon} alt="telegram" />
          </a>
          <a href="#">
            <img
              className="SocialIcon"
              src={telegramAccouncementsIcon}
              alt="telegram_accouncements"
            />
          </a>
          <a href="#">
            <img className="SocialIcon" src={linkedinIcon} alt="linkedin" />
          </a>
          <a href="#">
            <img className="SocialIcon" src={youtubeIcon} alt="youtube" />
          </a>
          <a href="#">
            <img className="SocialIcon" src={instagramIcon} alt="instagram" />
          </a>
          <a href="https://twitter.com/everdome">
            <img className="SocialIcon" src={twitterIcon} alt="twitter" />
          </a>
        </div>
      </div>
      <div className="NewsList">
        {newsData.map((newsItem) => (
          <div className="NewsItem" key={newsItem.id}>
            <img
              className="NewsImage"
              src={newsImages[newsItem.id - 1]}
              alt="news"
            />
            <div className="NewsDate">{newsItem.date}</div>
            <div className="NewsTitle">{newsItem.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
