import Contact from 'components/Contact';
import { Item, List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);

  const filtredNames = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <>
      <List>
        {filtredNames
          ? filtredNames.map(contact => (
              <Item key={contact.id}>
                <Contact
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                />
              </Item>
            ))
          : contacts.map(contact => (
              <Item key={contact.id}>
                <Contact
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                />
              </Item>
            ))}
      </List>
    </>
  );
};

export default ContactsList;
