import React, { useState } from "react";
import GlobalModal from "./components/modal";

const App = () => {
   const [data, setData] = useState([]);
   const [open, setOpen] = useState(false);
   const [update, setUpdate] = useState({});
   const deleteData = (id) => {
      let new_data = data.filter((item) => item.id !== id);
      setData([...new_data]);
   };
   const updateData = (item) => {
      setUpdate(item);
      setOpen(true);
   };
   const toggle = () => {
      setOpen(false);
      setUpdate({});
   };
   return (
      <div className="container">
         <GlobalModal
            open={open}
            toggle={toggle}
            data={data}
            setData={setData}
            update={update}
         />
         <div className="row mt-5">
            <div className="col-md-4">
               <h2>Add Student</h2>
               <button
                  className="btn btn-success"
                  onClick={() => setOpen(true)}
               >
                  Open Modal
               </button>
            </div>
            <div className="col-md-8">
               <table className="table table-bordered">
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map((item, index) => (
                        <tr key={index}>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.age}</td>
                           <td>{item.phone}</td>
                           <td>{item.address}</td>
                           <td>
                              <button
                                 className="btn btn-danger"
                                 onClick={() => deleteData(item.id)}
                              >
                                 Delete
                              </button>
                              <button
                                 className="btn btn-success"
                                 onClick={() => updateData(item)}
                              >
                                 Edit
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default App;
