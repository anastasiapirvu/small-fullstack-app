import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>🐾 Meet Furry Queen, the reigning monarch of the purr-fectly charming kingdom known as our living room. With a regal air that rivals even the stuffiest of aristocats, Furry Queen rules her domain with an iron paw, or perhaps more accurately, a velvety paw covered in... tuna juice? Yes, her majesty's demands are as quirky as they are endless. From demanding chin scratches at 3 AM to executing daring leaps onto the kitchen counter to inspect her treats, Furry Queen's antics keep us humans on our toes—and slightly sleep-deprived. So, prepare to be amused and utterly charmed by the one and only Furry Queen, the feline monarch of mayhem and mirth!🐾👑</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
