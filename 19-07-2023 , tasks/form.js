
$(document).ready(function() {
    $('#example-getting-started').multiselect({
      enableFiltering: true,
      includeSelectAllOption: true,
      maxHeight: 200,
      buttonWidth: '200px',
      nSelectedText: 'selected',
      delimiterText: ',',
      selectAllJustVisible: false,
      includeResetOption: true
    });
  });

function label(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,labelName){
    var label = document.createElement(tagName);
    label.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        label.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        label.setAttribute(attributeName3,attributeValue3);
    }
    label.innerHTML = labelName; // content
    return label;
}

function input(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,
    attributeName4,attributeValue4,attributeName5,attributeValue5,attributeName6,attributeValue6,attributeName7,attributeValue7){
    var input = document.createElement(tagName);
    input.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        input.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        input.setAttribute(attributeName3,attributeValue3);
    }
    if(attributeName4 !== "" && attributeValue4 !== ""){
        input.setAttribute(attributeName4,attributeValue4);
    }   
    if(attributeName5 !== "" && attributeValue5 !== ""){
        input.setAttribute(attributeName5,attributeValue5);
    }
    if(attributeName6 !== "" && attributeValue6 !== ""){
        input.setAttribute(attributeName6,attributeValue6);
    }     
    if(attributeName7 !== "" && attributeValue7 !== ""){
        input.setAttribute(attributeName7,attributeValue7);
    }     
    return input;
}

function button(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,buttonName){
    var button = document.createElement(tagName);
    button.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        button.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        button.setAttribute(attributeName3,attributeValue3);
    }   
    button.innerHTML = buttonName; // content
    return button;
}

function textArea(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,
    attributeName4,attributeValue4,attributeName5,attributeValue5,attributeName6,attributeValue6){
    var textArea = document.createElement(tagName);
    textArea.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        textArea.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        textArea.setAttribute(attributeName3,attributeValue3);
    }   
    if(attributeName4 !== "" && attributeValue4 !== ""){
        textArea.setAttribute(attributeName4,attributeValue4);
    }   
    if(attributeName5 !== "" && attributeValue5 !== ""){
        textArea.setAttribute(attributeName5,attributeValue5);
    }  
    if(attributeName6 !== "" && attributeValue6 !== ""){
        textArea.setAttribute(attributeName6,attributeValue6);
    }     
    return textArea;
}

function breakLine(tagName){
    var breakLine = document.createElement(tagName);
    return breakLine;
}



var labelFristName = label("label","for","fristName","","","","","Frist Name :");

var inputFristName = input("input","type","text","id","fristName","placeholder","Enter Your fristName here!","required","true","","","","","","");

var br1 = breakLine("br");

var labelLastName = label("label","for","lastName","","","","","Last Name :");

var inputLastName = input("input","type","text","id","lastName","placeholder","Enter Your lastName here!","required","true","","","","","","");

var br2 = breakLine("br");

var labelAddress = label("label","for","address","","","","","Address :");

var inputAddress = textArea("textArea","name","address","id","address","placeholder","Enter Your Address here!","rows","3","cols","35"
,"required","true");

var br3 = breakLine("br");

var labelPincode = label("label","for","pincode","","","","","Pincode :");

var inputPincode = input("input","type","text","id","pincode","placeholder","Enter Your Pincode here!","minlength","6",
"maxlength","6","oninput","this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);","required","true");

var br4 = breakLine("br");

var labelGender = label("label","for","gender","","","","","Gender :");

var br5 = breakLine("br");

var labelGenderMale = label("label","for","male","","","","","Male :");

var inputGenderMale = input("input","type","radio","id","Gender","value","male","required","true","","","","","","");

var labelGenderFemale = label("label","for","female","","","","","Female :");

var inputGenderFemale = input("input","type","radio","id","Gender","value","male","required","true","","","","","","");

var labelGender = label("label","for","transgender","","","","","Transgender :");

var inputGender = input("input","type","radio","id","Gender","value","transgender","required","true","","","","","","");

var br6 = breakLine("br");



var sumbitButton = label("button","type","button","onclick","click1()","","","Sumbit");

document.body.append();

function click1(){
    // var check = document.getElementById("").value;
    
}








