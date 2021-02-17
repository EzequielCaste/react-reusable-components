import Head from 'next/head';
import { Button } from '../components/Button';
import { Footer } from '../components/Footer';

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
      <h1>Buttons</h1>
      <code>{`<Button />`}</code>
      <Button />

      <code>{`<Button variant="outline" />`}</code>
      <Button variant="outline" />

      <code>{`<Button variant="text" />`}</code>
      <Button variant="text" />

      <code>{`<Button disableShadow />`}</code>
      <Button disableShadow />

      <code>{`<Button disabled />`}</code>
      <Button disabled />

      <code>{`<Button variant="text" disabled />`}</code>
      <Button variant="text" disabled />

      <code>{`<Button startIcon="local_grocery_store" />`}</code>
      <Button startIcon="local_grocery_store" />

      <code>{`<Button endIcon="local_grocery_store" />`}</code>
      <Button endIcon="local_grocery_store" />

      <code>{`<Button size="sm" />`}</code>
      <Button size="sm" />
      <code>{`<Button size="md" />`}</code>
      <Button size="md" />
      <code>{`<Button size="lg" />`}</code>
      <Button size="lg" />

      <code>{`<Button color="default" />`}</code>
      <Button color="default" />
      <code>{`<Button color="primary" />`}</code>
      <Button color="primary" />
      <code>{`<Button color="secondary" />`}</code>
      <Button color="secondary" />
      <code>{`<Button color="danger" />`}</code>
      <Button color="danger" />
      <Footer />
    </div>
  );
}
