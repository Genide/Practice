/** This is a Car class */
class Car{
	/**
	* Create a car.
	* @param {number} wheels - The number of wheels
	* @param {string} color - The color of the car
	*/
	constructor(wheels, color) {
		/** @public */
		this.wheels = wheels;
		/** @public */
		this.color = color;
		/** @public */
		this.miles = 0;
	}

	/**
	* Drives the car
	* @param {number} miles - The number of miles to drive the car
	* @returns {number} The total number of miles driven by the car
	*/
	drive(miles) {
		this.miles += miles;
		return this.miles;
	}

	/**
	* Changes the color of the car to the new color
	* @param {string} newColor - The new color of the car
	* @returns {string} The color of the car after this function is called
	*/
	recolor(newColor) {
		this.color = newColor;
		return this.color;
	}
}
