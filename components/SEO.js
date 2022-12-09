import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="icon" type="image/x-icon" href="https://cdn.discordapp.com/attachments/1040933844846641173/1042764310696427650/galaxytech_logo.png" />
    </Head>
  );
}
