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
    
    const planArrayTitle = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type[trackNum.chosen_type].plan.map(object => {
        return object.title
    })

    let getWantArray = []
    let getTypeArray = []
    let getPlanArray = []
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

        getPlanArray = getTypeArray.map(object => {
            return object.map(element => {
                return element.map(item => {
                    return item.plan
                })
            })
        })

        getSuggestionArray = getPlanArray.map(object => {
             return object.map(element => {
                 return element.map(item => {
                     return item.map(thing => {
                        //thing.suggestion !== undefined ? suggestionList.push(thing.suggestion) :  console.log("Hi")
                        return thing.suggestion
                    })
                })
            })
        })

        expectedTreatmentArray = new Set(suggestionList)
    }

    else if(trackState===1){
        getTypeArray = treeData.need[trackNum.chosen_need].want.map(object => {
            return object.type
        })

        getPlanArray = getTypeArray.map(object => {
            return object.map(element => {
                return element.plan
            })
        })

        getSuggestionArray = getPlanArray.map(object => {
            return object.map(element => {
                return element.map(item => {
                    item.suggestion !== undefined ? suggestionList.push(item.suggestion) :  console.log("Hi")
                    return item.suggestion
               })
           })
       })

        expectedTreatmentArray = new Set(suggestionList)
    }

    else if(trackState===2){
        getPlanArray = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type.map(object => {
            return object.plan
        })

        getSuggestionArray = getPlanArray.map(object => {
            return object.map(element => {
                element.suggestion !== undefined ? suggestionList.push(element.suggestion) :  console.log("Hi")
                return element.suggestion
            })
        })
        expectedTreatmentArray = new Set(suggestionList)
    }

    else if(trackState===3){
        getSuggestionArray = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type[trackNum.chosen_type].plan.map(object => {
                return object.suggestion
        })

        expectedTreatmentArray = new Set(getSuggestionArray)
    }

  else if(trackState===4){
        suggestionList.push(treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type[trackNum.chosen_type].plan[trackNum.chosen_plan].suggestion)
        expectedTreatmentArray = new Set(suggestionList)
    }
    
    //Get question header
    const questionHeader1 = treeData.question
    const questionHeader2 = treeData.need[trackNum.chosen_need].question
    const questionHeader3 = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].question
    const questionHeader4 = treeData.need[trackNum.chosen_need].want[trackNum.chosen_want].type[trackNum.chosen_type].question
    const questionHeaderArray = [questionHeader1, questionHeader2, questionHeader3, questionHeader4]
    
    //List of choices
    const questionArray = [needArrayTitle, wantArrayTitle, typeArrayTitle, planArrayTitle]     

    let returnedValues = [trackState, trackNum, questionHeaderArray[trackState], questionArray[trackState], expectedTreatmentArray]

    return returnedValues
}

export default Determiner