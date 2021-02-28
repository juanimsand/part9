interface InputDataBmi {
    height: number;
    weight: number;
}

const parseArgumentsBmi = (args: Array<string>): InputDataBmi => {
    if (args.length < 4) throw new Error('Not enough arguments').toString();
    if (args.length > 4) throw new Error('Too many arguments').toString();

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers!').toString();
    }
};

export const calculateBmi = (h: number, m: number): string => {
    if ((m <= 0) || (h <= 0))
        throw new Error('Mass and height must be greater than 0!').toString();
    else {
        const bmi = (m / ((h / 100) * (h / 100)));
        if (bmi < 15)
            return 'Very severely underweight';
        else if (bmi < 16)
            return 'Severely underweight';
        else if (bmi < 18.5)
            return 'Underweight';
        else if (bmi < 25)
            return 'Normal (healthy weight)';
        else if (bmi < 30)
            return 'Overweight';
        else if (bmi < 35)
            return 'Obese Class I (Moderately obese)';
        else if (bmi < 40)
            return 'Obese Class II (Severely obese)';
        else
            return 'Obese Class II (Severely obese)';
    }
};


try {
    const { height, weight } = parseArgumentsBmi(process.argv);
    console.log(calculateBmi(height, weight));
} catch (e) {
    console.log('Something went wrong, error message: ', e);
}