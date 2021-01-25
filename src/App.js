import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      followers: 1000,
      likes: 803,
      photos: 1400,
      isFollowing: false,
      followButtonText: ''
    };
    this.addFollower = this.addFollower.bind(this);
    this.removeFollower = this.removeFollower.bind(this);
  }
  
  componentDidUpdate(){
   
  }
  componentDidMount(){
  this.checkFollowingStatus();
  }


  checkFollowingStatus(){
    if (this.state.isFollowing)
    this.setState({
        followButtonText: 'Unfollow'
    })
    else{
     this.setState({followButtonText: 'Follow'}) 
    }
   
  }

  addFollower(){
    
    let total= this.state.followers;
   
    this.setState({
    followers : ++total,
    isFollowing: true,
    followButtonText: 'Unfollow'
    });
 

  }

  removeFollower(){
    let total= this.state.followers;
   
    this.setState({
    followers : --total,
    isFollowing: false,
    followButtonText: 'Follow'
    });
    

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
        onClick={this.state.isFollowing ? this.removeFollower : this.addFollower}
        >{this.state.followButtonText}</button>
        
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
