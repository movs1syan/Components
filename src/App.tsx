// import React from "react";
// import {useState} from "react";
import Button from "./components/Button";
// import Dropdown from "./components/Dropdown"
// import EmptyState from ".components/EmptyState"
// import Tab from "./components/Tab";
// import { useNotification } from "./components/NotificationProvider";
// import Spinner from "./components/Spinner";
// import Drawer from "./components/Drawer";
// import Modal from "./components/Modal";
// import Form from "./components/Form";
// import {Eye, EyeOff} from "lucide-react";

const App = () => {
  // DROPDOWN ----------------------------
  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
  //         1st menu item
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
  //         2nd menu item (disabled)
  //       </a>
  //     ),
  //     disabled: true,
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
  //         3rd menu item (disabled)
  //       </a>
  //     ),
  //     disabled: true,
  //   },
  //   {
  //     key: '4',
  //     danger: true,
  //     label: 'a danger item',
  //   },
  // ];


  // COLLAPSE --------------------------
//   const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
//
//   const items = [
//     {
//       key: '1',
//       label: 'This is panel header 1',
//       children: <p>{text}</p>,
//     },
//     {
//       key: '2',
//       label: 'This is panel header 2',
//       children: <p>{text}</p>,
//     },
//     {
//       key: '3',
//       label: 'This is panel header 3',
//       children: <p>{text}</p>,
//     },
//   ];

  // TAB --------------------------------
  // const items = [
  //   {
  //     key: '1',
  //     label: 'Tab 1',
  //     content: 'Content of Tab Pane 1',
  //   },
  //   {
  //     key: '2',
  //     label: 'Tab 2',
  //     content: 'Content of Tab Pane 2',
  //   },
  //   {
  //     key: '3',
  //     label: 'Tab 3',
  //     content: 'Content of Tab Pane 3',
  //   },
  // ];



  // NOTIFICATION -----------------------------
  // const { show } = useNotification();
  // const handleNotify = () => {
  //   show({
  //     message: "Success!",
  //     description: "Your action was completed successfully.",
  //     type: "success",
  //   });
  // };


  // DRAWER
  //  const [open, setOpen] = useState(false);

  // FORM
  // const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <Button type="primary" icon="MessageCircle">
        Show Notifications
      </Button>

      {/* DROPDOWN */}
      {/*<Dropdown menu={items} placement="bottomLeft" arrow>*/}
      {/*  Dropdown*/}
      {/*</Dropdown>*/}

      {/* NOTIFICATION */}
      {/*<Button type="primary" icon="MessageCircle" onClick={handleNotify}>*/}
      {/*  Show notification*/}
      {/*</Button>*/}

      {/* SPINNER */}
      {/*<Spinner size="large" tip="Loading data..." />*/}

      {/* DRAWER */}
      {/*<Button type="primary" icon="Menu" iconPosition="end" onClick={() => setOpen(true)}>*/}
      {/*  Open Drawer*/}
      {/*</Button>*/}
      {/*<Drawer*/}
      {/*  open={open}*/}
      {/*  onClose={() => setOpen(false)}*/}
      {/*  title="Menu"*/}
      {/*  placement="right"*/}
      {/*  width="400px"*/}
      {/*>*/}
      {/*  <p className="text-gray-700">This is the drawer content.</p>*/}
      {/*</Drawer>*/}

      {/* MODAL */}
      {/*<Button type="primary" icon="AppWindowIcon" onClick={() => setOpen(true)}>*/}
      {/*  Open Modal*/}
      {/*</Button>*/}
      {/*<Modal*/}
      {/*  open={open}*/}
      {/*  onClose={() => setOpen(false)}*/}
      {/*  title="Basic Modal"*/}
      {/*>*/}
      {/*  <p>Some contents...</p>*/}
      {/*  <p>Some contents...</p>*/}
      {/*  <p>Some contents...</p>*/}
      {/*</Modal>*/}

      {/* FORM */}
      {/*<Form*/}
      {/*  initialValues={{ username: "", password: "", remember: false }}*/}
      {/*  rules={{*/}
      {/*    username: [*/}
      {/*      { required: true, message: "Username is required" },*/}
      {/*      { min: 3, message: "Username must be at least 3 characters" },*/}
      {/*    ],*/}
      {/*    password: [*/}
      {/*      { required: true, message: "Password is required" },*/}
      {/*      { min: 6, message: "Password must be at least 6 characters" },*/}
      {/*    ],*/}
      {/*  }}*/}
      {/*  onFinish={(values) => console.log("Success:", values)}*/}
      {/*  onFinishFailed={(errors) => console.log("Errors:", errors)}*/}
      {/*>*/}
      {/*  {({ values, errors, handleChange, handleSubmit }) => (*/}
      {/*  <form*/}
      {/*    onSubmit={handleSubmit}*/}
      {/*    className="flex flex-col gap-5 min-w-100"*/}
      {/*  >*/}
      {/*    /!* Username *!/*/}
      {/*    <label className="flex flex-col gap-2">*/}
      {/*      <span><span className="text-red-600 mr-2">*</span>Username</span>*/}
      {/*      <input*/}
      {/*        name="username"*/}
      {/*        value={values.username}*/}
      {/*        onChange={handleChange}*/}
      {/*        className="rounded-md border border-gray-300 hover:border-blue-500 focus:outline-none*/}
      {/*    focus:border-blue-700 transition-colors duration-300 py-1 px-3"*/}
      {/*        required*/}
      {/*      />*/}
      {/*      {errors.username && (*/}
      {/*        <p className="text-red-600 text-sm">{errors.username}</p>*/}
      {/*      )}*/}
      {/*    </label>*/}

      {/*    /!* Password *!/*/}
      {/*    <label className="flex flex-col gap-2">*/}
      {/*      <span><span className="text-red-600 mr-2">*</span>Password</span>*/}
      {/*      <div className="relative">*/}
      {/*        <input*/}
      {/*          name="password"*/}
      {/*          value={values.password}*/}
      {/*          onChange={handleChange}*/}
      {/*          type={showPassword ? "text" : "password"}*/}
      {/*          className="w-full rounded-md border border-gray-300 hover:border-blue-500*/}
      {/*      focus:outline-none focus:border-blue-700 transition-colors duration-300 py-1 px-3"*/}
      {/*          required*/}
      {/*        />*/}
      {/*        <button*/}
      {/*          type="button"*/}
      {/*          onClick={() => setShowPassword(!showPassword)}*/}
      {/*          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500*/}
      {/*      hover:text-gray-700 focus:outline-none"*/}
      {/*        >*/}
      {/*          {showPassword ? <Eye size={20} className="cursor-pointer" /> : <EyeOff size={20} className="cursor-pointer" />}*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*      {errors.password && (*/}
      {/*        <p className="text-red-600 text-sm">{errors.password}</p>*/}
      {/*      )}*/}
      {/*    </label>*/}

      {/*    /!* Remember Me *!/*/}
      {/*    <label className="flex gap-2 items-center cursor-pointer w-fit">*/}
      {/*      <input*/}
      {/*        type="checkbox"*/}
      {/*        name="remember"*/}
      {/*        checked={values.remember}*/}
      {/*        onChange={handleChange}*/}
      {/*      />*/}
      {/*      <span>Remember me</span>*/}
      {/*    </label>*/}

      {/*    /!* Submit *!/*/}
      {/*    <Button htmlType="submit" type="primary">Submit</Button>*/}
      {/*  </form>*/}
      {/*  )}*/}
      {/*</Form>*/}
    </div>
  );
};

export default App;