// UC1 - Check Employee Present or Absent

{
	const IS_ABSENT = 0;

	let employeeCheck = Math.floor(Math.random() * 10 % 2);
	if (employeeCheck == IS_ABSENT) {
		console.log("Employee is Absent");
	} else {
		console.log("Employee is Present");
	}
}

// UC2 - Calculate the Employee Wage Based on part time or full time work using Switch Case
{
	const IS_PART_TIME = 1;
	const IS_FULL_TIME = 2;
	const PART_TIME_HOURS = 4;
	const FULL_TME_HOURS = 8;
	const WAGE_PER_HOUR = 20;

	let empHours = 0;
	let employeeCheck = Math.floor(Math.random() * 10 % 3);
	switch (employeeCheck) {
		case IS_PART_TIME:
			empHours = PART_TIME_HOURS;
			break;
		case IS_FULL_TIME:
			empHours = FULL_TME_HOURS;
			break;
		default:
			empHours = 0;
	}

	let empWage = empHours * WAGE_PER_HOUR;
	console.log('Employee Wage : ' + empWage);
}


// UC3 -  Refactored the code to use function to get the employee wage

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(employeeCheck) {
	switch (employeeCheck) {
		case IS_PART_TIME:
			return PART_TIME_HOURS
			break;
		case IS_FULL_TIME:
			return FULL_TME_HOURS;
			break;
		default:
			return 0;
	}
}

let empHours = 0;
let employeeCheck = Math.floor(Math.random() * 10 % 3);

empHours = getWorkingHours(employeeCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log('Employee Wage : ' + empWage);


//UC4 - Calculating the wages for the month 
{
	const WORKING_DAYS_IN_MONTH = 20;
	empHours = 0;
	for (let day = 1; day <= 20; day++) {
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		empHours += getWorkingHours(employeeCheck);
	}
	empWage = empHours * WAGE_PER_HOUR;
	console.log('Total Emp Hours ' + empHours + ' Employee Monthly Wage ' + empWage);
}

// UC5- Calculate the wages till the limit of hours or days is reached
{
	const WORKING_DAYS_IN_MONTH = 20;
	const MAX_HOURS_IN_MONTH = 160;
	empHours = 0;
	let workingDays = 0;
	while ((workingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
		workingDays++;
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		empHours += getWorkingHours(employeeCheck);
	}
	empWage = empHours * WAGE_PER_HOUR;
	console.log('Total Working Days ' + workingDays + ' Total Emp Hours ' + empHours + ' Employee Monthly Wage ' + empWage);
}

// UC6 - Store the daily wage along with the Total Wage

{
	function calculateDailyWage(empHours) {
		return empHours * WAGE_PER_HOUR;
	}

	const WORKING_DAYS_IN_MONTH = 20;
	const MAX_HOURS_IN_MONTH = 160;
	let totalEmpHours = 0;
	let totalWorkingDays = 0;
	let empDailyWageArr = new Array();
	while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
		totalWorkingDays++;
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		let empHours = getWorkingHours(employeeCheck);
		totalEmpHours += empHours;
		empDailyWageArr.push(calculateDailyWage(empHours));
	}
	let empWage = calculateDailyWage(totalEmpHours);
	console.log('Total Working Days ' + totalWorkingDays + ' Total Emp Hours ' + totalEmpHours + ' Employee Monthly Wage ' + empWage);
	console.log(empDailyWageArr);

	// Array helper functions 
	// UC7-A Calculate total wage using Array forEach Traversal reduce method
	let totEmpWage = 0;
	function sum(dailyWage) {
		totEmpWage += dailyWage;
	}
	empDailyWageArr.forEach(sum);
	console.log('Total Working Days ' + totalWorkingDays + ' Total Emp Hours ' + totalEmpHours + ' Employee Monthly Wage ' + totEmpWage);

	// reduce method
	function totalWages(totalWage, dailyWage) {
		return totalWage + dailyWage;
	}
	console.log('Employee Wage with reduce ' + empDailyWageArr.reduce(totalWages, 0));

	//UC7-B Show the day along with teh Daily wage using the array map helper function
	let dailyCntr = 0;
	function mapDayWithWage(dailyWage) {
		dailyCntr++;
		return dailyCntr + " = " + dailyWage;
	}
	let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
	console.log('Daily Wage Map');
	console.log(mapDayWithWageArr);

	// UC7-C Use the filter function to find the day Employee worked full time
	function fulltimeWage(dailyWage) {
		return dailyWage.includes('160');
		//return dailyWage == '160';
	}
	let fullDayWageArrayFilter = mapDayWithWageArr.filter(fulltimeWage);
	console.log('Daily age filter when FullTime wage earned');
	console.log(fullDayWageArrayFilter);

	// UC7-D Find the first occurence when full time age as earned using the find function
	function findFullTimeWage(dailyWage) {
		return dailyWage.includes('160');
	}
	console.log('UC7-D - FirstTime full time wage was earned in on day: ' + mapDayWithWageArr.find(findFullTimeWage));

	// UC7-E Check if Every Element of Full time wage is holding full time wage
	function isEveryFullTimeWage(dailyWage) {
		return dailyWage.includes('160');
	}
	console.log('UC7-E - Check Every Element have full time Wage: ' + fullDayWageArrayFilter.every(isEveryFullTimeWage));

	// UC7-F Check if All Element of Full time wage is holding full time wage
	function isAnyPartTimeWage(dailyWage) {
		return dailyWage.includes('160');
	}
	console.log('UC7-F - Check All Element have full time Wage: ' + mapDayWithWageArr.some(isAnyPartTimeWage));

	// UC7-G Find number of days Employee worked
	function totalDaysWorked(noOfDays, dailyWage) {
		if (dailyWage > 0) {
			return noOfDays + 1;
		}
		return noOfDays;
	}

	console.log('Number of days Employee Worked: ' + empDailyWageArr.reduce(totalDaysWorked, 0));
}

{
	// UC8 Store day and daily wage of the Employee along with the total wage 
	const WORKING_DAYS_IN_MONTH = 20;
	const MAX_HOURS_IN_MONTH = 160;
	let empDailyWageMap = new Map();
	let empDailyHrsMap = new Map();
	let empDailyWageArr = new Array();
	let totalEmpHours = 0;
	let totalWorkingDays = 0;
	function totalWages(totalWage, dailyWage) {
		return totalWage + dailyWage;
	}
	while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
		totalWorkingDays++;
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		let empHours = getWorkingHours(employeeCheck);
		totalEmpHours += empHours;
		empDailyWageArr.push(calculateDailyWage(empHours));
		empDailyHrsMap.set(totalWorkingDays, empHours);
		empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHours));
	}
	console.log(empDailyWageMap);
	console.log('UC8-A Emp Wage Map totalHours: ' + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

	// UC9 -  Arrow Functions
	const findTotal = (totalVal, dailyVal) => {
		return totalVal + dailyVal;
	}

	let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
	let totalSalary = empDailyWageArr
		.filter(dailyWage => dailyWage > 0)
		.reduce(findTotal, 0);
	console.log('UC-9 Employee Wage with Arrow. : ' + 'Total Hours: ' + totalHours + ' Total Wages: ' + totalSalary);

	let nonWorkingDays = new Array();
	let partWorkingDays = new Array();
	let fullWorkingDays = new Array();
	empDailyHrsMap.forEach((value, key, map) => {
		if (value == 8) {
			fullWorkingDays.push(key);
		} else if (value == 4) {
			partWorkingDays.push(key);
		} else {
			nonWorkingDays.push(key);
		}
	});

	console.log(' FullTime Working Days: ' + fullWorkingDays);
	console.log(' PartTime Working Days: ' + partWorkingDays);
	console.log(' Non Working Days: ' + nonWorkingDays);
}

{
	// UC 10 - 
	const WORKING_DAYS_IN_MONTH = 20;
	const MAX_HOURS_IN_MONTH = 160;
	let empDailyHoursAndWageArr = new Array();
	let totalEmpHours = 0;
	let totalWorkingDays = 0;
	function totalWages(totalWage, dailyWage) {
		return totalWage + dailyWage;
	}
	while ((totalWorkingDays < WORKING_DAYS_IN_MONTH) && empHours <= MAX_HOURS_IN_MONTH) {
		totalWorkingDays++;
		let employeeCheck = Math.floor(Math.random() * 10 % 3);
		let empHours = getWorkingHours(employeeCheck);
		totalEmpHours += empHours;
		empDailyHoursAndWageArr.push(
			{
				dayNum: totalWorkingDays,
				dailyHours: empHours,
				dailyWage: calculateDailyWage(empHours),
				toString() {
					return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
						' and Wage Earned = ' + this.dailyWage
				}
			});
	}

	// UC10 - Objects 
	console.log('UC- 10 Showing the Daily Hours Worked and Wage Earned: ' + empDailyHoursAndWageArr)

	// UC11A to UC11-D Using Objects along with the arrow functions

	let totalWage = empDailyHoursAndWageArr
		.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
		.reduce((totalWages, dailyHrsAndWage) => totalWages += dailyHrsAndWage.dailyWage, 0);
	let totalHours = empDailyHoursAndWageArr
		.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
		.reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
	console.log('UC 11A Total Hours: ' + totalHours + ' Total Wages: ' + totalWage);

	process.stdout.write('UC 11B: Logging Full Working Days');
	empDailyHoursAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
		.forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

	let partWorkingDayStrArr = empDailyHoursAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
		.map(dailyHrsAndWage => dailyHrsAndWage.toString());
	console.log('\nUC 11C PartWorkingDaysStrings: ' + partWorkingDayStrArr);

	let nonWorkingDayNums = empDailyHoursAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
	.map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
	console.log(' UC 11D: NonWorkingDayNums: '+nonWorkingDayNums);
}