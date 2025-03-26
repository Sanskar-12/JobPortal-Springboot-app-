import "./App.css";
import { MantineProvider, Slider } from "@mantine/core";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <h1 className="text-3xl text-blue-800">Hello world!</h1>
      <Slider
        color="blue"
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </MantineProvider>
  );
}

export default App;
