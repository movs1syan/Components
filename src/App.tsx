// import Tab from "./components/Tab";
import { useNotification } from "./components/NotificationProvider";
import Button from "./components/Button";

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
  const { show } = useNotification();
  const handleNotify = () => {
    show({
      message: "Success!",
      description: "Your action was completed successfully.",
      type: "success",
    });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <Button type="primary" icon="MessageCircle" onClick={handleNotify}>
        Show notification
      </Button>
    </div>
  );
};

export default App;