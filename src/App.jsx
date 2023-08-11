import './App.css'
import ProfileCard from "./components/ProfileCard";

function App () {
    return (
        <div className="App">
            <div className='containerPC'>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
                <ProfileCard user={1}/>
            </div>

        </div>
    );
}

export default App;
