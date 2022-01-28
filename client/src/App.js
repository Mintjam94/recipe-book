import "./App.css";
import Landing from "./components/Landing";
import CreateRecipe from "./components/recipe/CreateRecipe";

function App() {
    return (
        <div className="App">
            <Landing />
            <CreateRecipe />
        </div>
    );
}

export default App;
