export default function HobbyLinks() {
    let pageTitle = "My Favorite Hobbies";
    let hobby1 = "https://hobbycents.com/hobby-guides/fishing-hobby-guide/";
    let hobby2 = "https://hobbycents.com/hobby-guides/reading-hobby-guide/";
    let hobby3 = "https://hobbycents.com/hobby-guides/hiking-hobby-guide/";
 
    let hobbyLinks = [hobby1, hobby2, hobby3];
    return (
       <div>
        <h3>{pageTitle}</h3>
        <ul>
            <li><a href = {hobbyLinks[0]}>Fishing</a></li>
            <li><a href = {hobbyLinks[1]}>Reading</a></li>
            <li><a href = {hobbyLinks[2]}>Hiking</a></li>
        </ul>
       </div>      
    );
 }