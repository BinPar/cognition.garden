import Head from 'next/head';
import Container from '../src/components/container';
import Intro from '../src/components/intro';
import Layout from '../src/components/layout';

const Index = (): JSX.Element => (
  <>
    <Layout preview={false}>
      <Head>
        <title>Documentación de EVA-Formación</title>
      </Head>
      <Container>
        <Intro />
      </Container>
    </Layout>
  </>
);

export default Index;
