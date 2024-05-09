import ElementsArrayUpdater from "./ElementsArrayUpdater"
import TodoList from "./TodoList"
import InputUpdater from "./components/InputUpdater"
import ListUpdater from "./components/ListUpdater"
import ObjectUpdater from "./components/ObjectUpdater"

const UpdaterFunctions = () => {
  return (
    <>
        <TodoList />
        <hr />
        <ElementsArrayUpdater />
        <hr />
        <ListUpdater />
        <hr />
        <ObjectUpdater />
        <hr />
        <InputUpdater />
    </>
  )
}

export default UpdaterFunctions