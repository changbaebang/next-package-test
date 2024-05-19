import dynamic from 'next/dynamic';

const Empty = () => <></>;

const CustomFaBars = dynamic(async () => {
  try {
    const icon = await import('react-my-icons/fa');
    return icon.FaBars;
  } catch (error) {
    return Empty;
  }
});

const Question = () => {
  return (
    <h3>
      Let&apos;s go for a <CustomFaBars />?
    </h3>
  );
};

export default Question;
