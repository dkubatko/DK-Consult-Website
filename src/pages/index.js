import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Link href='/posts/first-post'>
        <a>Link</a>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>Mr. PeePee</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href='quiz'>
        <a>Click me for a quiz!</a>
      </Link>
    </Layout>
  )
}