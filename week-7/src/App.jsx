
import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b>
      {count}
    </b>
    <EventCoutRenderer/>
  </div>

}
function EventCoutRenderer(){
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven?"It is Even": null}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  // setcount( count +1) 
  // setCount( c=> c+1);
  // setCount(function (c){ return c+1})
  return <div>
    <button onClick={() => {
      setCount(count => count+1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App