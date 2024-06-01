import React from "react";
import Button from "./Button";
import { useAppDispatch } from "../store/hooks";
import { toggle, mutateContact, selectedContact } from "../store/contactSlice";

function Table({ data = [] }: { data: any[] }) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-wrap -mx-3 mb-5">
      <div className="w-full max-w-full px-3 mb-6  mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                <span className="mr-3 font-semibold text-dark">Contacts</span>
                <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                  All contacts
                </span>
              </h3>
            </div>
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                  <thead className="align-bottom">
                    <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                      <th className="pb-3 text-start">NAME</th>
                      <th className="pb-3 text-start">EMAIL</th>
                      <th className="pb-3 text-end min-w-[50px]">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => {
                      return (
                        <tr
                          className="border-b border-dashed last:border-b-0"
                          key={item.id}
                        >
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="flex flex-col justify-start">
                                <a className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                                  {item.name}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td className="p-3 pr-0">
                            <span className="font-semibold text-light-inverse">
                              {item.email}
                            </span>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <Button
                              onClick={() => {
                                dispatch(toggle(true));
                                dispatch(selectedContact(item));
                              }}
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
