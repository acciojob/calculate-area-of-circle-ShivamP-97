 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 let area=Math.PI*radius*radius;
	 let roundedArea=area.toFixed(2);
	 alert(`The area of the circle with ${radius} is ${roundedArea}`);
           
}
calculateArea();
