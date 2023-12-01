import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import '@mantine/core/styles.css';

interface Props {
  children: React.ReactNode
}

export { Layout }

function Layout(props: Props) {
  return (
    <MantineProvider theme={theme}>
      {props.children}
    </MantineProvider>
  );
}
