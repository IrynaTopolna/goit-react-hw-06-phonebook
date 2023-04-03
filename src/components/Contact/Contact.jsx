import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
