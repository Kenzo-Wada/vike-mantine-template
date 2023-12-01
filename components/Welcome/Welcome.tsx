import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export { Welcome }

function Welcome() {
  console.log(classes)
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Next.js project includes a minimal setup for server side rendering, if you want
        to learn more on Mantine + React + Vike integration follow{' '}
        <Anchor href="https://mantine.dev/guides" size="lg">
          this guide
        </Anchor>
        . To get started edit index.page.tsx file.
      </Text>
    </>
  );
}