import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      followers: 1000,
      likes: 803,
      photos: 1400,
      isFollowing: false
    };
  }
  

  addFollower(){
    console.log('ok');
  }
  render(){


  return (
    <div className= "App">
    <main>
    <div className="card">
      <header>
        <div className="avatar">
        </div>
       
      </header>
       <div className="content">
       <h2>Victor Crest
          <div className="age">26</div>
        </h2> 
        <div className="label">London</div>
        
        <button className="followButton"
        onClick={this.addFollower}>Follow</button>
        
       </div>
      
        <footer>
          <div className="col">
                <h3>{this.state.followers}</h3>
                <div className="statsLabel">Followers</div>
          </div>
          <div className="col">
            <h3>{this.state.likes}</h3>
            <div className="statsLabel">Likes</div>
          </div>
          <div className="col">
            <h3>{this.state.photos}</h3>
            <div className="statsLabel">Photos</div> 
          </div>
         
        </footer>
    </div>
  </main>
  </div>
  );
}
}

export default App;
