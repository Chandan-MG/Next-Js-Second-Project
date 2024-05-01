import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp(){
    function addMeetupHandler(enteredMeetuoData){
        console.log(enteredMeetuoData);
    }
    return(
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
export default NewMeetUp;