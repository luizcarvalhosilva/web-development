
function ProfilePicture() {
    const imageUrl = "./src/assets/tiger-icon.jpeg";

    const handleClick = () => console.log("Hey");

    return(<img onClick={handleClick} src={imageUrl}></img>)
}

export default ProfilePicture;