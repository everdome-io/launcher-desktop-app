import { FC } from 'react';
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
import styles from './News.module.css';

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
    <section className={styles.News}>
      <div className={styles.NewsHeader}>
        <h2>News</h2>
        <span className={styles.separator} />
        <div className={styles.Social}>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={discordIcon}
              alt="discord"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={telegramIcon}
              alt="telegram"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={telegramAccouncementsIcon}
              alt="telegram_accouncements"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={linkedinIcon}
              alt="linkedin"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={youtubeIcon}
              alt="youtube"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={instagramIcon}
              alt="instagram"
            />
          </a>
          <a href="https://twitter.com/everdome">
            <img
              className={styles.SocialIcon}
              src={twitterIcon}
              alt="twitter"
            />
          </a>
        </div>
      </div>
      <div className={styles.NewsList}>
        {newsData.map((newsItem) => (
          <div className={styles.NewsItem} key={newsItem.id}>
            <img
              className={styles.NewsImage}
              src={newsImages[newsItem.id - 1]}
              alt="news"
            />
            <div className={styles.NewsDate}>{newsItem.date}</div>
            <div className={styles.NewsTitle}>{newsItem.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
