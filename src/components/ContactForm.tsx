import { useEffect, useState } from "react";
import { toggle, mutateContact, ContactState } from "../store/contactSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Input from "./Input";

function ContactForm() {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<ContactState & { isSubmit?: boolean }>({
    email: "",
    name: "",
    isSubmit: false,
  });
  const { show, contact } = useAppSelector((state) => state.contacts);

  useEffect(() => {
    setState(contact);
  }, [contact]);
  const handleSubmit = () => {
    if (state.email && state.name) {
      dispatch(mutateContact(state));
      dispatch(toggle(false));
      setState({
        ...state,
        isSubmit: false,
      });
    } else {
      setState({
        ...state,
        isSubmit: true,
      });
    }
  };

  const handleClose = () => {
    dispatch(toggle(false));
    mutateContact({
      name: "",
      email: "",
    });
  };
  return (
    <div className="font-sans bg-gray-100 flex items-center justify-center h-screen">
      <div x-data={show}>
        <div
          x-show="showPrivacyPolicy"
          className="fixed z-10 inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div
            className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-md w-full m-4"
            x-transition:enter="transition ease-out duration-300 transform opacity-0 scale-95"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-200 transform opacity-100 scale-100"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
            x-cloak
          >
            <div className="px-6 py-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {" "}
                Contact
              </h3>
            </div>
            <div
              className="prose max-w-screen-md p-6 overflow-y-auto"
              style={{
                maxHeight: "70vh",
                backgroundColor: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: "0.375rem",
                boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <section className="bg-white overflow-hidden relative z-10">
                <div className="container">
                  <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="w-full px-4">
                      <div className="bg-white relative rounded-lg p-8 sm:p-12">
                        <form>
                          <div className="mb-6">
                            <Input
                              placeholder="Your Name"
                              value={state.name}
                              className={state.isSubmit ? "border-red-500" : ""}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="mb-6">
                            <Input
                              type="email"
                              value={state.email}
                              className={state.isSubmit ? "border-red-500" : ""}
                              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                              placeholder="Your Email"
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex align-items justify-end p-4 gap-4 flex-row">
              <button
                onClick={handleClose}
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400  sm:w-auto sm:text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
