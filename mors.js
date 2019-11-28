const mors = {

    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-	',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    ' ': '/',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '\'': '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    '¿': '..-.-',
    '¡': '--...-',

}

const alphabethToMors = (morsString) => {

    const setTurkishCharacters = (string) => {

        let letters = { 'İ': 'I', 'Ş': 'S', 'Ğ': 'G', 'Ü': 'U', 'Ö': 'O', 'Ç': "C" };
    
        return string.replace(/([İŞĞÜÖÇ])/g, letter => letters[letter]);
    
    }

    morsString = setTurkishCharacters(morsString.toUpperCase());

    morsArray = [ ...morsString ];

    return morsArray.map(item => mors[item]  ? mors[item] + ' ' : '').join('').trim();

}

const morsToAlphabeth = (morsString) => {

    morsArray = morsString.split(' ');

    return morsArray.map(item => Object.keys(mors)[ Object.values(mors).indexOf(item) ]).join('');

}