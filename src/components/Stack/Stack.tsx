import { StackStyled } from './StackStyled';

import Title from '../ui/Title/Title';

const Stack = ({ title, text }: Props) => {
  return (
    <StackStyled>
      <img src="/tic.png" alt="tic" />
      <figure>
        <Title text={title}></Title>
        <p>{text}</p>
      </figure>
    </StackStyled>
  );
};

export type Props = {
  title: string;
  text: string;
};

export default Stack;
