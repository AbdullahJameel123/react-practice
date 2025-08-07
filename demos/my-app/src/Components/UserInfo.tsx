import "./UserInfo.css";

function UserInfo() {
    let user = {
        name: "Abdullah Askeri",
        about: "Frontend React Developer and UI/UX Designer with 10+ years of experience.",
        profileImg: "https://imgs.search.brave.com/vp0EYQD3FX9O1T_vOFGhOUx62chHLqV1yPdyGvk_GWs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTg3/ODA1MTU2L3ZlY3Rv/ci9wcm9maWxlLXBp/Y3R1cmUtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Z2t2TERDZ3NI/SC04SGVRZTdKc2po/bE9ZNnZSQkprX3NL/VzlseWFMZ21Mbz0",
        profileUrl: "https://github.com/AbdullahJameel123/"
    }
    return (
        <div className="card" style={{width: "18rem", margin: "1rem auto"}}>
    <img src={user.profileImg} className="card-img-top" alt={user.name}/>
    <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.about}</p>
        <a href={user.profileUrl} className="btn btn-primary">View My Profile</a>
    </div>
    </div>
    )
}

export default UserInfo;