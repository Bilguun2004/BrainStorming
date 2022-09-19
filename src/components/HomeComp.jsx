
const HomeComp = ({position,img,text}) =>{
return(
    <div  className={position?'Home-3':'HomeRight'}>
          <div className="Home-3-child">
          </div>
          <div className="Home-3-child-2">
            <div className="Home-3-big-text">
            Simple task management
            </div>
            <div className="Home-3-small-text">
            {text}
            </div>
            <div className="Home-3-learnmore">
            Learn more
            </div>
          </div>
        </div>
)
}
export default HomeComp