
import { NewYearButton } from './newyearButton';
import { NewYearContent } from './newyearContent';

const NewYear = ({ style }) => {
  return (
    <NewYearButton
      style={style}
   
    >
      <NewYearContent />
    </NewYearButton>
  );
};

export default NewYear;