// Array To Store Valid Results
const results = []; 

  // Construct Table To Display Result 
const resultTableElem = document.createElement('table'); 
const resultHRowElem = document.createElement('tr'); 
const xHeaderColElem = document.createElement('th');
const opHeaderColElem = document.createElement('th'); 
const yHeaderColElem = document.createElement('th');
const resultHeaderColElem = document.createElement('th'); 

    // Set Table Headers 
xHeaderColElem.innerText = 'x';
opHeaderColElem.innerText = 'op';
yHeaderColElem.innerText = 'y'; 
resultHeaderColElem.innerText = 'result';  

// Apppend Header Columns To Header Row 
resultHRowElem.appendChild(xHeaderColElem); 
resultHRowElem.appendChild(opHeaderColElem); 
resultHRowElem.appendChild(yHeaderColElem);
resultHRowElem.appendChild(resultHeaderColElem);  

 // Append Header Row To Table 
 resultTableElem.appendChild(resultHRowElem);  

// Append Table To Body 
 document.body.appendChild(resultTableElem);

  // Set Table Border 
  resultTableElem.setAttribute('border', '1');  
  do {     
   // Input X     
		let xStr = prompt('Value of x');      
   // Input Operator     
        let operator = prompt('Operator ');     
   // Input Y     
   		let yStr = prompt('Value of y');      
   		let isValid = true;     let result;      
   // Parse X & Y To Integers     
  		let x = parseInt(xStr);     
   		let y = parseInt(yStr);     
    if (isNaN(x) || isNaN(y)) {         
    // X Or Y Are Non-Numeric         
    	result = 'Wrong Input Number';        
    	isValid = false;     
	} else {        
// Perform Computation Based On Opertor using switch         
switch (operator) {             
     case '+':                 
     result = x + y;                 
     break;             
     case '-':                 
     result = x - y;                 
     break;             
     case '*':                 
     result = x * y;                 
     break;             
     case '/':                 
     result = x / y;                 
     break;             
     case '%':                 
     result = x % y;                 
     break;             
     default:    

     // Invalid Operator                 
     isValid = false;                
     result = 'Computation Error';         
   }     
 }      
// Create A New Row To Results Table     
let resultRowElement = document.createElement('tr');     
let xColElem = document.createElement('td');     
let opColElem = document.createElement('td');     
let yColElem = document.createElement('td');     
let resultColElem = document.createElement('td');  

xColElem.innerText = xStr;     
opColElem.innerText = operator;     
yColElem.innerText = yStr;     
resultColElem.innerText = result;          
resultRowElement.appendChild(xColElem);     
resultRowElement.appendChild(opColElem);    
resultRowElement.appendChild(yColElem);     
resultRowElement.appendChild(resultColElem);

// Add Operator CSS Class To Operator Column     
opColElem.classList.add('operator');      
resultTableElem.appendChild(resultRowElement); 

// If Expression Is Valid, Push It Into The Results Array     
if (isValid) {         
   results.push(result);     
   } 
} 
 while (confirm('Continue?'));  

 // Construct Table To Display Result Stats 
const statTableElem = document.createElement('table'); 
const statHRowElem = document.createElement('tr'); 
const minHeaderColElem = document.createElement('th'); 
const maxHeaderColElem = document.createElement('th'); 
const avgHeaderColElem = document.createElement('th'); 
const totHeaderColElem = document.createElement('th');  

// Set Table Headers 
minHeaderColElem.innerText = 'Min'; 
maxHeaderColElem.innerText = 'Max'; 
avgHeaderColElem.innerText = 'Average'; 
totHeaderColElem.innerText = 'Total';  

// Apppend Header Columns To Header Row 
statHRowElem.appendChild(minHeaderColElem); 
statHRowElem.appendChild(maxHeaderColElem); 
statHRowElem.appendChild(avgHeaderColElem); 
statHRowElem.appendChild(totHeaderColElem);

// Append Header Row To Table 
statTableElem.appendChild(statHRowElem); 

// Append Table To Body 
document.body.appendChild(statTableElem);

// Set Table Border 
statTableElem.setAttribute('border', '1');  

// Find Min, Max, Avg And Total 
let min = results[0]; 
let max = results[0]; 
let total = results[0];  
for (let i = 1; i < results.length; i++) {     
	if (results[i] < min) {         
		min = results[i];   
	}      
	if (results[i] > max) {         
		max = results[i];     
	}      
	total += results[i]; 
}  
let avg = total / results.length;  
// Create A Row Display The Results 
const statRowElem = document.createElement('tr'); 
const minColElem = document.createElement('td'); 
const maxColElem = document.createElement('td'); 
const avgColElem = document.createElement('td'); 
const totColElem = document.createElement('td');  
minColElem.innerText = min; 
maxColElem.innerText = max; 
avgColElem.innerText = avg; 
totColElem.innerText = total;

statRowElem.appendChild(minColElem); 
statRowElem.appendChild(maxColElem); 
statRowElem.appendChild(avgColElem); 
statRowElem.appendChild(totColElem);  

statTableElem.appendChild(statRowElem);
