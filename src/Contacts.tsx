import { useAppDispatch, useAppSelector } from "./store/hooks";
import ContactForm from "./components/ContactForm";
import Button from "./components/Button";
import Table from "./components/Table";
import { toggle } from "./store/contactSlice";

function Contacts() {
  const dispatch = useAppDispatch();
  const { list, show } = useAppSelector((state) => state.contacts);
  return (
    <>
      {show && <ContactForm />}

      <div className="flex justify-end m-5">
        <Button onClick={() => dispatch(toggle(true))}>Add Contact</Button>
      </div>
      <Table data={list} />
    </>
  );
}

export default Contacts;
