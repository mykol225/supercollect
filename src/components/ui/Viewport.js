import Canvas from "./Canvas";
import UploadView from "./UploadView";

const Viewport = props => {
  const view = props.view

  return(
    <div id='viewport' className=''>
      {view === "canvas" ? <Canvas /> : <UploadView />}
    </div>
  )
}

export default Viewport