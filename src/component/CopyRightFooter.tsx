function CopyRightFooter({
  className = ' text-yellow-700 font-semibold text-[10px]',
  imageSource = 'midjourney ',
  imageSourceLink = 'https://www.midjourney.com/',
  codropLink = 'https://tympanus.net/codrops/category/tutorials/',
}: {
  codropLink?: string;
  className?: string;
  imageSourceLink: string;
  imageSource: string;
}) {
  return (
    <div
      className={`not-italic capitalize text-center   opacity-50 hover:opacity-100 ${className} cursor-default  `}
    >
      <p>
        created by
        <span
          className="underline hover:opacity-40 px-1"
          title="Upwork profile"
        >
          <a
            href="https://www.upwork.com/freelancers/~01c3b60e1c04398fd9"
            target="_blank"
          >
            Mahdi soultana
          </a>
        </span>
        for learning purposes using{' '}
        <a
          title="Reactjs site "
          className="normal-case underline mx-1 hover:opacity-40"
          href="https://react.dev/"
          target="_blank"
        >{`< React.tsx />`}</a>{' '}
      </p>
      <p>
        images from
        <span
          className="underline hover:opacity-40 px-1"
          title="images Source link"
        >
          <a href={imageSourceLink} target="_blank">
            {imageSource}
          </a>
        </span>
        , thanks to
        <span className="underline hover:opacity-40 px-1" title="Codrops Link">
          <a href={codropLink} target="_blank">
            codrops
          </a>
        </span>
        for this help !
      </p>
    </div>
  );
}

export default CopyRightFooter;
