interface ExcercisesInfo {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface InputDataEx {
    target: number;
    hours: Array<number>;
}

const parseArgumentsEx = (args: Array<string>): InputDataEx => {

    if (args.length < 4) throw new Error('Not enough arguments').toString();

    const hours: Array<number> = [];

    if (isNaN(Number(args[2])))
        throw new Error('Provided values were not numbers!').toString();

    for (let i = 3; i < args.length; i++) {
        if (!isNaN(Number(args[i]))) {
            hours.push(Number(args[i]));
        }
        else
            throw new Error('Provided values were not numbers!').toString();
    }
    return {
        target: Number(args[2]),
        hours: hours
    };
};

const reducer = (accumulator: number, currentValue:number): number => accumulator + currentValue;

export const excerciseCalculator = (target: number, days: Array<number>): ExcercisesInfo => {
    const notNumbers = (days.some(h => isNaN(h)) || (isNaN(target))) ? true : false;
    if (notNumbers)
        throw new Error('Wrong arguments! All arguments must be or contain a number type value.').toString();
    else {
        const wrongData = (days.some(h => h < 0) || (days.length === 0) || (target < 0)) ? true : false;
        if (wrongData)
            throw new Error('Wrong arguments! The input array could not be empty! Also, all data must be 0 or greater.').toString();
        else {
            const response: ExcercisesInfo = {
                periodLength: 0,
                trainingDays: 0,
                success: false,
                rating: 0,
                ratingDescription: '',
                target: 0,
                average: 0
            };
            response.periodLength = days.length;
            let sum = 0;
            days.forEach(h => {
                if (h != 0)
                    sum++;
            });
            response.trainingDays = sum;
            const totalHours = days.reduce(reducer);
            response.average = totalHours / days.length;
            response.success = response.average < target ? false : true;
            if (response.average < (target * 0.7))
                response.rating = 3;
            else if (response.average < (target * 1.2))
                response.rating = 2;
            else
                response.rating = 1;
            switch (response.rating) {
                case 1:
                    response.ratingDescription = 'Well done! But remember to keep improving yourself..';
                    break;
                case 2:
                    response.ratingDescription = 'Not bad, however you may want to be the best! So, hands on..';
                    break;
                case 3:
                    response.ratingDescription = 'Not even closer, come on you could do it better!';
                    break;
                default:
                    response.ratingDescription = 'This should not happen';
            }
            response.target = target;
            return response;
        }
    }
};

//const arrayDays: Array<number> = [3, 0, 2, 4.5, 0, 3, 1];
//const arrayDays: Array<number> = [1, 5, 0];


try {
    const { target, hours } = parseArgumentsEx(process.argv);
    console.log(excerciseCalculator(target, hours));
} catch (e) {
    console.log('Something went wrong, error message: ', e);
}
