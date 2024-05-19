import dynamic from 'next/dynamic';

const CustomFaBars = dynamic(() =>
  import('react-icons/fa').then((icon) => icon.FaBars)
);

const Question = () => {
  return (
    <h3>
      Let&apos;s go for a <CustomFaBars />?
    </h3>
  );
};

export default Question;
