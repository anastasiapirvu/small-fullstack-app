import {React, useState} from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  const offerings = ['Toys', 'Tuna', 'Comfy bed'];
  const [count, setCount] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
  ]);

  function handleClick() {
    setCount (count + 1);
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>🐾 Meet Furry Queen, the reigning monarch of the purr-fectly charming kingdom known as our living room. With a regal air that rivals even the stuffiest of aristocats, Furry Queen rules her domain with an iron paw, or perhaps more accurately, a velvety paw covered in... tuna juice? Yes, her majesty's demands are as quirky as they are endless. From demanding chin scratches at 3 AM to executing daring leaps onto the kitchen counter to inspect her treats, Furry Queen's antics keep us humans on our toes—and slightly sleep-deprived. So, prepare to be amused and utterly charmed by the one and only Furry Queen, the feline monarch of mayhem and mirth!🐾👑</p>
      </section>

      <ul>
        {offerings.map((offering) => (
          <li key={offering}>{offering}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Give offering{offerings.map((offering) => (
          <li key={offering}>{offering}</li>
        ))}</button>

      
    </Layout>
  );
}

