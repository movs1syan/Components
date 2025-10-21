import CollapsiblePanel from "./components/CollapsiblePanel";

const App = () => {
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

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const items = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];

  return (
    <div className="mt-20">
      <CollapsiblePanel items={items} defaultActiveKeys={["1", "3"]} />
    </div>
  );
};

export default App;