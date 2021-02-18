import Head from 'next/head';
import { Footer } from '../components/Footer';
import { Input } from '../components/Input';

export default function Home() {
  return (
    <div className="Container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <h1>Input</h1>
      <code>{`<Input />`}</code>
      <Input />
      <code>{`<Input error />`}</code>
      <Input error />
      <code>{`<Input disabled />`}</code>
      <Input disabled />
      <code>{`<Input helperText='Some interesting text' />`}</code>
      <Input helperText="Some interesting text" />
      <code>{`<Input helperText='Some interesting text' error />`}</code>
      <Input helperText="Some interesting text" error />
      <code>{`<Input startIcon />`}</code>
      <Input startIcon />
      <code>{`<Input endIcon />`}</code>
      <Input endIcon />
      <code>{`<Input value="Text" />`}</code>
      <Input value="Text" />
      <code>{`<Input size='sm' />`}</code>
      <Input size="sm" />
      <code>{`<Input size='md' />`}</code>
      <Input size="md" />
      <code>{`<Input fullWidth />`}</code>
      <Input fullWidth />
      <code>{`<Input multiline row='4' />`}</code>
      <Input multiline row="4" />
      <Footer />
    </div>
  );
}
