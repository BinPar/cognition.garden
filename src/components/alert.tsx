import cn from 'classnames';
import Container from './container';

interface Props {
  preview: boolean;
}

const Alert = ({ preview }: Props): JSX.Element => (
  <div
    className={cn('border-b', {
      'bg-accent-7 border-accent-7 text-white': preview,
      'bg-accent-1 border-accent-2': !preview,
    })}
  >
    <Container>
      <div className="py-2 text-center text-sm">
        {preview ? (
          <>
            This page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </>
        ) : (
          <>
            El código fuente de esta documentación está{' '}
            <a
              href="https://github.com/BinPar/cognition.garden"
              className="underline hover:text-success duration-200 transition-colors"
            >
              disponible en GitHub
            </a>
            .
          </>
        )}
      </div>
    </Container>
  </div>
);

export default Alert;
