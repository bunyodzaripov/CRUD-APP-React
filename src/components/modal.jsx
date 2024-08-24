import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const GlobalModal = (props) => {
   const { open, toggle, data, setData, update } = props;
   const [form, setForm] = useState({});
   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
      console.log(form);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (update.id) {
         data.map((element) => {
            if (element.id === update.id) {
               element.name = form.name;
               element.age = form.age;
               element.phone = form.phone;
               element.address = form.address;
               setData([...data]);
               toggle();
            }
         });
      } else {
         let payload = { ...form, id: nanoid() };
         let new_data = [...data, { ...payload }];
         setData([...new_data]);
         toggle();
      }
   };
   return (
      <Modal isOpen={open} toggle={toggle}>
         <ModalHeader>
            <h2>Add Students</h2>
         </ModalHeader>
         <ModalBody>
            <form onSubmit={handleSubmit} id="form">
               <input
                  type="text"
                  name="name"
                  defaultValue={update.name}
                  placeholder="name"
                  className="form-control"
                  onChange={handleChange}
               />
               ,
               <input
                  type="number"
                  name="age"
                  defaultValue={update.age}
                  placeholder="age"
                  className="form-control"
                  onChange={handleChange}
               />
               ,
               <input
                  type="text"
                  name="phone"
                  defaultValue={update.phone}
                  placeholder="phone"
                  className="form-control"
                  onChange={handleChange}
               />
               ,
               <input
                  type="text"
                  name="address"
                  defaultValue={update.address}
                  placeholder="address"
                  className="form-control"
                  onChange={handleChange}
               />
            </form>
         </ModalBody>
         <ModalFooter>
            <button className="btn btn-success" form="form">
               Save
            </button>
         </ModalFooter>
      </Modal>
   );
};

export default GlobalModal;
