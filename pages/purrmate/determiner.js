import {useContext} from "react";
import treeData from "./treeData"
import UserContext from "../../components/UserContext";

const Determiner = (numForUpdate, numForNavigate, numForNavigateChange) => {
    
    const {trackNum} = useContext(UserContext)
    const {trackState} = useContext(UserContext)

    //Determines next choices
    const needArrayTitle = treeData.need.map(object => {
        return object.title
    })
    
    const wantArrayTitle = treeData.need[trackNum.chosen_need].want.map(object => {
        return object.title
    })
    
    const typeArrayTitle = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type.map(object => {
        return object.title
    })

    let getWantArray = []
    let getTypeArray = []
    let getSuggestionArray = []
    let suggestionList = []
    let expectedTreatmentArray = []

    //Determines treatments based on user choices
    if(trackState===0){
        getWantArray = treeData.need.map(object => {
            return object.want
        })

        getTypeArray = getWantArray.map(object => {
            return object.map(element => {
                return element.type
            })
        })

        

        getSuggestionArray = getTypeArray.map(object => {
             return object.map(element => {
                 return element.map(item => {
                    return item.suggestion
                })
            })
        })

        expectedTreatmentArray = new Set(suggestionList)
    }

    else if(trackState===1){
        getTypeArray = treeData.need[trackNum.chosen_need].want.map(object => {
            return object.type
        })


        getSuggestionArray = getTypeArray.map(object => {
            return object.map(element => {
                element.suggestion !== undefined ? suggestionList.push(element.suggestion) :  console.log("Hi")
                return element.suggestion
           })
       })

        expectedTreatmentArray = new Set(suggestionList)
    }

    else if(trackState===2){
        getSuggestionArray = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type.map(object => {
                return object.suggestion
        })

        expectedTreatmentArray = new Set(getSuggestionArray)
    }

  else if(trackState===3){
        suggestionList.push(treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type[trackNum.chosen_type].suggestion)
        expectedTreatmentArray = new Set(suggestionList)
        console.log(expectedTreatmentArray)
    }
    
    //Get question header
    const questionHeader1 = treeData.question
    const questionHeader2 = treeData.need[trackNum.chosen_need].question
    const questionHeader3 = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].question
    const questionHeader4 = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type[trackNum.chosen_type].question
    const questionHeaderArray = [questionHeader1, questionHeader2, questionHeader3, questionHeader4]
    
    //List of choices
    const questionArray = [needArrayTitle, wantArrayTitle, typeArrayTitle]     

    let returnedValues = [trackState, trackNum, questionHeaderArray[trackState], questionArray[trackState], expectedTreatmentArray]

    return returnedValues
}

export default Determiner