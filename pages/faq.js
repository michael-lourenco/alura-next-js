import Head from 'next/head';
import Link from "../src/components/Link";

// console.log('Em modo dev ambos sempre rodam a cada acesso')

//export async function getServerSideProps() {
// console.log('Roda a cada acesso que você recebe')
export async function getStaticProps() {
// console.log('Roda somente em build time')
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(FAQ_API_URL)
    .then(response => response.json())
    .then(data => data)

  return {
    props: {
      faq
    }, // will be passed to the page component as props
  }
}

export default function Faq({ faq }) {
  return (
    <>
      <Head>
        <title>Faq - Alura Cases Campanha</title>
      </Head>
      <div>Faq!</div>
      <Link href="/" > ir para home</Link>
      <ul>
        {faq.map(item => (
          <li key={item.question}>
            <article>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          </li>
        ))}

      </ul>
    </>
  )
}
