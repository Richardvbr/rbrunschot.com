import ConnectLinks from './ConnectLinks';

const Links = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <div className="flex flex-col items-center">
        <h1
          className="animate-in mt-4"
          style={{ '--index': 1 } as React.CSSProperties}
        >
          Richard van Brunschot
        </h1>
        <p
          className="animate-in text-secondary mt-2 max-w-sm text-center"
          style={{ '--index': 1 } as React.CSSProperties}
        >
          Front-end Engineer who loves building cool things with code. You can
          connect with me using the links below.
        </p>
        <div
          className="animate-in w-full"
          style={{ '--index': 2 } as React.CSSProperties}
        >
          <ConnectLinks filled center className="mt-8 lg:mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Links;
