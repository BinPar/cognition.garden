import Alert from './alert';
import Footer from './footer';

interface Props {
  // eslint-disable-next-line react/require-default-props
  preview: boolean;
  children: React.ReactNode;
}

const Layout = ({ preview, children }: Props): JSX.Element => (
  <>
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
