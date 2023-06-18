import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  // console.log('******props:',allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* personal intro */}
      <section className={utilStyles.headingMd}>
        <p>Peace is Priceless.</p>
        <p>Hello, here you can find some of my tools I Create.</p>
      </section>

      {/* tools list */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>🔨Tool</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`https://list.joystone.top`} target="_blank">
              ✅ Progress List
            </Link>
          </li>
        </ul>
      </section>

      {/* links */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>🔗Link</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link
              href={`https://www.youtube.com/channel/UCfm6J987OKM-TMk-zAWtWrw`}
              target="_blank"
            >
              Youtube Channel - Joy Stone
            </Link>
            <br />
            <small className={utilStyles.lightText}>@joystone63</small>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`https://github.com/JimSunJing`} target="_blank">
              GitHub - JimSunJing
            </Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`https://fluxus.substack.com/`} target="_blank">
              Blog - Fluxus(Chinese)
            </Link>
            <br />
            <small className={utilStyles.lightText}>On Substack</small>
          </li>
        </ul>
      </section>

      {/* blog markdown list 
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog🔗</h2>
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
      </section>*/}
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
