import Button from "./components/Button.jsx";

const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <Button type="primary" icon="ShoppingCart">
        Add to Cart
      </Button>
    </div>
  );
};

export default App;