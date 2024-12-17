import { options } from './data';

const reducer = (state, action) => {
    if (action.type === 'change_part') {
        return {
            ...state,
            hair: action.hair,
            ears: action.ears,
            eyes: action.eyes,
            mouth: action.mouth,
            neck: action.neck,
            leg: action.leg,
            accesories: action.accesories,
            background: action.background,
        };
    }
    if (action.type == 'random_parts') {
        return {
            hair: options.hair[Math.floor(Math.random() * options.hair.length)],
            ears: options.ears[Math.floor(Math.random() * options.ears.length)],
            eyes: options.eyes[Math.floor(Math.random() * options.eyes.length)],
            mouth: options.mouth[
                Math.floor(Math.random() * options.mouth.length)
            ],
            neck: options.neck[Math.floor(Math.random() * options.neck.length)],
            leg: options.leg[Math.floor(Math.random() * options.leg.length)],
            accesories:
                options.accesories[
                    Math.floor(Math.random() * options.accesories.length)
                ],
            background:
                options.background[
                    Math.floor(Math.random() * options.background.length)
                ],
        };
    }
    throw Error('Unknown action.');
};

export default reducer;
