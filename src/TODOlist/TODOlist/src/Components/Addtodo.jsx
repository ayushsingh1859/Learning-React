function addtodo(){
    return <div className="container text-center">
 
    <div className="row">
      <div className="col-6"><input type="text" placeholder="Enter TODO here" /></div>
      <div className="col-4"><input type="date" /></div>
      <div className="col-2"><button type="button" className="btn btn-success">Add</button></div>
    </div>
    <div className="row">
      <div className="col-6">Buy Milk</div>
      <div className="col-4"> 14/01/2025</div>
      <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
      
      </div>
    <div className="row">
    <div className="col-6">Watch Movie</div>
      <div className="col-4"> 15/01/2025</div>
      <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
      </div>
  </div>
}

export default addtodo;