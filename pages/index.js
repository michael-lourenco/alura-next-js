import Link from "../src/components/Link";

function Title({ children,  as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: #e0e0e0;
            font-family: sans-serif;
          }
        `}
      </style>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Title as="h1">Welcome to Next.js!</Title>
      <Link href="/faq"> ir para o faq</Link>
    </>
  );
}

export default HomePage;
