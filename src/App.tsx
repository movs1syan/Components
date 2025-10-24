import React from "react";
import {useState} from "react";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import { dropdownItems, collapsiblePanelItems, tabItems } from "./datas";
import EmptyState from "./components/EmptyState";
import Tab from "./components/Tab";
import Notification from "./components/Notification";
import Spinner from "./components/Spinner";
import Drawer from "./components/Drawer";
import Modal from "./components/Modal";
import Form from "./components/Form";
import {Eye, EyeOff} from "lucide-react";
import CollapsiblePanel from "./components/CollapsiblePanel";
import { v4 as uuid } from "uuid";
import notification from "./components/Notification";


const App = () => {
  // NOTIFICATION --------------
  const [notifications, setNotifications] = useState([]);
  const addNotification = () => {
    const id = uuid();
    const newItem: NotificationItem = {
      id,
      type: "success",
      message: "Success!",
      description: "Your action was completed successfully.",
    };
    setNotifications((prev) => [...prev, newItem]);

    setTimeout(() => onClose(id), 3000);
  };

  const onClose = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  // DRAWER
  //  const [open, setOpen] = useState(false);

  // FORM
  // const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      {/*<Button type="primary" icon="MessageCircle">*/}
      {/*  Show Notifications*/}
      {/*</Button>*/}

      {/*<Dropdown menu={dropdownItems} placement="top" trigger="click" arrow>*/}
      {/*  Dropdown*/}
      {/*</Dropdown>*/}

      {/*<EmptyState description="Not found" image="/public/arrow.png" />*/}

      {/*<CollapsiblePanel items={collapsiblePanelItems} />*/}

      {/*<Tab tabs={tabItems} />*/}

      {/* NOTIFICATION */}
      <Button color="green" icon="MessageCircle" onClick={addNotification}>
        Show notification
      </Button>
      <Notification notifications={notifications} onClose={onClose} />

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